import styled from 'styled-components'

export const Container = styled.div`
  .title {
    font-weight: 600;
    font-size: 24px;
    color: #ffffff;
    margin: 45px 0;
  }

  .videos-container {
    position: relative;
  }

  .arrow {
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translate(50%, -50%);
    background: #ffffff;
    border-radius: 50%;
    width: 55px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
  }

  .videos-wraper {
    display: flex;
    overflow-x: auto;
  }

  .video-single {
    margin-right: 20px;

    video {
      cursor: pointer;
      background: #0a152d;
      width: 240px;
      height: 240px;
      border-radius: 16px;
    }
  }
`
