import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 350px;
  border-radius: 16px;
  display: flex;
  padding-bottom: 45px;
  justify-content: center;
  position: relative;

  @media (max-width: 1023px) {
    height: 256px;
  }

  @media (max-width: 767px) {
    height: 150px;
    margin-bottom: 50px;
  }

  &:hover {
    border-left: 4px solid #37f0d3;
    border-top: 3px solid #37f0d3;
    transition: all 0.2s linear;

    @media (max-width: 1023px) {
      border: none;
    }
  }
`

export const Player = styled.video`
  width: 100%;
  height: calc(350px - 45px);
  object-fit: cover;
  border-radius: 16px 16px 0 0;

  @media (max-width: 1023px) {
    height: calc(256px - 30px);
  }

  @media (max-width: 767px) {
    height: calc(150px - 20px);
  }
`

export const Play = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 45px;
  background: #0a152d;
  border-radius: 0 0 16px 16px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1023px) {
    height: 30px;
  }

  @media (max-width: 767px) {
    height: 20px;
  }

  input {
    width: 200px;
  }

  button {
    cursor: pointer;
    background: none;
    outline: none;
    border: none;
    display: flex;

    img {
      color: #fff;

      @media (max-width: 1023px) {
        width: 19px;
        height: 19px;
      }
    }
  }

  svg {
    color: #fff;
  }
`
