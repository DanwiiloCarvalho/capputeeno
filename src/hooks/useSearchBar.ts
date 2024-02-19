import { Product } from "@/types/product";
import { sanitizeAndLowercase } from "@/utils/sanitize-and-lowercase";
import { useEffect, useState } from "react";

export function useSearchBar(productList: Product[] | undefined, searchBarValue: string) {
    const [filteredValue, setFilteredValue] = useState<Product[]>([] as Product[])
    
    useEffect(() => {
        if (productList) {
            setFilteredValue(productList.filter(product => sanitizeAndLowercase(product.name).includes(sanitizeAndLowercase(searchBarValue))))
        }
    }, [searchBarValue, productList])

    return {
        filteredValue
    }
}