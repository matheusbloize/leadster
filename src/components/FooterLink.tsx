import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin } from 'react-icons/bi'
import { StyledFooterLink } from '@/components/styles/StyledFooter'

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
            <BiLogoLinkedin />
            <BiLogoFacebook />
            <BiLogoInstagram />
          </>
        </div>
      )}
      {props.bold
        ? props.values.map((value, index) => (
            <>
              {index % 2 === 0 ? (
                <strong>{value}</strong>
              ) : (
                <p key={value}>{value}</p>
              )}
            </>
          ))
        : props.values.map((value) => <p key={value}>{value}</p>)}
    </StyledFooterLink>
  )
}

export default FooterLink
