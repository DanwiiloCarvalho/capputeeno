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
        background-color: ${props => props.theme["--Pagination-Button-Background"]};
    }
`

interface StyledButtonProps {
    $type: 'page' | 'chevron'
    $currentPage?: number
    $pageNumber?: number
}

export const StyledButton = styled.button<StyledButtonProps>`
    color: ${props => props.theme["--Text-Dark-Inputs-Icons"]};
    line-height: 150%;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    ${props => props.$type === 'page' && props.$currentPage === props.$pageNumber && `color: ${props.theme["--Underline-Color"]};
        font-weight: 600;
        border: 1px solid ${props.theme["--Underline-Color"]};
        border-radius: inherit;
        background-color: #F5F5FA;`
    }
`