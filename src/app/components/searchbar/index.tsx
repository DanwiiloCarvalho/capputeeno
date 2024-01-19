import { SearchLoupe } from "../icons/search-loupe";
import { SearchBarContainer } from "./styles";

export function SearchBar() {
    return (
        <SearchBarContainer>
            <input type="text" placeholder="Procurando por algo específico?" />
            <SearchLoupe />
        </SearchBarContainer>
    )
}