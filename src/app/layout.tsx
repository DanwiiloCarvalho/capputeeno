import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from '@/lib/registry'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Capputeeno',
  description: 'Um e-commerce para venda de canecas e camisetas',
  authors: {
    name: 'Danilo Costa de Carvalho',
    url: 'https://github.com/DanwiiloCarvalho/capputeeno',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <StyledComponentsRegistry>{ children }</StyledComponentsRegistry>
      </body>
    </html>
  )
}
