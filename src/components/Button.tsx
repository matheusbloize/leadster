// Components
import { StyledButton } from '@/components/styles/StyledButton'

interface Props {
  value: string
}

const Button = (props: Props) => {
  return <StyledButton>{props.value}</StyledButton>
}

export default Button
