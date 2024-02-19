'use client'
import { AppContext, AppContextProviderProps } from "@/app/contexts/context-provider";
import { useContext } from "react";
import { useDebouncedCallback } from "use-debounce";
import { SearchLoupe } from "../icons/search-loupe";
import { SearchBarContainer } from "./styles";

export function SearchBar() {
    const { setSearchBarValue } = useContext(AppContext) as AppContextProviderProps
    const handleInputSearchBar = useDebouncedCallback((value) => {
        setSearchBarValue(value)
    }, 500)
    
    return (
        <SearchBarContainer>
            <input onChange={(e) => handleInputSearchBar(e.target.value)} type="text" placeholder="Procurando por algo específico?" />
            <SearchLoupe />
        </SearchBarContainer>
    )
}