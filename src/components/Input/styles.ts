import styled from 'styled-components'

interface InputProps {
  width: number
  error: boolean | string
}

export const Container = styled.div<InputProps>`
  width: 100%;
  width: ${({ width }) => `${width}%`};
  position: relative;

  > span {
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: ${({ error }) => (error ? 'red' : '#bfcae1')};
  }

  > input {
    width: 100%;
    background: none;
    border: none;
    font-size: 20px;
    background: #2e384f;
    border-radius: 8px;
    outline: none;
    padding: 8px 12px;
    color: #fff;
    height: 47px;
    margin-top: 5px;
    margin-bottom: 10px;
  }

  > p {
    color: red;
    position: absolute;
    bottom: -4px;
    font-size: 10px;
  }
`
