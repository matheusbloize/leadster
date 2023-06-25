import Image from 'next/image'
import img_thumb from '@/assets/images/thumbnail.png'
import { StyledVideo } from '@/components/styles/StyledVideo'

const Video = () => {
  return (
    <StyledVideo>
      <Image src={img_thumb} alt="Thumbnail dos vídeos" />
      <div>
        <p>Como aumentar sua Geração de Leads feat. Traktor</p>
      </div>
    </StyledVideo>
  )
}

export default Video
