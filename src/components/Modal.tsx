// Images
import Image from 'next/image'
import img_download from '@/assets/images/download.png'

// Components
import { StyledModal } from '@/components/styles/StyledModal'

interface Props {
  title: string
  url: string
  id: number
}

const Modal = (props: Props) => {
  const closeModal = () => {
    const modal = document.querySelector('#modal') as HTMLDivElement
    modal!.style.display = 'none'
    document.body.style.overflow = 'scroll'
  }

  return (
    <StyledModal id="modal">
      <div className="modal">
        <div onClick={closeModal} className="modal-exit">
          X
        </div>
        <div className="modal-top">
          <h2>
            <span>Webinar:</span>
            {props.title}
          </h2>
        </div>
        <div className="modal-center">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${props.url}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="modal-bottom">
          <div className="modal-bottom-description">
            <div className="modal-bottom-title">
              <span>Descrição</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nemo
              vel consequatur debitis ratione. Non eaque asperiores perspiciatis
              ullam, sequi corrupti quo minima, voluptate dolore harum optio.
              Unde, ipsum dolores!
            </p>
          </div>
          <div className="modal-bottom-downloads">
            <div className="modal-bottom-title">
              <span>Downloads</span>
            </div>
            <div className="modal-bottom-downloads-options">
              <div className="download-option">
                <div className="download-option-icon">
                  <Image src={img_download} alt="Ícone Download" />
                </div>
                <div className="download-option-text">
                  <p>Spreadsheet.xls</p>
                </div>
              </div>
              <div className="download-option">
                <div className="download-option-icon">
                  <Image src={img_download} alt="Ícone Download" />
                </div>
                <div className="download-option-text">
                  <p>Document.doc</p>
                </div>
              </div>
              <div className="download-option">
                <div className="download-option-icon">
                  <Image src={img_download} alt="Ícone Download" />
                </div>
                <div className="download-option-text">
                  <p>Presentation.ppt</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledModal>
  )
}

export default Modal
