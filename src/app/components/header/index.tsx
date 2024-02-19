import Link from "next/link"
import { HeaderContainer } from "./styles"
import { CartIcon } from "../icons/cart-icon"
import { SearchBar } from "../searchbar"
import { CartCount } from "../icons/cart-count"

export function Header(){
    return(
        <HeaderContainer>
            <Link href={'/'} prefetch={false}>capputeeno</Link>
            <div>
                <SearchBar />
                <Link href={'/cart'} prefetch={false}>
                    <CartIcon />
                    {<CartCount />}
                </Link>
            </div>
        </HeaderContainer>
    )
}