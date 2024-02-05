import Link from "next/link";
import { OrderSummaryContainer, SummaryInfo } from "./styles";
import { FinalizePurchaseButton } from "../finalize-purchase-button";
import { Separator } from "@/app/components/product-card/styles";

export function OrderSummary() {
    return (
        <OrderSummaryContainer>
            <SummaryInfo>
                <h2>Resumo do pedido</h2>
                <div>
                    <p>Subtotal de produtos</p>
                    <p>R$ 161,00</p>
                </div>
                <div>
                    <p>Entrega</p>
                    <p>R$ 40,00</p>
                </div>

                <Separator />

                <div>
                    <p>Total</p>
                    <p>R$ 201,00</p>
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