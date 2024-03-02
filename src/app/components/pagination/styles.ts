'use client'
import styled from "styled-components";

export const PaginationContainer = styled.nav`
    margin-top: 2rem;
    margin-right: 0.4rem;
    align-self: end;
`

export const StyledUnorderedList = styled.ul`
    display: flex;
    gap: 0.1875rem;

    li {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 2rem;
        height: 2rem;
        border-radius: 8px;
        border: none;
        background-color: ${ props => props.theme["--Pagination-Button-Background"] };
        cursor: pointer;

        a {
            color: ${ props => props.theme["--Text-Dark-Inputs-Icons"] };
            line-height: 150%;
        }

        &:hover {
            border: 1px solid ${ props => props.theme["--Underline-Color"] };
            background-color: #F5F5FA;

            a {
                color: ${ props => props.theme["--Underline-Color"] };
                font-weight: 600;
            }
        }
    }
`