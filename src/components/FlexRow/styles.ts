import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  div + div {
    margin-left: 15px;
  }
`
