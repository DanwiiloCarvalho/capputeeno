'use client'
import { useContext } from "react";
import { FilterBar } from "./components/filter-bar";
import { Pagination } from "./components/pagination";
import { ProductList } from "./components/product-list";
import { MainContainer } from "./styles";
import { AppContext, AppContextProviderProps } from "./contexts/context-provider";
import { Category } from "@/enum/category";

export default function Home() {
  const { products, categoryValue, currentPage } = useContext(AppContext) as AppContextProviderProps

  return (
    <MainContainer>
      <FilterBar />
      {
        products && (categoryValue === Category.ALL_PRODUCTS) ? 
        <Pagination currentPage={currentPage} totalPages={5} /> :
        <Pagination currentPage={currentPage} totalPages={3} />
      }
      <ProductList />
      {
        products && (categoryValue === Category.ALL_PRODUCTS) ? 
        <Pagination currentPage={currentPage} totalPages={5} /> :
        <Pagination currentPage={currentPage} totalPages={3} />
      }
    </MainContainer>
  )
}
