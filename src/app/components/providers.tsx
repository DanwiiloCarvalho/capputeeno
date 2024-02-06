'use client'

import { ThemeProvider } from "styled-components"
import { GlobalStyle, defaultTheme } from "../globalStyle"
import { FilterContext } from "../contexts/context-provider"

export function Providers({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <FilterContext>
            <ThemeProvider theme={defaultTheme}>
                {children}
                <GlobalStyle />
            </ThemeProvider>
        </FilterContext>
    )
}