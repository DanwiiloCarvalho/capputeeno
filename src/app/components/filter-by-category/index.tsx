import { CategoryItem, CategoryListContainer } from "./styles";

interface FilterByCategoryProps {

}
export function FilterByCategory(props: FilterByCategoryProps) {
    return (
        <CategoryListContainer>
            <CategoryItem selected>todos os produtos</CategoryItem>
            <CategoryItem>camisetas</CategoryItem>
            <CategoryItem>canecas</CategoryItem>
        </CategoryListContainer>
    )
}