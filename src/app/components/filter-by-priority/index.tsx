'use client'

import { useEffect, useRef, useState } from "react";
import { ArrowDownIcon } from "../icons/arrow-down-icon";
import { FilterByPriorityContainer } from "./styles";

export function FilterByPriority() {
    const [open, setOpen] = useState<boolean>(false)
    const dropdownRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {

        const exampleFunction = (e: Event) => {
            if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target as Node)) {
                setOpen(!open)
            }
        }

        if (open) {
            window.addEventListener('click', exampleFunction)
        }

        return () => {
            window.removeEventListener('click', exampleFunction)
        }
    }, [open])

    return (
        <FilterByPriorityContainer ref={dropdownRef}>
            <button onClick={() => setOpen(!open)}>
                <span>Organizar por</span>
                <ArrowDownIcon />
            </button>
            {
                open &&
                <ul>
                    <li>Novidades</li>
                    <li>Preço: Maior - menor</li>
                    <li>Preço: Menor - maior</li>
                    <li>Mais vendidos</li>
                </ul>
            }
        </FilterByPriorityContainer>
    )
}