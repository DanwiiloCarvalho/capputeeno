import Link from "next/link";
import { ProductCard } from "../product-card";
import { ProductListContainer } from "./styles";

export function ProductList(){
    return(
        <ProductListContainer>
            <ul>
                <li>
                    <Link href={'/product/1'}>
                        <ProductCard />
                    </Link>
                </li>
                <li>
                    <Link href={'/product/1'}>
                        <ProductCard />
                    </Link>
                </li>
                <li>
                    <Link href={'/product/1'}>
                        <ProductCard />
                    </Link>
                </li>
                <li>
                    <Link href={'/product/1'}>
                        <ProductCard />
                    </Link>
                </li>
                <li>
                    <Link href={'/product/1'}>
                        <ProductCard />
                    </Link>
                </li>
                <li>
                    <Link href={'/product/1'}>
                        <ProductCard />
                    </Link>
                </li>
                <li>
                    <Link href={'/product/1'}>
                        <ProductCard />
                    </Link>
                </li>
                <li>
                    <Link href={'/product/1'}>
                        <ProductCard />
                    </Link>
                </li>
                <li>
                    <Link href={'/product/1'}>
                        <ProductCard />
                    </Link>
                </li>
                <li>
                    <Link href={'/product/1'}>
                        <ProductCard />
                    </Link>
                </li>
                <li>
                    <Link href={'/product/1'}>
                        <ProductCard />
                    </Link>
                </li>
                <li>
                    <Link href={'/product/1'}>
                        <ProductCard />
                    </Link>
                </li>
            </ul>
        </ProductListContainer>
    )
}