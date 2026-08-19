'use client'

import styled from "styled-components"

interface HearderContainerProps {
    $isSearchBarVisible: boolean
}

export const HeaderContainer = styled.header<HearderContainerProps>`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    min-height: 5rem;
    gap: 1.4rem;
    padding: 0 1.5rem;
    padding-top: ${props => props.$isSearchBarVisible ? '1rem' : '0'};

    background-color: ${props => props.theme["--Header-Background"]};
    backdrop-filter: blur(10px);

    > a {
        text-decoration: none;
    }

    > a:first-of-type {
        font-family: var(--font-saira-stencil-one);
        font-size: 1.5rem;
        font-weight: 400;
        line-height: 150%;
        color: ${props => props.theme["--Brand-Name"]};
    }

    .mobile-loupe-button {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        padding: 0;
        background: transparent;
        border: none;
        cursor: pointer;
    }

    .right-group {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 1rem;

        a {
            display: flex;
            width: min-content;
            height: min-content;

            position: relative;
        }

        .desktop-search {
            display: none;
        }
    }

    .mobile-search {
        flex-basis: 100%;
        overflow: hidden;
    }

    .mobile-search-inner {
        display: flex;
        padding-bottom: 1.5rem;
    }

    /**Tablets*/
    @media screen and (min-width: 768px) {
        padding: 0 5rem;

        .mobile-loupe-button {
            display: none;
        }

        .right-group {
            flex: unset;
            gap: 1.5rem;

            .desktop-search {
                display: flex;
                flex: 1;
            }
        }

        .mobile-search {
            display: none;
        }
    }

    /**Desktops */
    @media screen and (min-width: 968px) {
        padding: 0 10rem;
    }

`