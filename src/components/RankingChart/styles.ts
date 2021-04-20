import styled from 'styled-components'

export const Container = styled.div`
  width: 530px;
  background: transparent;
  margin-top: -50px;

  @media (max-width: 767px) {
    padding: 10px;
    width: 400px;
    position: relative;
    left: -8px;
  }

  @media (max-width: 424px) {
    width: 350px;
  }
  @media (max-width: 374px) {
    width: 300px;
  }
`
