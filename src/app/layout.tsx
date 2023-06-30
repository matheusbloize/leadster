import './globals.css'
import { ReactNode } from 'react'
import StyledComponentsRegistry from '@/lib/registry'

export const metadata = {
  title: 'Leadster',
  description:
    'Conheça a Leadster, um Chatbot de Marketing Conversacional para Aumentar a Geração de Leads Qualificados no seu Site. Visite e saiba mais!',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
