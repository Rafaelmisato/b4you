import styled from 'styled-components'

interface ContainerProps {
  isFocused: boolean
  isFilled: boolean
  width?: number
  km: string
}

export const Container = styled.div<ContainerProps>`
  width: ${props => (props.width ? props.width + 'px' : 100 + '%')};
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 10px 0;
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  input {
    flex: 1;
    background: transparent;
    outline: none;
    border: none;
    font-size: 16px;
    color: #0e1758;
    &::placeholder {
      font-size: 16px;
      color: #0e1758;
    }
  }
  & + div {
    margin-left: 8px;
  }
`

export const Km = styled.div`
  width: 100%;
  margin-top: 10px;
`
