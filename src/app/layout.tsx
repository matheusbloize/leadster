import './globals.css'
import { ReactNode } from 'react'
// eslint-disable-next-line camelcase
import { Plus_Jakarta_Sans } from 'next/font/google'

const font = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Leadster',
  description:
    'Conheça a Leadster, um Chatbot de Marketing Conversacional para Aumentar a Geração de Leads Qualificados no seu Site. Visite e saiba mais!',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={font.className}>{children}</body>
    </html>
  )
}
