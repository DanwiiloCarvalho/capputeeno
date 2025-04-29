'use client'

import { useContext } from "react";
import { CategoryItem, CategoryListContainer } from "./styles";
import { Category } from "@/enum/category";
import { AppContext, AppContextProviderProps } from "@/app/contexts/context-provider";

export function FilterByCategory() {
    const {
        categoryValue,
        setCategoryValue,
        setCurrentPage
    }  = useContext(AppContext) as AppContextProviderProps

    function handleCategoryItem(categoryValue: Category, contextCategoryValue: Category) {
        if (contextCategoryValue !== categoryValue) {
            setCurrentPage(0);
        }
        setCategoryValue(categoryValue)
    }

    return (
        <CategoryListContainer>
            <CategoryItem
                onClick={() => handleCategoryItem(Category.ALL_PRODUCTS, categoryValue)}
                selected={categoryValue === Category.ALL_PRODUCTS ? true : false}
            >
                todos os produtos
            </CategoryItem>
            <CategoryItem 
                onClick={() => handleCategoryItem(Category.TSHIRTS, categoryValue)}
                selected={categoryValue === Category.TSHIRTS ? true : false}
            >
                camisetas
            </CategoryItem>
            <CategoryItem 
                onClick={() => handleCategoryItem(Category.MUGS, categoryValue)}
                selected={categoryValue === Category.MUGS ? true : false}
            >
                canecas
            </CategoryItem>
            
        </CategoryListContainer>
    )
}