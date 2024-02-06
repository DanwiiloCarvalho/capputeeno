import { Category } from "@/enum/category"
import { Priority } from "@/enum/priority"
import { createContext, useState } from "react"

interface FilterContextProps {
    children: React.ReactNode
}

export interface AppContextProviderProps {
    categoryValue: Category,
    priorityValue: Priority,
    searchBarValue: string,
    setCategoryValue: (categoryValue: Category) => void,
    setPriorityValue: (priorityValue: Priority) => void,
    setSearchBarValue: (searchValue: string) => void,
}

export const AppContext = createContext({})

export function FilterContext({ children }: FilterContextProps) {
    const [categoryValue, setCategoryValue] = useState<Category>(Category.ALL_PRODUCTS)
    const [priorityValue, setPriorityValue] = useState<Priority>(Priority.BEST_SELLERS)
    const [searchBarValue, setSearchBarValue] = useState<string>('')

    const appContextValue = {
        categoryValue,
        setCategoryValue,
        priorityValue,
        setPriorityValue,
        searchBarValue,
        setSearchBarValue
    } as AppContextProviderProps

    return (
        <AppContext.Provider value={appContextValue}>
            {children}
        </AppContext.Provider>
    )
}