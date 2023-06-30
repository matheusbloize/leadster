// Images
import Image from 'next/image'
import img_thumb from '@/assets/images/thumbnail.png'

// Components
import { StyledVideo } from '@/components/styles/StyledVideo'

interface Props {
  title: string
  url: string
  id: number
}

const Video = (props: Props) => {
  return (
    <StyledVideo video-id={props.id}>
      <Image src={img_thumb} alt="Thumbnail dos vídeos" />
      <div>
        <p>Como aumentar sua Geração de Leads feat. Traktor</p>
      </div>
    </StyledVideo>
  )
}

export default Video
