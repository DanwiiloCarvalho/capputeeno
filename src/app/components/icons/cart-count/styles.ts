'use client'

import styled from "styled-components";

export const CartCountContainer = styled.span`
    font-family: var(--font-saira);
    width: 1.0625rem;
    height: 1.0625rem;
    border-radius: 50%;
    background-color: ${props => props.theme["--Cart-Quantity"]};
    color: ${props => props.theme["--Background-Secondary"]};
    font-size: 0.625rem;
    font-weight: 500;
    line-height: 1.625rem;
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    right: -35%;
    top: 60%;
`