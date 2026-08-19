'use client'

import { createGlobalStyle } from 'styled-components'

export interface AppTheme {
    '--Background-Primary': string,
    '--Background-Secondary': string,
    '--Brand-Name': string,
    '--Price-Color': string,
    '--Cart-Quantity': string,
    '--Finalize-Purchase': string,
    '--Trash-Color': string,
    '--Text-Dark-Inputs-Icons': string,
    '--Underline-Color': string,
    '--Selected-Category-Filter': string,
    '--Back-Button': string,
    '--Add-To-Cart': string,
    '--Select-Border': string,
    '--Select-Background': string,
    '--Purchase-Text-Color': string,
    '--Pagination-Button-Background': string,
    '--Header-Background': string,
    '--Search-Bar-Text': string,
    '--Product-Card-Background': string,
}

export const defaultTheme: AppTheme = {
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
    '--Back-Button': '#617480',
    '--Add-To-Cart': '#115D8C',
    '--Select-Border': '#A8A8B3',
    '--Select-Background': '#F3F5F6',
    '--Purchase-Text-Color': '#F5F5FA',
    '--Pagination-Button-Background': '#E9E9F0',
    '--Header-Background': 'rgba(255, 255, 255, 0.40)',
    '--Search-Bar-Text': '#09090A',
    '--Product-Card-Background': 'rgba(255, 255, 255, 0.40)',
}

export const darkTheme: AppTheme = {
    '--Background-Primary': '#14141A',
    '--Background-Secondary': '#232329',
    '--Brand-Name': '#E0E0E6',
    '--Price-Color': '#F0F0F5',
    '--Cart-Quantity': '#DE3838',
    '--Finalize-Purchase': '#51B853',
    '--Trash-Color': '#DE3838',
    '--Text-Dark-Inputs-Icons': '#A8A8B3',
    '--Underline-Color': '#FFA585',
    '--Selected-Category-Filter': '#E0E0E6',
    '--Back-Button': '#A8A8B3',
    '--Add-To-Cart': '#3E7EA8',
    '--Select-Border': '#41414D',
    '--Select-Background': '#2E2E35',
    '--Purchase-Text-Color': '#F5F5FA',
    '--Pagination-Button-Background': '#2E2E35',
    '--Header-Background': '#232329',
    '--Search-Bar-Text': '#DCE2E5',
    '--Product-Card-Background': '#232329',
}

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
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