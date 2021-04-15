import { useState, useRef, useEffect } from 'react'

import { Container, Player, Play } from './styles'

import { IoMdPause } from 'react-icons/io'

interface VideoProps {
  src: string
  poster: string
}

/**
 *
 * @param param0
 *  To use the component video needs to pass the param
 * - src: url of the video
 * - poster: thumb img of the video
 */

const Video: React.FC<VideoProps> = ({ src, poster }) => {
  const UsePlayerState = videoRef => {
    const [playerState, setPlayerState] = useState({
      playing: false,
      percentage: 0
    })

    useEffect(() => {
      playerState.playing ? videoRef.current.play() : videoRef.current.pause()
    }, [playerState.playing, videoRef])

    const toggleVideoPlay = () => {
      setPlayerState({
        ...playerState,
        playing: !playerState.playing
      })
    }

    const handleTime = () => {
      const currentPercentage =
        (videoRef.current.currentTime / videoRef.current.duration) * 100

      setPlayerState({
        ...playerState,
        percentage: currentPercentage
      })
    }

    const handleChangeVideoPercentage = e => {
      const currentPercentageValue = e.target.value
      videoRef.current.currentTime =
        (videoRef.current.duration / 100) * currentPercentageValue

      setPlayerState({
        ...playerState,
        percentage: currentPercentageValue
      })
    }

    return {
      playerState,
      toggleVideoPlay,
      handleTime,
      handleChangeVideoPercentage
    }
  }

  const videoRef = useRef(null)
  const {
    playerState,
    toggleVideoPlay,
    handleTime,
    handleChangeVideoPercentage
  } = UsePlayerState(videoRef)

  return (
    <Container>
      <Player
        src={src}
        poster={poster}
        ref={videoRef}
        onTimeUpdate={handleTime}
      />
      <Play>
        <button onClick={toggleVideoPlay}>
          {!playerState.playing ? (
            <img src="/play.svg" alt="play" />
          ) : (
            <IoMdPause />
          )}
        </button>

        {playerState.playing && (
          <input
            type="range"
            min="0"
            max="100"
            value={playerState.percentage}
            onChange={handleChangeVideoPercentage}
          />
        )}
        <button>
          <img src="/chevronright.svg" alt="next" />
        </button>
      </Play>
    </Container>
  )
}

export default Video
