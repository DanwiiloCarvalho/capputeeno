'use client'

import { GlobalStyle } from "../globalStyle"
import { FilterContext } from "../contexts/context-provider"
import { ThemeContextProvider } from "../contexts/theme-provider"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "@/lib/react-query"
import { NProgressBar } from "./nprogress-bar"

export function Providers({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <QueryClientProvider client={queryClient}>
            <FilterContext>
                <ThemeContextProvider>
                    <NProgressBar />
                    {children}
                    <GlobalStyle />
                </ThemeContextProvider>
            </FilterContext>
        </QueryClientProvider>
    )
}