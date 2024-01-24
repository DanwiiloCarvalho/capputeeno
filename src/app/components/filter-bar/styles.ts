'use client'

import styled from "styled-components";

export const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media screen and (min-width: 768px) {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
    }
`