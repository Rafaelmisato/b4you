import styled from 'styled-components'

interface OpenMenu {
  openMenu: boolean
}

export const Container = styled.aside<OpenMenu>`
  padding-left: 20px;
  padding-top: 20px;
  min-height: 100vh;
  width: 320px;
  background: #0a152d;
  position: relative;

  @media (max-width: 1440px) {
    width: 270px;
  }

  @media (max-width: 1023px) {
    position: fixed;
    z-index: 2;
    transform: ${({ openMenu }) =>
      openMenu ? 'translatex(0px)' : 'translatex(-305px)'};
    transition: all 0.3s linear;
    z-index: 3;
    width: 305px;
  }

  > img {
    margin: 70px 40px;

    @media (max-width: 1023px) {
      display: none;
    }
  }

  @keyframes dnone {
    from {
      display: none;
    }
    to {
      display: block;
    }
  }
`

export const Gold = styled.span`
  color: #2e384f;
  background: #ffdc14;
`

export const Black = styled.span`
  color: #fff;
  background: #000;
`

export const Rubi = styled.span`
  color: #fff;
  background: #ef4ff0;
`

export const Blue = styled.span`
  color: #fff;
  background: #3a69cf;
`

export const Profile = styled.div`
  margin: 0 40px;

  @media (max-width: 1023px) {
    display: none;
  }

  > img {
    width: 94px;
    height: 94px;
    border: 1px solid #37f0d3;
    border-radius: 16px;
    margin-bottom: 15px;
  }

  > h2 {
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;
    color: #ffffff;
  }

  > div {
    margin: 5px 0 10px 0;
    display: flex;
    align-items: center;

    > span {
      text-transform: uppercase;
      text-align: center;
      font-size: 12px;
      line-height: 18px;
      border-radius: 13.5px;
      padding: 3px 12px;
      margin-right: 16px;
    }

    > img {
      margin-right: 5px;
    }
  }

  > button {
    font-size: 12px;
    line-height: 18px;
    color: #fff;
    display: flex;
    align-items: center;
    background: none;
    outline: none;
    border: none;
    cursor: pointer;

    svg {
      margin-left: 12px;
      width: 10px;
      height: 10px;
    }
  }

  > button:nth-of-type(2) {
    margin-top: 60px;
    color: #fff;
    font-size: 9px;
    line-height: 13px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    span {
      font-size: 24px;
      line-height: 36px;
      display: flex;
      align-items: center;

      svg {
        margin-left: 30px;
        width: 14px;
        height: 14px;
      }
    }
  }
`

export const Nav = styled.nav`
  margin-top: 45px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1023px) {
    margin-top: 110px;
  }

  button {
    outline: none;
    border: none;
    cursor: pointer;
    padding-left: 40px;
    color: #bfcae1;
    display: flex;
    height: 70px;
    align-items: center;
    background: #fff;
    border-radius: 10px;
    background: transparent;
    border-radius: 16px 0px 0px 16px;
    font-size: 18px;
    line-height: 27px;
    font-weight: 600;

    svg {
      fill: #bfcae1;
      margin-right: 32px;
    }

    &:hover {
      color: #37f0d3;
      transition: all 0.3s linear;

      svg {
        fill: #37f0d3;
        transition: all 0.5s linear;
      }
    }
  }

  .perfil {
    display: none;

    @media (max-width: 1023px) {
      display: flex;
    }
  }

  .active {
    background: #0f1b35;
    color: #37f0d3;
    transition: all 0.3s linear;

    svg {
      fill: #37f0d3;
      transition: all 0.5s linear;
    }
  }
`

export const Background = styled.div<OpenMenu>`
  position: ${({ openMenu }) => (openMenu ? 'fixed' : 'none')};
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 2;
`

export const TopMenu = styled.div`
  display: none;
  width: 100vw;
  height: 85px;
  position: absolute;
  top: 0;
  z-index: 1;
  background: #0a152d;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 1023px) {
    display: flex;
  }

  @media (max-width: 767px) {
    justify-content: flex-start;
  }

  .logo-tablet {
    position: absolute;
    top: 15px;
    left: 35px;

    @media (max-width: 767px) {
      display: none;
    }
  }

  .logo-mobile {
    display: none;

    @media (max-width: 767px) {
      display: block;
      position: absolute;
      top: 15px;
      left: 20px;
    }
  }

  > div {
    display: flex;
    align-items: center;

    > img {
      width: 55px;
      height: 55px;
      border: 1px solid #37f0d3;
      border-radius: 16px;
      margin-right: 15px;
      margin-left: 85px;
    }

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      > span {
        font-weight: bold;
        font-size: 14px;
        line-height: 21px;
        color: #ffffff;
      }

      div {
        display: flex;
        align-items: center;
        width: 100%;
        margin-top: 4px;

        span {
          display: flex;
          align-items: center;
          justify-content: center;
          text-transform: uppercase;
          width: 36px;
          height: 14px;
          border-radius: 13.5px;
          font-size: 8px;
          line-height: 12px;
          padding-top: 1px;
        }

        img {
          width: 10px;
          height: 10px;
        }
      }
    }
  }

  .balance {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: none;
    outline: none;
    border: none;
    cursor: pointer;

    @media (max-width: 767px) {
      display: none;
    }

    p:nth-of-type(1) {
      font-size: 9px;
      line-height: 13px;
      color: #ffffff;
      text-transform: uppercase;
    }

    p:nth-of-type(2) {
      font-size: 24px;
      line-height: 36px;
      color: #ffffff;
      position: relative;
      font-weight: 600;

      img {
        margin-left: 36px;
      }
    }
  }
`

export const Hamburger = styled.div<OpenMenu>`
  display: none;

  @media (max-width: 1023px) {
    position: absolute;
    top: 30px;
    right: 50px;
    width: 23px;
    height: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    z-index: 3;

    > div {
      width: 100%;
      height: 4px;
      background: #fff;
      border-radius: 4px;
      transition: all 0.3s linear;
      position: relative;
    }

    div:nth-of-type(1) {
      transform: ${({ openMenu }) =>
        openMenu ? 'rotate(45deg)' : 'rotate(0)'};
      top: ${({ openMenu }) => (openMenu ? 'calc(50% - 2px)' : '0')};
    }
    div:nth-of-type(2) {
      background: ${({ openMenu }) => (openMenu ? 'transparent' : '#fff')};
    }
    div:nth-of-type(3) {
      transform: ${({ openMenu }) =>
        openMenu ? 'rotate(-45deg)' : 'rotate(0)'};
      bottom: ${({ openMenu }) => (openMenu ? 'calc(50% - 2px)' : '0')};
    }
  }

  @media (max-width: 424px) {
    right: 20px;
  }

  @media (max-width: 374px) {
    right: 15px;
  }
`

export const BottomMenu = styled.div`
  display: none;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 85px;
  background: green;
  z-index: 1;
  background: #0a152d;
  -webkit-box-shadow: 0px 0px 5px -1px #000;
  box-shadow: 0px 0px 5px -1px #000;

  @media (max-width: 767px) {
    display: flex;
  }

  button {
    outline: none;
    border: none;
    cursor: pointer;
    color: #bfcae1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: transparent;
    font-size: 12px;
    line-height: 18px;
    font-weight: 600;
    width: 33.333%;

    svg {
      fill: #bfcae1;
      margin-bottom: 10px;
      height: 25px;
    }

    .svg-home {
      height: 30px;
      margin-bottom: 6px;
      margin-left: 6px;
    }
  }

  .active {
    background: #0f1b35;
    color: #37f0d3;
    transition: all 0.3s linear;

    svg {
      fill: #37f0d3;
      transition: all 0.5s linear;
    }
  }
`
