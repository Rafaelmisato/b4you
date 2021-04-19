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
    min-width: 600px;

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

      .perfilImg {
        border-radius: 16px;
        width: 190px;
        height: 190px;
        object-fit: cover;
        transform: ${({ zoom }) => zoom && `scale(${zoom})`};
        transform: ${({ rotate }) => rotate && `rotate(${rotate}deg)`};
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

    &:hover {
      -webkit-box-shadow: 0px 0px 10px -1px #37f0d3;
      box-shadow: 0px 0px 10px -1px #37f0d3;
    }
  }

  .input-range {
    width: 100%;
    padding: 0 20px;
  }
`
