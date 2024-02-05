import Link from "next/link";
import { BackButton } from "../components/back-button";
import { CartPageContainer, CartProductListContainer } from "./styles";
import { CartItem } from "./components/cart-item";
import { OrderSummary } from "./components/order-summary";

export default function CartPage() {
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
                        <li><CartItem /></li>
                        <li><CartItem /></li>
                        <li><CartItem /></li>
                        <li><CartItem /></li>
                    </ul>
                </CartProductListContainer>
            </div>
            <OrderSummary />
        </CartPageContainer>
    )
}