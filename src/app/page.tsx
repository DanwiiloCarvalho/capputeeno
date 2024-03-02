import React from "react";
import { FilterBar } from "./components/filter-bar";
import { MainContainer } from "./styles";
import { ProductList } from "./components/product-list";
import { Pagination } from "./components/pagination";

export default function Home() {
  
  return (
    <MainContainer>
      <FilterBar />
      <Pagination />
      <ProductList />
    </MainContainer>
  )
}
