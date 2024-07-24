import { Chakra } from '@/lib/chakra'
import StyledComponentsRegistry from '@/lib/registry'
import type { Metadata } from 'next'
import { Saira, Saira_Stencil_One } from 'next/font/google'
import { DefaultPageLayout } from './components/defaultPageLayout'
import { Header } from './components/header'
import { Providers } from './components/providers'

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
    <html lang="pt-BR" className={`${saira_stencil_one.variable} ${saira.variable}`}>
      <body>
        <Providers>
          <StyledComponentsRegistry>
            <Header />
            <DefaultPageLayout>
              <Chakra>
                {children}
              </Chakra>
            </DefaultPageLayout>
          </StyledComponentsRegistry>
        </Providers>
      </body>
    </html>
  )
}
