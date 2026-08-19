'use client'

import { createContext, useState } from "react"
import { ThemeProvider } from "styled-components"
import { darkTheme, defaultTheme } from "../globalStyle"

export type ThemeMode = 'light' | 'dark'

export interface ThemeContextProviderProps {
    themeMode: ThemeMode,
    toggleTheme: () => void,
}

export const ThemeContext = createContext({} as ThemeContextProviderProps)

export function ThemeContextProvider({
    children
}: {
    children: React.ReactNode
}) {
    const [themeMode, setThemeMode] = useState<ThemeMode>('light')

    const toggleTheme = () => {
        setThemeMode(prevMode => prevMode === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
            <ThemeProvider theme={themeMode === 'light' ? defaultTheme : darkTheme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}