'use client'

import styled from "styled-components"

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 5rem;

    gap: 1.4rem;

    a {
        text-decoration: none;
        margin-left: 0.2rem;
    }

    > a {
        font-family: var(--font-saira-stencil-one);
        font-size: 1.5rem;
        font-weight: 400;
        line-height: 150%;
        color: ${props => props.theme["--Brand-Name"]};
    }

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        
        flex: 1;
        gap: 1rem;
        a {
            display: flex;
            width: min-content;
            height: min-content;

            position: relative;
            margin-right: .7rem;
        }
    }

    /**Tablets*/
    @media screen and (min-width: 768px){
        padding: 0 5rem;
        justify-content: space-between;

        > div {
            flex: unset;
            gap: 1.5rem;
        }
    }

    /**Desktops */
    @media screen and (min-width: 968px) {
        padding: 0 10rem;
        justify-content: space-between;
    }

`