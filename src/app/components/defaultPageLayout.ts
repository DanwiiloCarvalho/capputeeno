'use client'

import styled from "styled-components"

export const DefaultPageLayout = styled.div`
    background-color: ${props => props.theme["--Background-Primary"]};
    min-height: 100vh;
    padding: 0.75rem 1.5rem;

    @media screen and (min-width: 768px) {
        padding: 2.12rem 10rem 3.75rem;
    }
`