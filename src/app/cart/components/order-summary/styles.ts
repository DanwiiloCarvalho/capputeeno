'use client'

import styled from "styled-components"

export const OrderSummaryContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem 1.5rem;
    margin-top: 1rem;
    height: 43.75rem;
    color: ${ props => props.theme["--Selected-Category-Filter"] };
    background-color: ${ props => props.theme["--Background-Secondary"] };

    > div + div {
        display: flex;
        flex-direction: column;
        gap: 1.3rem;
        text-decoration: underline;
        text-transform: uppercase;
        font-weight: 500;

        > a {
            color: ${ props => props.theme["--Text-Dark-Inputs-Icons"] };
            //line-height: 150%;
            line-height: 1.31rem;
        }
    }

    @media screen and (min-width: 768px) {
        flex: 1;
    }
    
`

export const SummaryInfo = styled.div`
    > h2 {
        font-weight: 600;
        font-size: 1.25rem;
        line-height: 150%;
        text-transform: uppercase;
    }

    > div {
        display: flex;
        justify-content: space-between;
        margin: 1rem 0;
        line-height: 1.5625rem;
    }

    > button {
        margin-top: 1.5rem;
    }

    > div:last-of-type {
        font-weight: 600;
    }

`