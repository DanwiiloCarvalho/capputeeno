'use client'
import styled from "styled-components";

export const PaginationContainer = styled.div`
    display: flex;
    margin-top: 2rem;
    margin-right: 0.4rem;
    gap: 0.1875rem;
    align-self: end;

    button {
        width: 2rem;
        height: 2rem;
        border-radius: 8px;
        border: none;
        color: ${ props => props.theme["--Text-Dark-Inputs-Icons"] };
        background-color: ${ props => props.theme["--Pagination-Button-Background"] };
        cursor: pointer;

        &:hover {
            border: 1px solid ${ props => props.theme["--Underline-Color"] };
            color: ${ props => props.theme["--Underline-Color"] };
            background-color: #F5F5FA;
        }
    }
`