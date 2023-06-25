'use client'

import { StyledMain } from '@/components/styles/StyledMain'
import Button from '@/components/Button'
import Video from '@/components/Video'

const Main = () => {
  return (
    <StyledMain>
      <div className="main-top">
        <div className="main-buttons">
          <Button value="Agências" />
          <Button value="Chatbot" />
          <Button value="Marketing Digital" />
          <Button value="Geração de Leads" />
          <Button value="Mídia Paga" />
        </div>
        <div className="main-select">
          <p>Ordernar por</p>
          <select>
            <option value="data">Data de Publicação</option>
            <option value="views">Visualizações</option>
            <option value="mostliked">Mais curtidos</option>
          </select>
        </div>
      </div>
      <div className="main-videos">
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
      </div>
      <hr />
      <div className="main-page">
        <p>Página</p>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </div>
    </StyledMain>
  )
}

export default Main
