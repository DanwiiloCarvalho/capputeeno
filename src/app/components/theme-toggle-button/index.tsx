'use client'

import { useContext } from "react"
import { ThemeContext, ThemeContextProviderProps } from "@/app/contexts/theme-provider"
import { SunIcon } from "../icons/sun-icon"
import { MoonIcon } from "../icons/moon-icon"
import { ThemeToggleButtonContainer } from "./styles"

export function ThemeToggleButton() {
    const { themeMode, toggleTheme } = useContext(ThemeContext) as ThemeContextProviderProps

    return (
        <ThemeToggleButtonContainer
            onClick={toggleTheme}
            aria-label="Alterar entre os modos claro e escuro"
            title="Alterar entre os modos claro e escuro"
        >
            {themeMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </ThemeToggleButtonContainer>
    )
}