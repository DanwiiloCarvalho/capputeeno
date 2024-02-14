'use client'

import styled from "styled-components"

export const FilterByPriorityContainer = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
    position: relative;
    color: ${ props => props.theme["--Text-Dark-Inputs-Icons"] };
    line-height: 157.143%;

    justify-content: flex-end;

    button {
        cursor: pointer;
        display: flex;
        gap: 0.5rem;
        background-color: transparent;
        border: none;
        color: inherit;

        span {
            font-size: .875rem;
        }
    }

    ul {
        display: flex;
        position: absolute;
        top: calc(100% + 0.25rem);
        right: 0;
        flex-direction: column;
        width: 11rem;
        padding: .75rem 1rem;

        background-color: ${ props => props.theme["--Background-Secondary"] };
        border-radius: 4px;

        font-size: .875rem;
        gap: .25rem;
        z-index: 999;

        > li {
            cursor: pointer;
            &:hover {
                color: ${ props => props.theme["--Selected-Category-Filter"] };
            }
        }
    }
`