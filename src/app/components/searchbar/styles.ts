'use client'

import styled from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  flex: 1;
  
  
   position: relative;

   height: 2.6rem;
   border-radius: 8px;
   background-color: ${props => props.theme["--Select-Background"]};

   > input {
    border: none;
    padding: 0.56rem 1rem;
    width: 90%;
    height: 100%;
    background-color: inherit;
    border-radius: inherit;
    
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.375rem;
    color: ${props => props.theme["--Search-Bar-Text"]};

    &::placeholder {
      color: ${props => props.theme["--Text-Dark-Inputs-Icons"]};
      font-size: 0.7rem;
    }
   }

   > svg {
    position: absolute;
    right: 1rem;
    top: calc(50% - 12px);
   }

   /**Tablets*/
   @media screen and (min-width: 768px){
        min-width: 22rem;

        &::placeholder {
          font-size: 0.875rem;
        }
    }

    /**Desktops */
   @media screen and (min-width: 968px) {
    
   }
`