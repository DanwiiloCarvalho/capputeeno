import { theme } from '@/app/layout'
import { ChakraProvider } from '@chakra-ui/react'

interface ChakraProps {
    children: React.ReactNode
}

export function Chakra({ children }: ChakraProps) {
    return (
        <ChakraProvider>
            {children}
        </ChakraProvider>
    )
}