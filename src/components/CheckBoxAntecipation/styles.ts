import styled from 'styled-components'

interface Props {
  checked: boolean
}

export const Container = styled.label<Props>`
  display: flex;
  cursor: pointer;
  align-items: center;
  width: 100%;
  padding: 10px 30px;
  background: #0a152d;
  border-radius: 8px;
  position: relative;
  border: ${({ checked }) => (checked ? '1px solid  #ffdc14 ' : 'none')};
  margin-bottom: 20px;

  input {
    display: none;
  }

  > div {
    font-weight: 600;
    font-size: 18px;
    color: #ffffff;
  }

  > .point {
    display: ${({ checked }) => (checked ? 'block' : 'none')};
    width: 8px;
    height: 8px;
    background: #ffdc14;
    border-radius: 50%;
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
  }
`
