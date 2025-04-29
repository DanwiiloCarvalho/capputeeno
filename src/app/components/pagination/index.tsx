'use client'
import { useContext } from "react";
import { ChevronLeftIcon } from "../icons/left-arrow";
import { ChevronRightIcon } from "../icons/right-arrow";
import { PaginationContainer, StyledButton, StyledUnorderedList } from "./styles";
import { AppContext, AppContextProviderProps } from "@/app/contexts/context-provider";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
}

export function Pagination({ currentPage, totalPages }: PaginationProps) {
    const { setCurrentPage } = useContext(AppContext) as AppContextProviderProps
    let buttons = [];

    for (let i = 1; i <= totalPages; i++) {
        buttons.push(i);
    }

    function nextPage() {
        if (currentPage >= 4) {
            return
        }

        setCurrentPage(currentPage + 1);
    }

    function previousPage() {
        if (currentPage <= 0) {
            return
        }

        setCurrentPage(currentPage - 1);
    }

    function selectPage(pageNumber: number) {
        setCurrentPage(pageNumber - 1);
    }

    return (
        <PaginationContainer role="navigation" aria-label="pagination">
            <StyledUnorderedList>
                {buttons.map(button => {
                    return (
                        <li key={button}><StyledButton $type="page" $currentPage={currentPage + 1} $pageNumber={button} onClick={() => selectPage(button)}>{button}</StyledButton></li>
                    )
                })}
                <li><StyledButton $type="chevron" aria-label="Go to previous page" onClick={previousPage}><ChevronLeftIcon /></StyledButton></li>
                <li><StyledButton $type="chevron" aria-label="Go to next page" onClick={nextPage}><ChevronRightIcon /></StyledButton></li>
            </StyledUnorderedList>
        </PaginationContainer>
    )
}