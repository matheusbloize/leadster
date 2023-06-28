'use client'

import Logo from '@/components/Logo'
import { StyledFooter } from '@/components/styles/StyledFooter'
import FooterLink from '@/components/FooterLink'

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-top">
        <Logo />
        <p>Transformando visitantes em clientes.</p>
      </div>
      <div className="links">
        <FooterLink
          title="Links Principais"
          values={['Home', 'Ferramenta', 'Preços', 'Contato']}
        />
        <FooterLink
          title="Cases"
          values={[
            'Geração de Leads B2B',
            'Geração de Leads em Software',
            'Geração de Leads em Imobiliária',
            'Cases de Sucesso',
          ]}
        />
        <FooterLink
          title="Materias"
          values={[
            'Blog',
            'Parceria com Agências',
            'Guia Definitivo do Marketing',
            'Materiais Gratuitos',
          ]}
        />
        <FooterLink
          title="Siga a Leadster"
          icons={true}
          bold={true}
          values={[
            'E-mail:',
            'contato@leaster.com.br',
            'Telefone:',
            '(42) 98828-9851',
          ]}
        />
      </div>
      <div className="footer-copyright">
        <div className="footer-copyright-info">
          <p>
            Copyright &copy; 2015 - 2022 Todos os direitos reservados |{' '}
            <a href="https://leadster.com.br/" target="_blank" rel="noreferrer">
              Leadster
            </a>
          </p>
        </div>
        <div className="footer-copyright-address">
          <p>
            Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 |
            Termos de uso
          </p>
        </div>
      </div>
    </StyledFooter>
  )
}

export default Footer
