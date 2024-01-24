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
    '--Text-Dark-Inputs-Icons': '#737380',
    '--Underline-Color': '#FFA585',
    '--Selected-Category-Filter': '#41414D',
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