import { FilterBar } from "./components/filter-bar";
import { ProductList } from "./components/product-list";
import { MainContainer } from "./styles";

export default function Home() {
  
  return (
    <MainContainer>
      <FilterBar />
      <ProductList />
    </MainContainer>
  )
}
