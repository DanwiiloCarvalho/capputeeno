'use client'

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect, useRef } from "react"
import NProgress from "nprogress"

NProgress.configure({
    showSpinner: false,
    speed: 400,
    minimum: 0.1,
    easing: 'ease',
    position: 'fixed',
})

export function NProgressBar() {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const prevPathname = useRef(pathname)
    const prevSearchParams = useRef(searchParams)
    const startedAt = useRef<number>(0)

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const anchor = (e.target as HTMLElement).closest('a')
            if (!anchor) return

            const href = anchor.getAttribute('href')
            if (!href || !href.startsWith('/') || href.startsWith('//')) return
            if (anchor.target === '_blank') return

            startedAt.current = Date.now()
            NProgress.start()
        }

        document.addEventListener('mousedown', handleClick)
        return () => document.removeEventListener('mousedown', handleClick)
    }, [])

    useEffect(() => {
        const hasPathChanged = prevPathname.current !== pathname
        const prevParams = prevSearchParams.current?.toString() ?? ''
        const currentParams = searchParams?.toString() ?? ''
        const hasSearchParamsChanged = prevParams !== currentParams

        if (hasPathChanged || hasSearchParamsChanged) {
            const elapsed = Date.now() - startedAt.current
            const minDisplayTime = 300
            const remaining = Math.max(0, minDisplayTime - elapsed)

            const timer = setTimeout(() => {
                NProgress.done()
            }, remaining)

            prevPathname.current = pathname
            prevSearchParams.current = searchParams
            return () => clearTimeout(timer)
        }

        prevPathname.current = pathname
        prevSearchParams.current = searchParams
    }, [pathname, searchParams])

    return null
}