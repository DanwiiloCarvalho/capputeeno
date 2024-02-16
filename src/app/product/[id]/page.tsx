import Image from "next/image"
import { Description, Info, InfoSection, ProductPageContainer } from "./styles"
import { BackButton } from "@/app/components/back-button"
import Link from "next/link"
import { AddToCartButton } from "./components/add-to-cart-button"
import { priceFormat } from "@/utils/price-format"
import { ProductList } from "@/types/product-list"
import { useProduct } from "@/hooks/useProduct"
interface ProductPageProps {
    params: {
        id: string
    }
}

const url = process.env.NEXT_PUBLIC_API_URL as string

export async function generateStaticParams() {

    const queryText = `
    {
        allProducts {
          id
          name
          category
          price_in_cents
          description
        }
    }
    `

    const request = new Request(url, {
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
        const products: ProductList = await response.json()
        return products.data.allProducts.map(product => ({ id: product.id }))
    } catch (error) {
        console.error("GenerateStaticParams error: " + error)
    }
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { id } = params

    const { data } = await useProduct(url, id)

    return (
        <ProductPageContainer>
            <Link href={'/'}>
                <BackButton />
            </Link>
            <InfoSection>
                {
                    data &&
                    <>
                        <Image src={data?.data.Product.image_url as string} alt="" width={640} height={580} />
                        <Info>
                            <div>
                                <span>{data.data.Product.category}</span>
                                <h2>{data.data.Product.name}</h2>
                                <span>{priceFormat(data.data.Product.price_in_cents)}</span>
                                <p>*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</p>
                                <Description>
                                    <h3>Descrição</h3>
                                    <p>{data.data.Product.description}</p>
                                </Description>
                            </div>
                            <AddToCartButton />
                        </Info>
                    </>
                }
            </InfoSection>
        </ProductPageContainer>
    )
}