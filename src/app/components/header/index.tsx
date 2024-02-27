import Link from "next/link"
import { HeaderContainer } from "./styles"
import { CartIcon } from "../icons/cart-icon"
import { SearchBar } from "../searchbar"
import { CartCount } from "../icons/cart-count"
import { useLocalStorage } from "@/hooks/useLocalStorage"

export function Header(){

    return(
        <HeaderContainer>
            <Link href={'/'} prefetch={false}>capputeeno</Link>
            <div>
                <SearchBar />
                <Link href={'/cart'} prefetch={false}>
                    <CartIcon />
                </Link>
            </div>
        </HeaderContainer>
    )
}