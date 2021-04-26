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

export const Admin = styled.section`
  > .admin-title {
    display: flex;
    align-items: center;
    margin: 50px 0;

    > img {
      margin-right: 20px;
    }

    > div {
      > h1 {
        font-weight: 600;
        font-size: 24px;
        color: #ffffff;
      }

      > span {
        font-weight: 500;
        font-size: 15px;
        color: #ffffff;
      }
    }
  }
`
