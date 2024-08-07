'use client'

import styled from "styled-components"

export const BackButtonContainer = styled.div`
    font-family: var(--font-saira);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 4.5rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
    
    > span {
        color: ${ props => props.theme["--Back-Button"] };
        font-size: 0.875rem;
        font-weight: 500;
    }
`