import { Product } from "./product"

export interface ProductList {
    data: {
        allProducts: Product[]
    }
}