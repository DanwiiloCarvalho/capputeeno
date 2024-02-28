'use client'
import Link from "next/link";
import { BackButton } from "../components/back-button";
import { CartPageContainer, CartProductListContainer } from "./styles";
import { CartItem } from "./components/cart-item";
import { OrderSummary } from "./components/order-summary";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export default function CartPage() {

    const { products } = useLocalStorage()

    return (
        <CartPageContainer>
            <div>
                <Link href={'/'}>
                    <BackButton />
                </Link>
                <CartProductListContainer>
                    <h2>Seu carrinho</h2>
                    <p>Total (3 produtos) <span>R$161,00</span></p>
                    <ul>
                        { products.map(cartItem => <li key={cartItem.id}><CartItem {...cartItem} /></li>) }
                    </ul>
                </CartProductListContainer>
            </div>
            <OrderSummary />
        </CartPageContainer>
    )
}