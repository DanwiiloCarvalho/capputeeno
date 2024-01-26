import { FilterBar } from "./components/filter-bar";
import { FilterByCategory } from "./components/filter-by-category";
import { ProductList } from "./components/product-list/product-list";
import { MainContainer } from "./styles";



export default function Home() {
  return (
    <MainContainer>
      <FilterBar />
      <ProductList />
    </MainContainer>
  )
}
