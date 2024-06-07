'use client'
import { AppContext, AppContextProviderProps } from "@/app/contexts/context-provider";
import { useProducts } from "@/hooks/useProducts";
import { useSearchBar } from "@/hooks/useSearchBar";
import Link from "next/link";
import { useContext } from "react";
import { ProductCard } from "../product-card";
import { ProductListContainer } from "./styles";

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
                                <Link href={`/product/${product.id}`} prefetch={false}>
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