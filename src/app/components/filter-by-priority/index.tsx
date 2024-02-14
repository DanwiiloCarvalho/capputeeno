'use client'

import { useContext, useEffect, useRef, useState } from "react";
import { ArrowDownIcon } from "../icons/arrow-down-icon";
import { FilterByPriorityContainer } from "./styles";
import { AppContext, AppContextProviderProps } from "@/app/contexts/context-provider";
import { Priority } from "@/enum/priority";

export function FilterByPriority() {
    const [open, setOpen] = useState<boolean>(false)
    const { setPriorityValue, priorityValue } = useContext(AppContext) as AppContextProviderProps
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
                    <li onClick={() => setPriorityValue(Priority.NEWS)}>Novidades</li>
                    <li onClick={() => setPriorityValue(Priority.LARGER_TO_SMALLER)}>Preço: Maior - menor</li>
                    <li onClick={() => setPriorityValue(Priority.SMALLER_TO_LARGER)}>Preço: Menor - maior</li>
                    <li onClick={() => setPriorityValue(Priority.BEST_SELLERS)}>Mais vendidos</li>
                </ul>
            }
        </FilterByPriorityContainer>
    )
}