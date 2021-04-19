import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  @media (max-width: 767px) {
    flex-direction: column;
  }

  div + div {
    margin-left: 15px;

    @media (max-width: 767px) {
      margin: 0;
    }
  }
`
