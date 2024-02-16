import { AppContext, AppContextProviderProps } from "@/app/contexts/context-provider";
import { Category } from "@/enum/category";
import { Priority } from "@/enum/priority";
import { Product } from "@/types/product";
import { ProductList } from "@/types/product-list";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";

export function useProducts(category: Category, priority: Priority) {
    const { categoryValue, priorityValue } = useContext(AppContext) as AppContextProviderProps

    const url = process.env.NEXT_PUBLIC_API_URL as string

    let sortField: string | undefined = undefined
    let sortOrder: string | undefined = undefined

    switch (priority) {
        case Priority.BEST_SELLERS:
            sortField = 'sales'
            sortOrder = 'desc'
            break;
        case Priority.NEWS:
            sortField = 'created_at'
            sortOrder = 'desc'
            break;
        case Priority.LARGER_TO_SMALLER:
            sortField = 'price_in_cents'
            sortOrder = 'desc'
            break;
        case Priority.SMALLER_TO_LARGER:
        sortField = 'price_in_cents'
        sortOrder = 'asc'
        break;
        default:
            break;
    }

    let filterCategory: string  = ``

    if (category !== Category.ALL_PRODUCTS) {
        if (category === Category.MUGS) {
            filterCategory = `category: "mugs"`
        } else {
            filterCategory = `category: "t-shirts"`
        }
    }

    let queryText = `{
                    allProducts(
                    sortField: "${sortField}",
                    sortOrder:"${sortOrder}",
                    filter: {
                        ${filterCategory}     
                    }
                    ) {
                    name
                    price_in_cents
                    sales
                    category
                    image_url
                    id
                    created_at
                    }
                }`

    const request = new Request(url, {
        method: 'POST',
        body: JSON.stringify({
            query: queryText 
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })

    const query = useQuery<Product[]>({
        queryKey: ['products', priorityValue, categoryValue],
        queryFn: async () => {
            const data = await fetch(request)
            const response: ProductList = await data.json()
            return response.data.allProducts
        },
    })

    return query
}