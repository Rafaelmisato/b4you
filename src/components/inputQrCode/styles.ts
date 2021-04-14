import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 40px;
  position: relative;

  input {
    background: #0a152d;
    border-radius: 16px;
    border: none;
    height: 53px;
    width: 653px;
    color: #bfcae1;
    font-size: 18px;
    line-height: 27px;
    font-weight: 600;
    text-align: center;
    outline: none;
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
    color: #ffffff;
    cursor: pointer;
  }
`
