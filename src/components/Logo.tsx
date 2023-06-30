// Images
import Image from 'next/image'
import img_logo from '@/assets/images/logo.png'

// Components
import { StyledLogo } from '@/components/styles/StyledLogo'

const Logo = () => {
  return (
    <StyledLogo>
      <Image src={img_logo} alt="Leadster logo" />
    </StyledLogo>
  )
}

export default Logo
