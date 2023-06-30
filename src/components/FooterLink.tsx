// Components
import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin } from 'react-icons/bi'
import { StyledFooterLink } from '@/components/styles/StyledFooter'
import React from 'react'

interface Props {
  title: string
  values: string[]
  icons?: boolean
  bold?: boolean
}

const FooterLink = (props: Props) => {
  return (
    <StyledFooterLink>
      <span>{props.title}</span>
      {props.icons && (
        <div className="footer-icons">
          <>
            <a
              href="https://br.linkedin.com/company/leadster-platform"
              target="_blank"
              rel="noreferrer"
            >
              <BiLogoLinkedin />
            </a>
            <a
              href="https://web.facebook.com/leadsterplatform/"
              target="_blank"
              rel="noreferrer"
            >
              <BiLogoFacebook />
            </a>
            <a
              href="https://www.instagram.com/leadster.com.br/"
              target="_blank"
              rel="noreferrer"
            >
              <BiLogoInstagram />
            </a>
          </>
        </div>
      )}
      {props.bold
        ? props.values.map((value, index) => (
            <React.Fragment key={index}>
              {index % 2 === 0 ? (
                <strong>{value}</strong>
              ) : (
                <a
                  key={value}
                  href="mailto:contato@leadster.com.br"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>{value}</p>
                </a>
              )}
            </React.Fragment>
          ))
        : props.values.map((value, index) => (
            <a
              key={index}
              href="https://leadster.com.br/"
              target="_blank"
              rel="noreferrer"
            >
              <p>{value}</p>
            </a>
          ))}
    </StyledFooterLink>
  )
}

export default FooterLink
