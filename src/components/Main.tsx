'use client'

// Components
import { StyledMain } from '@/components/styles/StyledMain'
import Button from '@/components/Button'
import Video from '@/components/Video'
import { MouseEvent, useState } from 'react'
import videos from '@/data/videos'
import Modal from './Modal'

const Main = () => {
  const [selectedVideo, setSelectedVideo] = useState<any[]>()

  const selectVideo = (e: MouseEvent) => {
    setTimeout(() => {
      scrollTo(0, 0)
    }, 100)
    let videoId: string
    if ((e.target as HTMLDivElement).tagName === 'DIV') {
      videoId = (e.target as HTMLDivElement).getAttribute('video-id')!
      setSelectedVideo(videos.filter((video) => video.id === +videoId))
    } else if ((e.target as HTMLParagraphElement).tagName === 'P') {
      videoId = (
        e.target as HTMLDivElement
      ).parentElement!.parentElement!.getAttribute('video-id')!
    }
    openModal()
  }

  const openModal = () => {
    const modal = document.querySelector('#modal') as HTMLDivElement
    if (modal !== null) {
      modal!.style.display = 'flex'
    }
    document.body.style.overflow = 'hidden'
  }

  return (
    <>
      {selectedVideo !== undefined && (
        <Modal
          id={selectedVideo[0].id}
          title={selectedVideo[0].title}
          url={selectedVideo[0].url}
        />
      )}
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
        <div
          onClick={(e: MouseEvent<HTMLDivElement>) => selectVideo(e)}
          className="main-videos"
        >
          {videos &&
            videos.map((video) => (
              <Video
                key={video.title}
                title={video.title}
                url={video.url}
                id={video.id}
              />
            ))}
        </div>
        <div className="main-page">
          <p>Página</p>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
        </div>
      </StyledMain>
    </>
  )
}

export default Main
