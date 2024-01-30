import { AddToCartIcon } from "@/app/components/icons/add-to-cart-icon";
import { AddToCartButtonContainer } from "./styles";

export function AddToCartButton() {
    return (
        <AddToCartButtonContainer>
            <AddToCartIcon />
            <span>Adicionar ao carrinho</span>
        </AddToCartButtonContainer>
    )
}