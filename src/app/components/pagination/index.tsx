import { ChevronLeftIcon } from "../icons/left-arrow";
import { ChevronRightIcon } from "../icons/right-arrow";
import { PaginationContainer, StyledUnorderedList } from "./styles";

export function Pagination() {
    return (
        <PaginationContainer role="navigation" aria-label="pagination">
            <StyledUnorderedList>
                <li><a href="">1</a></li>
                <li><a href="">2</a></li>
                <li><a href="">3</a></li>
                <li><a href="">4</a></li>
                <li><a href="">5</a></li>
                <li><a href="" aria-label="Go to previous page"><ChevronLeftIcon /></a></li>
                <li><a href="" aria-label="Go to next page"><ChevronRightIcon /></a></li>
            </StyledUnorderedList>
        </PaginationContainer>
    )
}