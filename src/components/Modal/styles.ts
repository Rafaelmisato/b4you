import styled from 'styled-components'

interface Props {
  zoom: number
  rotate: number
}

export const Container = styled.div<Props>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(15, 27, 53, 0.6);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: zoom 0.3s linear;

  @keyframes zoom {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  .modal {
    background: #0a152d;
    border-radius: 16px;
    padding: 20px 40px 115px;
    position: relative;
    min-width: 880px;

    @media (max-width: 1023px) {
      min-width: 660px;
    }

    @media (max-width: 767px) {
      width: 90%;
      min-width: 96%;
      height: 80vh;
      overflow: auto;
      padding-bottom: 50px;
    }

    h3 {
      font-weight: 600;
      font-size: 24px;
      line-height: 36px;
      color: #ffffff;
      margin: 25px 0;
    }

    .imgContainer {
      width: 100%;
      max-width: 190px;
      height: 190px;
      overflow: hidden;
      border-radius: 16px;

      @media (max-width: 767px) {
        max-width: 300px;
        height: 300px;
        margin: 60px auto;
      }

      .perfilImg {
        border-radius: 16px;
        width: 190px;
        height: 190px;
        object-fit: cover;
        transform: ${({ zoom }) => zoom && `scale(${zoom})`};
        transform: ${({ rotate }) => rotate && `rotate(${rotate}deg)`};

        @media (max-width: 767px) {
          width: 300px;
          height: 300px;
        }
      }
    }
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    font-size: 14px;
    line-height: 21px;
  }

  .close {
    position: absolute;
    top: 15px;
    right: 10px;
    width: 40px;
    height: 40px;
    background: rgba(196, 196, 196, 0.1);
    border-radius: 8px;

    &:hover > img {
      transform: rotate(90deg);
    }

    img {
      transform: rotate(0deg);
      transition: all 0.2s linear;
    }
  }

  .buttonClose {
    position: absolute;
    bottom: 40px;
    left: 40px;
    width: 200px;
    height: 50px;
    border: 2px solid #37f0d3;
    border-radius: 8px;
    color: #37f0d3;
    transition: all 0.3s linear;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 767px) {
      position: relative;
      bottom: -30px;
      left: 50%;
      transform: translateX(-50%);
    }

    &:hover {
      background: rgba(55, 240, 211, 0.2);
    }

    input {
      display: none;
    }
  }

  .buttonConfirm {
    position: absolute;
    bottom: 40px;
    right: 40px;
    width: 281px;
    height: 50px;
    border-radius: 8px;
    background: #37f0d3;
    text-transform: uppercase;
    transition: all 0.3s linear;

    @media (max-width: 767px) {
      position: relative;
      bottom: -20px;
      left: 50%;
      transform: translateX(-50%);
    }

    &:hover {
      -webkit-box-shadow: 0px 0px 10px -1px #37f0d3;
      box-shadow: 0px 0px 10px -1px #37f0d3;
    }
  }

  .input-range {
    width: 100%;
    padding: 0 20px;
  }

  .aboutInfo {
    width: 100%;
    height: 170px;
    background: #2e384f;
    border-radius: 8px;
    margin: 20px 0;
  }

  .achievements-title {
    padding-top: 30px;
  }

  .experiences-checkbox {
    display: flex;
    position: relative;
    margin: 30px 0;

    @media (max-width: 767px) {
      margin-bottom: 50px;
    }

    > img {
      width: 50px;
      height: 50px;
      object-fit: cover;
    }

    > div {
      margin-left: 15px;

      > span {
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
        color: #ffffff;
      }

      > p {
        font-weight: 500;
        font-size: 10px;
        line-height: 15px;
        color: #ffffff;
      }
    }

    > label {
      position: absolute;
      bottom: -20px;
      left: 65px;

      @media (max-width: 767px) {
        bottom: -30px;
      }
    }
  }

  .margin-bottom {
    height: 60px;

    @media (max-width: 767px) {
      display: none;
    }
  }
`
