import type { Metadata } from 'next'
import { Saira_Stencil_One, Saira } from 'next/font/google'
import StyledComponentsRegistry from '@/lib/registry'
import { Providers } from './components/providers'
import { Header } from './components/header'
import { DefaultPageLayout } from './components/defaultPageLayout'

const saira_stencil_one = Saira_Stencil_One({
  weight: ['400'],
  subsets: ['latin'],
  style: ['normal'],
  variable: "--font-saira-stencil-one",
})

const saira = Saira({
  weight: ['600', '500', '400', '300'],
  subsets: ['latin'],
  style: ['normal'],
  variable: "--font-saira",
})

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
        <body className={`${saira_stencil_one.variable} ${saira.variable}`}>
          <Providers>
            <StyledComponentsRegistry>
              <Header />
              <DefaultPageLayout>
                { children }
              </DefaultPageLayout>
            </StyledComponentsRegistry>
          </Providers>
        </body>
    </html>
  )
}
