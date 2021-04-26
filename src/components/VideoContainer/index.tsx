import { useState } from 'react'
import { Container } from './styles'

interface Props {
  videos: {
    title: string
    videos: { video: string; poster: string }[]
  }[]
}

const VideoContainer: React.FC<Props> = ({ videos }) => {
  const [play, setPlay] = useState(false)

  const handleClick = e => {
    setPlay(!play)
    e.target.play()

    if (play === true) {
      e.target.pause()
    }
  }

  return (
    <Container>
      <div>
        {videos.map((video, index) => {
          return (
            <>
              <h3 key={index} className="title">
                {video.title}
              </h3>
              <div key={`${index}video`} className="videos-container">
                <div className="arrow">
                  <img src="/videosPlaceholder/arrowLeft.svg" />
                </div>
                <div className="videos-wraper">
                  {video.videos.map((singlevideo, index) => {
                    return (
                      <div
                        key={`${index}videosingleee`}
                        className="video-single"
                      >
                        <video
                          src={singlevideo.video}
                          onClick={e => handleClick(e)}
                          poster={singlevideo.poster}
                        />
                      </div>
                    )
                  })}
                </div>
              </div>
            </>
          )
        })}
      </div>
    </Container>
  )
}

export default VideoContainer
