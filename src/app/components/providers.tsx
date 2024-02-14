'use client'

import { ThemeProvider } from "styled-components"
import { GlobalStyle, defaultTheme } from "../globalStyle"
import { FilterContext } from "../contexts/context-provider"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "@/lib/react-query"

export function Providers({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <QueryClientProvider client={queryClient}>
            <FilterContext>
                <ThemeProvider theme={defaultTheme}>
                    {children}
                    <GlobalStyle />
                </ThemeProvider>
            </FilterContext>
        </QueryClientProvider>
    )
}