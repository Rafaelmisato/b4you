import styled from 'styled-components'

interface Props {
  buttonCopy: boolean
  buttonQr: boolean
}

export const Container = styled.div<Props>`
  padding: 0 40px;
  position: relative;
  display: flex;
  justify-content: space-around;

  @media (max-width: 1440px) {
    padding: 0;
  }

  input {
    background: #0a152d;
    border-radius: 16px;
    border: none;
    height: 53px;
    width: 100%;
    max-width: 653px;
    color: #bfcae1;
    font-size: 18px;
    line-height: 27px;
    font-weight: 600;
    text-align: center;
    outline: none;
    cursor: pointer;

    @media (max-width: 767px) {
      height: 35px;
      border-radius: 10px;
      font-size: 14px;
      line-height: 15px;
      font-weight: 600;
    }

    @media (max-width: 424px) {
      font-size: 10px;
    }
  }

  button {
    width: 63px;
    height: 53px;
    outline: none;
    border: none;
    background: #ef4ff0;
    border-radius: 16px;
    cursor: default;
    margin-left: 8px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 767px) {
      width: 50px;
      height: 35px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &:nth-of-type(1) {
      background: ${({ buttonCopy }) => (buttonCopy ? '#4FF08F;' : ' #ef4ff0')};
      transition: background 0.2s linear;
    }
    &:nth-of-type(2) {
      background: ${({ buttonQr }) => (buttonQr ? '#4FF08F;' : ' #ef4ff0')};
      transition: background 0.2s linear;
    }

    img {
      @media (max-width: 767px) {
        width: 25px;
        height: 25px;
      }
    }
  }

  span {
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(calc(-50% - 60px));
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    text-transform: uppercase;
    cursor: pointer;
    transition: color 0.2s linear;
    color: ${({ buttonCopy }) => (buttonCopy ? '#4FF08F;' : ' #fff')};

    @media (max-width: 767px) {
      transform: translateX(-50%);
    }
  }

  @media (max-width: 767px) {
    .clicktocopy {
      color: transparent;
    }
  }
`

export const QRCodeContainer = styled.div<Props>`
  margin: 70px 0 40px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: zoom 0.3s linear;
  position: relative;

  img {
    width: 200px;
    height: 200px;
    margin-right: 60px;
    margin-left: 100px;
    animation: height 0.3s linear;

    @media (max-width: 767px) {
      margin: 0;
    }
  }

  span {
    width: 165px;
    text-align: center;
    color: #fff;
    font-size: 14px;
    line-height: 21px;
    text-transform: uppercase;

    @media (max-width: 767px) {
      display: none;
    }
  }

  button {
    position: absolute;
    top: -50px;
    right: 30px;
    background: none;
    outline: none;
    border: none;
    color: #fff;
    font-weight: 800;
    font-size: 18px;
    cursor: pointer;
  }

  @keyframes zoom {
    from {
      transform: scale(0);
    }
    to {
      transform: scale() (1);
    }
  }
  @keyframes height {
    from {
      height: 0;
    }
    to {
      height: 200px;
    }
  }
`
