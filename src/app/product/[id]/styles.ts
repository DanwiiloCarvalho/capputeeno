'use client'

import styled from "styled-components"

export const ProductPageContainer = styled.main`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    gap: 1.38rem;

    a {
        align-self: flex-start;
    }

    @media screen and (min-width: 768px) {
        margin-top: -0.56rem;
        align-items: flex-start;
    }
`

export const InfoSection = styled.section`
    display: flex;
    flex-direction: column;
    //align-items: center;
    gap: 2rem;

    img {
        width: auto;
        height: auto;
    }

    @media screen and (min-width: 768px) {
        //flex-direction: row;
        align-items: center;
        max-width: 100%;

        img {
            //width: calc(50% - 1rem);
            width: 50%;
            //align-self: flex-start;
            align-self: center;
        }
    }

    @media screen and (min-width: 949px) {
        flex-direction: row;
        align-items: unset;

        img {
            align-self: flex-start;
        }
    }
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: ${ props => props.theme["--Selected-Category-Filter"] };

    > div > span:first-child {
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5rem;
    }

    h2 {
        font-size: 2rem;
        font-weight: 300;
        line-height: 3rem;
        margin-top: 0.75rem;
    }

    > div > span:last-of-type {
        color: ${ props => props.theme["--Price-Color"] };
        font-size: 1.25rem;
        font-weight: 600;
        line-height: 1.875rem;
        margin-top: 0.25rem;
    }

    > div > p {
        font-size: 0.75rem;
        font-weight: 400;
        line-height: 1.125rem;
        margin-top: 1.5rem;
    }

    > button {
        margin-top: 2rem;

        @media screen and (min-width: 768px) {
            //margin-top: 5rem;
        }
    }

    @media screen and (min-width: 768px) {
        width: 50%;

        > div {
            flex: 1;
        }
    }

`

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 3.62rem;

    h3 {
        color: ${ props => props.theme["--Text-Dark-Inputs-Icons"] };
        text-transform: uppercase;
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.5rem;
    }

    p {
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.3125rem;
    }

    @media screen and (min-width: 768px) {
        p {
            max-height: 17rem;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            overflow: hidden;
            -webkit-box-orient: vertical;
        }
    }
`

/* export const Description = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 3.62rem;

    h3 {
        color: ${ props => props.theme["--Text-Dark-Inputs-Icons"] };
        text-transform: uppercase;
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.5rem;
    }

    p {
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.3125rem;
    }

    @media screen and (min-width: 768px) {
        p {
            flex: 1;
        }
    }
` */