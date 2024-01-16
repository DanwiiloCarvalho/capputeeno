'use client'

import { ThemeProvider } from "styled-components"
import { GlobalStyle, defaultTheme } from "../globalStyle"

export function Providers({ 
    children 
} : {
    children: React.ReactNode
}){
    return(
        <ThemeProvider theme={defaultTheme}>
            { children }
            <GlobalStyle />
        </ThemeProvider>
    )
}