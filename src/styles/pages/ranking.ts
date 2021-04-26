import styled from 'styled-components'

export const Container = styled.section`
  background: #0f1b35;
  width: calc(100% - 320px);
  padding: 60px 120px;

  @media (max-width: 1440px) {
    width: calc(100% - 270px);
    padding: 60px;
  }

  @media (max-width: 1023px) {
    width: 100%;
    margin-top: 85px;
  }

  @media (max-width: 767px) {
    padding: 25px 20px;
    margin-bottom: 85px;
  }

  > section {
    margin: 0 auto;
    max-width: 880px;
    animation: zoom 0.2s linear;
  }

  @keyframes zoom {
    from {
      transform: scale(0.8);
    }
    to {
      transform: scale(1);
    }
  }
`

export const Ranking = styled.section`
  h1 {
    margin: 50px 0 60px;
    display: flex;
    align-items: center;

    img {
      margin-right: 35px;
    }
  }
`
