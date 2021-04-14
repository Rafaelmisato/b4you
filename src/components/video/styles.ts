import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 350px;
  border-radius: 16px;
  border-left: 4px solid #37f0d3;
  border-top: 3px solid #37f0d3;
  display: flex;
  padding-bottom: 45px;
  justify-content: center;
  position: relative;
`

export const Player = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px 16px 0 0;
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

  input {
    width: 200px;
  }

  button {
    cursor: pointer;
    background: none;
    outline: none;
    border: none;

    svg {
      color: #fff;
      width: 20px;
      height: 20px;
    }
  }
`
