import Image from "next/image";
import imageExample from "@/app/product-image/caneca.png"
import { ProductCardContainer, Separator } from "./styles";

export function ProductCard(){
    return(
        <ProductCardContainer>
            <Image src={imageExample} alt="" width={256} height={300} />
            <div>
                <h2>Caneca de cerâmica</h2>
                <Separator />
                <span>R$ 40,00</span>
            </div>
        </ProductCardContainer>
    )
}