'use client'

import styled from "styled-components"

export const ProductCardContainer = styled.article`
    display: flex;
    flex-direction: column;
    
    /* width: 16rem; */
    /* height: 23.625rem; */

    line-height: 1.3125rem;
    border-radius: 0.5rem 0.5rem 0.25rem 0.25rem;
    background-color: rgba(255, 255, 255, 0.40);
    backdrop-filter: blur(10px);

    h2 {
        color: ${ props => props.theme['--Selected-Category-Filter'] };
        font-weight: 300;
        font-size: 1rem;
    }

    img {
        width: 100%;
        height: 18.75rem;
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
    }

    > div {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: space-between;
        gap: 0.5rem;
        padding: 0.5rem 0.75rem;
        overflow: hidden;
    }

    span {
        color: ${ props => props.theme["--Price-Color"] };
        font-weight: 600;
        font-size: 0.875rem;
    }
`

export const Separator = styled.div`
    width: 100%;
    height: 0.0625rem;
    background-color: #DCE2E5;
`