import imageExample from "@/app/product-image/caneca.jpg"
import Image from "next/image"
import { Description, Info, InfoSection, ProductPageContainer } from "./styles"
import { BackButton } from "@/app/components/back-button"
import Link from "next/link"
import { AddToCartButton } from "./components/add-to-cart-button"

export default function ProductPage(){
    return(
        <ProductPageContainer>
            <Link href={'/'}>
                <BackButton />
            </Link>
            <InfoSection>
                <Image src={imageExample} alt="" width={640} height={580} />
                <Info>
                    <div>
                        <span>Caneca</span>
                        <h2>Caneca de cerâmica rústica</h2>
                        <span>R$ 40,00</span>
                        <p>*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</p>
                        <Description>
                            <h3>Descrição</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe harum, dolor iusto ipsum, ipsa quas beatae dolores alias necessitatibus ratione laborum nihil facere quos molestias temporibus ex iste, nostrum non? Aliquam, in incidunt? Libero fugit, unde rem excepturi quaerat alias voluptates? Beatae saepe sint debitis repellendus amet ipsam porro at rerum! Nemo voluptas officia ullam cupiditate soluta atque explicabo. Accusantium perferendis voluptatibus necessitatibus. Provident asperiores architecto cupiditate voluptates aliquid vero! Hic doloribus quasi recusandae quibusdam deleniti ipsa aperiam nemo provident blanditiis iure laborum aliquid fuga ab laboriosam, illo dignissimos veniam perspiciatis explicabo beatae necessitatibus! Laboriosam, doloribus, rerum facere magni unde libero ipsam necessitatibus voluptates et mollitia sit eveniet labore! Labore, nemo molestias doloribus ut officia dicta aliquam nobis voluptate amet fugit. Suscipit quae, illo cupiditate, molestiae distinctio a at excepturi placeat culpa provident necessitatibus ab. Odit fuga numquam sed facilis itaque quis modi, ad cupiditate quibusdam doloribus autem non aliquam totam ex voluptates vero. Sunt animi rerum earum, delectus dignissimos beatae soluta iusto accusantium in expedita exercitationem veritatis quas sit. Nobis explicabo iusto quam deserunt! Praesentium aperiam ipsa magnam itaque, hic quisquam ex. Dicta, nisi ea sed totam aliquid, excepturi esse praesentium sunt nemo suscipit ipsam magni ullam ipsum reprehenderit.</p>
                        </Description>
                    </div>
                    <AddToCartButton />
                </Info>
            </InfoSection>
        </ProductPageContainer>
    )
}