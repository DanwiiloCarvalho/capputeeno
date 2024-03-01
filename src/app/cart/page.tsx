'use client'
import { useLocalStorage } from "@/hooks/useLocalStorage";
import Link from "next/link";
import { BackButton } from "../components/back-button";
import { CartItem } from "./components/cart-item";
import { OrderSummary } from "./components/order-summary";
import { CartPageContainer, CartProductListContainer } from "./styles";
import { calculatePropertiesProductSum } from "@/utils/calculate-property-sum";
import { CartProductItem } from "@/types/cart-product-item";
import { priceFormat } from "@/utils/price-format";

export default function CartPage() {

    const { products, units } = useLocalStorage()
    const totalValue = calculatePropertiesProductSum<CartProductItem>(products, 'units', 'price_in_cents')

    return (
        <CartPageContainer>
            <div>
                <Link href={'/'}>
                    <BackButton />
                </Link>
                <CartProductListContainer>
                    <h2>Seu carrinho</h2>
                    <p>Total ({ units } produtos) <span>{ priceFormat(totalValue) }</span></p>
                    <ul>
                        { products.map(cartItem => <li key={cartItem.id}><CartItem {...cartItem} /></li>) }
                    </ul>
                </CartProductListContainer>
            </div>
            <OrderSummary />
        </CartPageContainer>
    )
}