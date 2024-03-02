import { LeftArrow } from "../icons/left-arrow";
import { RightArrow } from "../icons/right-arrow";
import { PaginationContainer } from "./styles";

export function Pagination() {
    return (
        <PaginationContainer>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button><LeftArrow /></button>
            <button><RightArrow /></button>
        </PaginationContainer>
    )
}