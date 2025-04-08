import { priceFormat } from "@/utils/price-format";
import Image from "next/image";
import { ProductCardContainer, Separator } from "./styles";
interface ProductCardProps {
    image_url: string,
    name: string,
    price_in_cents: number,
}

export function ProductCard({ image_url, name, price_in_cents }: ProductCardProps) {
    return (
        <ProductCardContainer>
            <Image src={image_url} alt="" width={640} height={580} priority />
            <div>
                <h2>{name}</h2>
                <Separator />
                <span>{priceFormat(price_in_cents)}</span>
            </div>
        </ProductCardContainer>
    )
}