'use client'

import Link from "next/link"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { HeaderContainer } from "./styles"
import { CartIcon } from "../icons/cart-icon"
import { SearchBar } from "../searchbar"
import { SearchLoupe } from "../icons/search-loupe"
import { ThemeToggleButton } from "../theme-toggle-button"

export function Header() {
    const [isSearchBarVisible, setIsSearchBarVisible] = useState(false)

    return (
        <HeaderContainer $isSearchBarVisible={isSearchBarVisible}>
            <button
                className="mobile-loupe-button"
                onClick={() => setIsSearchBarVisible(prev => !prev)}
                aria-label="Buscar produtos"
                aria-expanded={isSearchBarVisible}
            >
                <SearchLoupe />
            </button>

            <Link href={'/'} prefetch={false}>capputeeno</Link>

            <div className="right-group">
                <div className="desktop-search">
                    <SearchBar />
                </div>
                <Link href={'/cart'} prefetch={false}>
                    <CartIcon />
                </Link>
                <ThemeToggleButton />
            </div>

            <AnimatePresence initial={false}>
                {isSearchBarVisible && (
                    <motion.div
                        className="mobile-search"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <div className="mobile-search-inner">
                            <SearchBar />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </HeaderContainer>
    )
}