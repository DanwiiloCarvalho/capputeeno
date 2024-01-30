'use client'
import styled from "styled-components";

export const AddToCartButtonContainer = styled.button`
    cursor: pointer;
    background-color: ${ props => props.theme["--Add-To-Cart"] };
    border-radius: 0.25rem;
    border: none;
    width: 100%;
    padding: 0.62rem 0;
    display: flex;
    justify-content: center;
    gap: 0.75rem;

    > span {
        color: #F5F5FA;
        text-transform: uppercase;
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.5rem;

        /* @media screen and (min-width: 768px) {
            font-size: 0.8rem;
        } */
    }

`