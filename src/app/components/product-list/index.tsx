'use client'
import Link from "next/link";
import { ProductCard } from "../product-card";
import { ProductListContainer } from "./styles";
import { useProducts } from "@/hooks/useProducts";
import { useContext, useEffect } from "react";
import { AppContext, AppContextProviderProps } from "@/app/contexts/context-provider";

export function ProductList() {
    const { categoryValue, priorityValue } = useContext(AppContext) as AppContextProviderProps
    const { data } = useProducts(categoryValue, priorityValue)

    return (
        <ProductListContainer>
            <ul>
                {
                    data?.map(product => {
                        return (
                            <li key={product.id}>
                                <Link href={'/product/1'}>
                                    <ProductCard
                                        image_url={product.image_url}
                                        name={product.name}
                                        price_in_cents={product.price_in_cents}
                                    />
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </ProductListContainer>
    )
}