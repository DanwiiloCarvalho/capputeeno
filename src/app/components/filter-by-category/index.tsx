'use client'

import { useContext } from "react";
import { CategoryItem, CategoryListContainer } from "./styles";
import { Category } from "@/enum/category";
import { AppContext, AppContextProviderProps } from "@/app/contexts/context-provider";

export function FilterByCategory() {
    const {
        categoryValue,
        setCategoryValue,
    }  = useContext(AppContext) as AppContextProviderProps

    function handleCategoryItem(categoryValue: Category) {
        setCategoryValue(categoryValue)
    }

    return (
        <CategoryListContainer>
            <CategoryItem
                onClick={() => handleCategoryItem(Category.ALL_PRODUCTS)}
                selected={categoryValue === Category.ALL_PRODUCTS ? true : false}
            >
                todos os produtos
            </CategoryItem>
            <CategoryItem 
                onClick={() => setCategoryValue(Category.TSHIRTS)}
                selected={categoryValue === Category.TSHIRTS ? true : false}
            >
                camisetas
            </CategoryItem>
            <CategoryItem 
                onClick={() => setCategoryValue(Category.MUGS)}
                selected={categoryValue === Category.MUGS ? true : false}
            >
                canecas
            </CategoryItem>
            
        </CategoryListContainer>
    )
}