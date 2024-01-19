'use client'

import { createGlobalStyle } from 'styled-components'

export const defaultTheme = {
    '--Background-Primary': '#F0F0F5',
    '--Background-Secondary': '#FFF',
    '--Brand-Name': '#5D5D6D',
    '--Price-Color': '#09090A',
    '--Cart-Quantity': '#DE3838',
    '--Finalize-Purchase': '#51B853',
    '--Trash-Color': '#DE3838',
    '--Placeholder-Color': '#737380',
} as const

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }

    :focus {
        outline: 0;
    }

    body, html {
        max-width: 100vw;
        overflow-x: hidden;
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font: 400 1rem var(--font-saira);
    }
`