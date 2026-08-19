'use client'

import styled from "styled-components"

export const ThemeToggleButtonContainer = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 2.5rem;
    height: 2.5rem;
    padding: 0;
    border: none;
    border-radius: 50%;
    cursor: pointer;

    background-color: ${props => props.theme["--Background-Secondary"]};
    color: ${props => props.theme["--Text-Dark-Inputs-Icons"]};

    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
    transition: background-color 0.2s ease, color 0.2s ease;

    &:hover {
        filter: brightness(0.95);
    }
`