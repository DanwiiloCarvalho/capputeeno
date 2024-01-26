'use client'

import styled from "styled-components"

export const ProductListContainer = styled.section`
    margin-top: 2rem;

    > ul {
        display: grid;
        justify-content: center;

        grid-template-columns: repeat(auto-fill, 16rem);
        grid-template-rows: repeat(auto-fit, 23.625rem);
        grid-row-gap: 1.5rem;
        grid-column-gap: 2rem;
    }

    @media screen and (min-width: 768px) {
            //margin-top: 5rem;
    }

    @media screen and (min-width: 968px) {
        
    }

`