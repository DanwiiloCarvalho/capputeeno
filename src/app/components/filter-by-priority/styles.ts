'use client'

import styled from "styled-components"

export const FilterByPriorityContainer = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
    position: relative;
    color: ${ props => props.theme["--Text-Dark-Inputs-Icons"] };
    line-height: 157.143%;

    justify-content: flex-end;
    /* margin-top: 1.4rem; */

    span {
        font-size: .875rem;
    }
    
    button {
        cursor: pointer;
        height: 1.5rem;
        width: 1.5rem;
        display: flex;
        align-items: center;
        background-color: transparent;
        border: none;

        svg {
            height: inherit;
        }
    }

    ul {
        display: flex;
        position: absolute;
        top: calc(100% + 0.25rem);
        right: 0;
        flex-direction: column;
        width: 11rem;
        padding: .75rem 1rem;

        background-color: ${ props => props.theme["--Background-Secondary"] };
        border-radius: 4px;

        font-size: .875rem;
        gap: .25rem;

        > li {
            cursor: pointer;
        }
    }

    @media screen and (min-width: 768px) {
        
    }

    @media screen and (min-width: 968px) {
        
    }
`