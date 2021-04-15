import styled from 'styled-components'

interface OpenMenu {
  openMenu: boolean
}

export const Container = styled.aside<OpenMenu>`
  background: blue;
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
      openMenu ? 'translatex(0px)' : 'translatex(-270px)'};
    transition: all 0.3s linear;
  }

  @media (max-width: 767px) {
    display: none;
  }

  > img {
    margin: 70px 40px;
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

export const Background = styled.div<OpenMenu>`
  position: ${({ openMenu }) => (openMenu ? 'fixed' : 'none')};
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1;
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

  > a {
    font-size: 12px;
    line-height: 18px;
    color: #fff;
    display: flex;
    align-items: center;

    svg {
      margin-left: 12px;
      width: 10px;
      height: 10px;
    }
  }

  > a:nth-of-type(2) {
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

  button {
    outline: none;
    border: none;
    cursor: pointer;
    padding-left: 40px;
    color: #bfcae1;
    display: flex;
    height: 70px;
    background: blue;
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

export const Hamburger = styled.div<OpenMenu>`
  display: none;

  @media (max-width: 1023px) {
    position: fixed;
    top: 20px;
    left: 20px;
    width: 50px;
    height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    z-index: 2;

    > div {
      width: 100%;
      height: 8px;
      background: #fff;
      border-radius: 4px;
      transition: all 0.3s linear;
      position: relative;
    }

    div:nth-of-type(1) {
      transform: ${({ openMenu }) =>
        openMenu ? 'rotate(45deg)' : 'rotate(0)'};
      top: ${({ openMenu }) => (openMenu ? 'calc(50% - 4px)' : '0')};
    }
    div:nth-of-type(2) {
      background: ${({ openMenu }) => (openMenu ? 'transparent' : '#fff')};
    }
    div:nth-of-type(3) {
      transform: ${({ openMenu }) =>
        openMenu ? 'rotate(-45deg)' : 'rotate(0)'};
      bottom: ${({ openMenu }) => (openMenu ? 'calc(50% - 4px)' : '0')};
    }
  }
`
