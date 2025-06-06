import { Category } from "@/enum/category"
import { Priority } from "@/enum/priority"
import { CartProductItem } from "@/types/cart-product-item"
import { createContext, useState } from "react"

interface FilterContextProps {
    children: React.ReactNode
}

export interface AppContextProviderProps {
    categoryValue: Category,
    priorityValue: Priority,
    searchBarValue: string,
    products: CartProductItem[],
    currentPage: number,
    setCategoryValue: (categoryValue: Category) => void,
    setPriorityValue: (priorityValue: Priority) => void,
    setSearchBarValue: (searchValue: string) => void,
    setProducts: (cartProductList: CartProductItem[]) => void,
    setCurrentPage: (pageNumber: number) => void
}

export const AppContext = createContext({})

export function FilterContext({ children }: FilterContextProps) {
    const [categoryValue, setCategoryValue] = useState<Category>(Category.ALL_PRODUCTS)
    const [priorityValue, setPriorityValue] = useState<Priority>(Priority.BEST_SELLERS)
    const [searchBarValue, setSearchBarValue] = useState<string>('')
    const [products, setProducts] = useState<CartProductItem[]>([] as CartProductItem[])
    const [currentPage, setCurrentPage] = useState<number>(0);

    const appContextValues = {
        categoryValue,
        setCategoryValue,
        priorityValue,
        setPriorityValue,
        searchBarValue,
        setSearchBarValue,
        products, 
        setProducts,
        currentPage,
        setCurrentPage
    } as AppContextProviderProps

    return (
        <AppContext.Provider value={appContextValues}>
            {children}
        </AppContext.Provider>
    )
}