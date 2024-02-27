'use client'

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartCountContainer } from "./styles";

export function CartCount() {
    const { units } = useLocalStorage()
    
    return (
        <CartCountContainer>{units}</CartCountContainer>
    )
}