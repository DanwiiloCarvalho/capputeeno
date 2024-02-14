import Image from "next/image";
import imageExample from "@/app/product-image/caneca.jpg"
import { ProductCardContainer, Separator } from "./styles";
import { priceFormat } from "@/utils/price-format";
interface ProductCardProps {
    image_url: string,
    name: string,
    price_in_cents: number,
}

export function ProductCard({ image_url, name, price_in_cents }: ProductCardProps) {
    return (
        <ProductCardContainer>
            <Image src={image_url} alt="" width={imageExample.width} height={imageExample.height} priority />
            <div>
                <h2>{name}</h2>
                <Separator />
                <span>{priceFormat(price_in_cents)}</span>
            </div>
        </ProductCardContainer>
    )
}