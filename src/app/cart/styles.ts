'use client'

import styled from "styled-components"

export const CartPageContainer = styled.main`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;

    a {
        width: fit-content;
    }

    @media screen and (min-width: 768px) {
        flex-direction: row;
        gap: 3rem;

        > div {
            flex: 2;
        }
    }
`

export const CartProductListContainer = styled.section`
    margin-top: 1.47rem;

    > h2 {
        text-transform: uppercase;
        color: ${ props => props.theme["--Selected-Category-Filter"] };
        font-weight: 500;
        line-height: 2.25rem;
    }

    > p {
        margin-top: .38rem;
        font-weight: 300;
        font-size: 1rem;
        color: ${ props => props.theme["--Selected-Category-Filter"] };

        > span {
            font-weight: 600;
        }
    }

    ul {
        margin-top: 1.44rem;

        li {
            height: 35.321rem;
        }

        li + li {
            margin-top: 1rem;
        }
    }

    @media screen and (min-width: 768px) {

        ul {

            li {
                height: unset;
            }
        }
    }
`