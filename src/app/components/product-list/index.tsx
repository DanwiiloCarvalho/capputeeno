'use client'
import Link from "next/link";
import { ProductCard } from "../product-card";
import { ProductListContainer } from "./styles";
import { useProducts } from "@/hooks/useProducts";
import { useContext, useEffect } from "react";
import { AppContext, AppContextProviderProps } from "@/app/contexts/context-provider";
import { useSearchBar } from "@/hooks/useSearchBar";

export function ProductList() {
    const { categoryValue, priorityValue, searchBarValue } = useContext(AppContext) as AppContextProviderProps
    const { data } = useProducts(categoryValue, priorityValue)

    const { filteredValue } = useSearchBar(data, searchBarValue)

    return (
        <ProductListContainer>
            <ul>
                {
                    filteredValue?.map(product => {
                        return (
                            <li key={product.id}>
                                <Link href={`/product/${product.id}`}>
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