import { AppContext, AppContextProviderProps } from "@/app/contexts/context-provider"
import { Product } from "@/types/product"
import { useContext, useEffect, useState } from "react"

interface CartProductItem extends Product {
    units: number
}

export function useLocalStorage() {
    const { products, setProducts } = useContext(AppContext) as AppContextProviderProps
    const [units, setUnits] = useState<number>(0)

    useEffect(() => {
        if (localStorage.getItem("productsList")) {
            const products: CartProductItem[] = JSON.parse(localStorage.getItem("productsList") as string)
            setProducts(products)
        }
    }, [setProducts])

    useEffect(() => {
        const sum = products.map(product => {
            return product.units  
        }).reduce((accummulator, currentValue) => accummulator + currentValue, 0)
    
        setUnits(sum)
    }, [products])

    function setCartProduct(newProduct: Product) {
        const cartProductFound = products.find(product => product.id === newProduct.id)

        if (cartProductFound) {
            
            const newProductsList = products.map(product => {
                if (product.id === newProduct.id) {
                    product.units += 1
                }
                return product
            })
            setProducts(newProductsList)
            localStorage.setItem("productsList", JSON.stringify(newProductsList))
        } else {

            const newCartProductItem = {
                ...newProduct,
                units: 1
            }

            setProducts([...products, newCartProductItem])

            localStorage.setItem("productsList", JSON.stringify([...products, newCartProductItem]))
        }
    }

    function deleteCartProduct(productId: string) {
        const cartProductFound = products.find(product => product.id === productId)

        if (cartProductFound) {
            const newProductsList = products.filter(cartItem => cartItem.id != productId)
            localStorage.setItem("productsList", JSON.stringify(newProductsList))
            setProducts(newProductsList)
        }
    }

    return {
        products,
        units,
        setCartProduct,
        deleteCartProduct
    }
}