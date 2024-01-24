'use client'

import styled from "styled-components";

export const CategoryListContainer = styled.ul`
    display: flex;
    justify-content: space-between;
    line-height: 137.5%;
    text-transform: uppercase;
    gap: 0.4rem;
    color: ${props => props.theme["--Text-Dark-Inputs-Icons"]};
    width: 100%;
    font-size: .8rem;

    @media screen and (min-width: 768px) {
        font-size: 1rem;
        width: fit-content;
        gap: .9rem;
    }

    @media screen and (min-width: 968px) {
        font-size: 1rem;
        width: fit-content;
        gap: 2.5rem;
    }
`

interface CategoryItemProps {
    selected?: boolean
}


export const CategoryItem = styled.li<CategoryItemProps>`

    position: relative;
    cursor: pointer;
    font-size: 0.8rem;
    
    ${props => props.selected ? `font-weight: 600; color: ${props.theme["--Selected-Category-Filter"]};` : ''}


    ${ props => {
        if (props.selected) {
            return `
                &::after {
                    content: "";
                    position: absolute;
                    width: 100%;
                    height: .25rem; /* Espessura do underline */
                    bottom: -0.25rem;
                    left: 0;
                    background-color: ${ props.theme['--Underline-Color'] };
                }
            `
        }
    } }

    @media screen and (min-width: 968px) {
        font-size: 1rem;
    }
    
`