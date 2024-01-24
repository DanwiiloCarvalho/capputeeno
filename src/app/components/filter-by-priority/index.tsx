import { ArrowDownIcon } from "../icons/arrow-down-icon";
import { FilterByPriorityContainer } from "./styles";

export function FilterByPriority() {
    return (
        <FilterByPriorityContainer>
            <span>Organizar por</span>
            <button><ArrowDownIcon /></button>
            <ul>
                <li>Novidades</li>
                <li>Preço: Maior - menor</li>
                <li>Preço: Menor - maior</li>
                <li>Mais vendidos</li>
            </ul>
        </FilterByPriorityContainer>
    )
}