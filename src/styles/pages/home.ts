import styled from 'styled-components'

export const Container = styled.section`
  background: #0f1b35;
  width: calc(100% - 320px);
  padding: 60px 120px;

  > section {
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

export const HomeContainer = styled.section`
  h2 {
    margin: 54px 0 40px;
    color: #fff;
    font-size: 24px;
    line-height: 36px;
  }
`
