'use client'

import styled from "styled-components"

export const PurchaseButtonContainer = styled.button`
    width: 100%;
    background-color: ${ props => props.theme["--Finalize-Purchase"] };
    border: none;
    border-radius: 0.25rem;
    color: ${ props => props.theme["--Purchase-Text-Color"] };
    font-weight: 500;
    line-height: 150%;
    font-size: 1rem;
    text-transform: uppercase;
    padding: .8rem 0;
    cursor: pointer;
`