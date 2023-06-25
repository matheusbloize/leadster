import { StyledTopSection } from '@/components/styles/StyledSection'
// import Image from 'next/image'
// import img_asset from '@/assets/images/asset.png'

const TopSection = () => {
  return (
    <StyledTopSection>
      <div>
        <span>Webinar Exclusivos</span>
        <h2>Menos conversinha,</h2>
        <h1>Mais conversão</h1>
        {/* <Image src={img_asset} alt="Imagem decorativa" width={10} height={10} /> */}
      </div>
      <p>
        Conheça as estratégias que <span>mudaram o jogo</span> e como aplicá-las
        no seu negócio
      </p>
    </StyledTopSection>
  )
}

export default TopSection
