import Image from 'next/image'
import img_comp from '@/assets/images/comparative.png'
import img_stamp from '@/assets/images/RD_stamp.png'
import img_card from '@/assets/images/card.png'
import img_rating from '@/assets/images/rating.png'
import { StyledBottomSection } from '@/components/styles/StyledSection'

const BottomSection = () => {
  return (
    <StyledBottomSection>
      <div className="bottom-section-img">
        <Image src={img_comp} alt="Comparativo" />
      </div>
      <div className="bottom-section-info">
        <div className="bottom-section-info-top">
          <h2>
            Pronto para triplicar sua <strong>Geração de Leads?</strong>
          </h2>
          <p>
            Criação e ativação em <span>4 minutos.</span>
          </p>
        </div>
        <div className="bottom-section-info-center">
          <button>Ver demonstração</button>
          <Image src={img_stamp} alt="Selo RD Station" />
        </div>
        <div className="bottom-section-info-bottom">
          <div className="bottom-section-info-bottom-card">
            <Image src={img_card} alt="Símbolo cartão" />
            <p>
              <span>Não</span> é necessario Cartão de Crédito |{' '}
            </p>
          </div>
          <div className="bottom-section-info-bottom-review">
            <Image src={img_rating} alt="Avaliação 4.5 estrelas" />
            <p>
              <span>4.9</span>/5 média de satisfação
            </p>
          </div>
        </div>
      </div>
    </StyledBottomSection>
  )
}

export default BottomSection
