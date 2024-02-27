import { Product } from "./product";

export interface CartProductItem extends Product {
    units: number
}