import { Product } from "./product";

export interface CartProductItem extends Omit<Product, 'sales'> {
    units: number
}