import Link from "next/link";
import { OrderSummaryContainer, SummaryInfo } from "./styles";
import { FinalizePurchaseButton } from "../finalize-purchase-button";
import { Separator } from "@/app/components/product-card/styles";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { priceFormat } from "@/utils/price-format";
import { calculatePropertiesProductSum } from "@/utils/calculate-property-sum";
import { CartProductItem } from "@/types/cart-product-item";

export function OrderSummary() {

    const { products } = useLocalStorage()

    /* const subTotal = products.map(cartItem => {
        return cartItem.units * cartItem.price_in_cents
    }).reduce((accumulator, currentValue) => accumulator + currentValue, 0) */

    const subTotal = calculatePropertiesProductSum<CartProductItem>(products, 'units', 'price_in_cents')

    return (
        <OrderSummaryContainer>
            <SummaryInfo>
                <h2>Resumo do pedido</h2>
                <div>
                    <p>Subtotal de produtos</p>
                    <p>{ priceFormat(subTotal) }</p>
                </div>
                <div>
                    <p>Entrega</p>
                    <p>R$ 40,00</p>
                </div>

                <Separator />

                <div>
                    <p>Total</p>
                    <p>{ priceFormat(subTotal + 4000) }</p>
                </div>
                <FinalizePurchaseButton />
            </SummaryInfo>

            <div>
                <Link href={'/'}>Ajuda</Link>
                <Link href={'/'}>Reembolsos</Link>
                <Link href={'/'}>Entregas e frete</Link>
                <Link href={'/'}>Trocas e devoluções</Link>
            </div>
        </OrderSummaryContainer>
    )
}