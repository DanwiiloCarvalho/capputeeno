'use client'

import styled from "styled-components"

export const DefaultPageLayout = styled.div`
    background-color: ${props => props.theme["--Background-Primary"]};
    min-height: 100vh;
    padding: 0.75rem 1.5rem;

    @media screen and (min-width: 768px) {
        //padding: 2.12rem 5rem 3.75rem;
        padding-top: 1.66rem;
    }

    @media screen and (min-width: 960px) {
        //padding: 2.12rem 5rem 3.75rem;
        padding: 2.12rem 1rem 3.75rem;
    }

    @media screen and (min-width: 992px) {
        //padding: 2.12rem 5rem 3.75rem;
        padding: 2.12rem 2rem 3.75rem;
    }

    @media screen and (min-width: 1140px) {
        //padding: 2.12rem 5rem 3.75rem;
        padding: 2.12rem 4rem 3.75rem;
    }

    @media screen and (min-width: 1200px) {
        //padding: 2.12rem 10rem 3.75rem;
        padding: 2.12rem 8rem 3.75rem;
    }

    @media screen and (min-width: 1920px) {
        //padding: 2.12rem 20rem 3.75rem;
        padding: 4rem 30rem 3.75rem;
    }

    @media screen and (min-width: 2560px) {
        padding: 5rem 40rem 3.75rem;
    }

`