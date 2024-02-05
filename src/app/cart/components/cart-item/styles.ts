'use client'

import styled from "styled-components"

export const CartItemContainer = styled.article`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: inherit;
    border-radius: 0.5rem;
    background-color: ${ props => props.theme["--Background-Secondary"] };

    > img {
        width: 100%;
        height: auto;
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;

        //Test
        object-fit: cover;
        
    }


    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 1rem 1rem;
        flex: 1;
        gap: 1.56rem;

        > div {
            color: ${ props => props.theme["--Selected-Category-Filter"] };

            > div {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            h3 {
                font-size: 1.25rem;
                font-weight: 300;
                line-height: 1.875rem;

                @media screen and (min-width: 768px) {
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }

            p {
                margin-top: .75rem;
                font-size: .75rem;
                font-weight: 400;
                line-height: 1.125rem;

                display: -webkit-box;
                -webkit-line-clamp: 4;
                overflow: hidden;
                -webkit-box-orient: vertical;

                @media screen and (min-width: 768px) {
                    -webkit-line-clamp: 3;
                }

                @media screen and (min-width: 992px) {
                    -webkit-line-clamp: 4;
                }
            }
        }
    }

    @media screen and (min-width: 768px) {
        flex-direction: row;
        height: 13.18rem;

        > img {
            width: unset;
            height: unset;
            
            //flex: 1;
            
            border-top-left-radius: inherit;
            border-bottom-left-radius: inherit;
            border-top-right-radius: unset;
        }

        > div {
            flex: 1;
        }
    }
`

export const QuantityTrigger = styled.select`
    border-radius: .5rem;
    border: 1px solid ${ props => props.theme["--Select-Border"] };
    background-color: ${ props => props.theme["--Select-Background"] };
    padding: .5rem .25rem .5rem .75rem;
    color: ${ props => props.theme["--Text-Dark-Inputs-Icons"] };
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
    
    width: 4rem;
`

export const QuantityPriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    //margin-top: 1.56rem;

    span {
        color: ${ props => props.theme["--Price-Color"] };
        font-weight: 600;
        font-size: 1rem;
        line-height: 1.5rem;
        align-self: flex-end;
    }
`