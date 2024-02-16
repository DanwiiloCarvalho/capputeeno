import { Product } from "@/types/product"

interface ProductDetails {
    data: {
        Product: Product
    }
}

export async function useProduct(api_url: string, product_id: string) {
    let errorState: Error | null = null
    let data: ProductDetails | null = null

    const queryText = `
        {
            Product(id: "${product_id}") {
                id
                name
                category
                image_url
                price_in_cents
                description
            }
        }
    `

    const request = new Request(api_url, {
        method: 'POST',
        body: JSON.stringify({
            query: queryText
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })

    try {
        const response = await fetch(request)
        data = await response.json()
    } catch (error) {
        console.error(error)
        errorState = error as Error
    } finally {
        return {
            data,
            errorState,
        }
    }
}