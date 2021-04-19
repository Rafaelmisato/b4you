import styled from 'styled-components'

interface Props {
  checked: boolean
}

export const Container = styled.label<Props>`
  display: flex;
  cursor: pointer;
  align-items: center;
  width: 150px;

  input {
    display: none;
  }

  > div {
    width: 39px;
    height: 20px;
    background: #37f0d3;
    background: ${({ checked }) => (checked ? '#37f0d3' : '#BFCAE1')};
    border-radius: 16px;
    position: relative;
    transition: all 0.3s linear;

    > div {
      width: 17px;
      height: 17px;
      background: #ffffff;
      border: 0.5px solid rgba(0, 0, 0, 0.5);
      border: ${({ checked }) =>
        checked ? '0.5px solid rgba(0, 0, 0, 0.5)' : 'none'};
      border-radius: 16px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: ${({ checked }) => (checked ? 'calc(100% - 18px)' : '1px')};
      transition: all 0.3s linear;
    }
  }

  span {
    font-size: 10px;
    line-height: 15px;
    margin-left: 10px;
    color: ${({ checked }) => checked && '#37F0D3'};
  }
`
