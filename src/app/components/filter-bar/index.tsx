import { FilterByCategory } from "../filter-by-category";
import { FilterByPriority } from "../filter-by-priority";
import { FilterContainer } from "./styles";

export function FilterBar(){
    return(
        <FilterContainer>
            <FilterByCategory />
            <FilterByPriority />
        </FilterContainer>
    )
}