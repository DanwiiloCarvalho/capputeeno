'use client'

import { AddToCartIcon } from "@/app/components/icons/add-to-cart-icon";
import { AddToCartButtonContainer } from "./styles";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Product } from "@/types/product";

interface AddToCartButtonProps {
    product: Product
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
    
    const { setCartProduct } = useLocalStorage()

    function handleAddToCartButton() {
        setCartProduct(product)
    }

    return (
        <AddToCartButtonContainer onClick={handleAddToCartButton}>
            <AddToCartIcon />
            <span>Adicionar ao carrinho</span>
        </AddToCartButtonContainer>
    )
}