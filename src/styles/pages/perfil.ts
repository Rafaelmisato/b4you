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

export const PerfilContainer = styled.section`
  padding: 60px 0 30px;

  @media (max-width: 767px) {
    padding-bottom: 20px;
  }
`

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;

  @media (max-width: 767px) {
    flex-direction: column;
  }

  .edit {
    padding: 10px;
    background: none;
    outline: none;
    border: none;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;

    &:hover {
      transform: scale(1.2);
      transition: all 0.3s linear;
    }
  }
`

export const InfoContainerLeft = styled.div`
  width: 49%;
  padding: 50px 30px 25px 30px;
  background: #0a152d;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 767px) {
    width: 100%;
    margin-bottom: 15px;
  }

  > img {
    width: 165px;
    height: 165px;
    border-radius: 16px;
    margin-bottom: 20px;
    cursor: pointer;
    position: relative;

    &:hover ~ .change-photo {
      visibility: visible;
      transition: all 0.3s linear;
    }
  }

  > .change-photo {
    background: rgba(55, 240, 211, 0.7);
    height: 30px;
    width: 165px;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 187px;
    border-radius: 0 0 16px 16px;
    color: #000;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    cursor: pointer;

    &:hover {
      visibility: visible;
    }
  }

  > h3 {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    color: #ffffff;
    margin-bottom: 20px;
  }

  div:nth-of-type(2) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 25px;
  }

  > span:nth-of-type(1) {
    font-weight: 600;
    font-size: 13px;
    line-height: 19px;
    margin-bottom: 15px;
  }

  hr {
    width: 100%;
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #3a69cf;
    padding: 0;
  }

  div:nth-of-type(3) {
    margin: 25px 0;

    img {
      width: 31px;
      height: 31px;
      object-fit: cover;
      margin: 0 4px;
    }
  }

  span:nth-of-type(3) {
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    margin-top: 20px;
  }
`

export const InfoContainerRight = styled.div`
  width: 49%;
  position: relative;

  @media (max-width: 767px) {
    width: 100%;
  }

  div + div {
    margin-top: 15px;
  }

  div {
    height: 270px;
    position: relative;
  }

  .card {
    padding: 15px 20px;

    h3 {
      font-weight: 600;
      font-size: 24px;
      line-height: 36px;
      color: #fff;
      margin: 0;
      padding: 0;
    }

    span {
      font-size: 13px;

      @media (max-width: 767px) {
        display: flex;
        justify-content: center;
      }
    }
  }

  .about {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    span {
      display: flex;
      text-align: center;
    }

    span:nth-of-type(2) {
      a {
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        border-radius: 6px;
        font-size: 12px;
        line-height: 18px;

        img {
          margin-top: -2px;
          margin-right: 5px;
        }

        & + a {
          margin-left: 15px;
        }
      }

      a:nth-of-type(1) {
        background: #0075ff;

        &:hover {
          -webkit-box-shadow: 0px 0px 13px 0px #0075ff;
          box-shadow: 0px 0px 13px 0px #0075ff;
          transition: all 0.3s linear;
        }
      }

      a:nth-of-type(2) {
        background: #f55147;

        &:hover {
          -webkit-box-shadow: 0px 0px 13px 0px #f55147;
          box-shadow: 0px 0px 13px 0px #f55147;
          transition: all 0.3s linear;
        }
      }
    }
  }

  .exp {
    flex-direction: column;

    @media (max-width: 1107px) {
      height: 288px;
    }
    @media (max-width: 1023px) {
      height: 270px;
    }
    @media (max-width: 837px) {
      height: 290px;
    }
    @media (max-width: 767px) {
      height: 270px;
    }

    p {
      margin: 25px 0 10px 0;
      font-size: 13px;
      line-height: 19px;

      @media (max-width: 767px) {
        text-align: center;
      }
    }

    > div {
      height: auto;

      @media (max-width: 767px) {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      img {
        width: 31px;
        height: 31px;
        object-fit: cover;
        margin-right: 8px;
      }
    }
  }
`

export const RankingContainer = styled.div`
  background: #0a152d;
  border-radius: 16px;
  padding: 30px;

  > h3 {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    color: #ffffff;
    margin-bottom: 35px;
  }

  .ranking-wraper {
    justify-content: space-between;
    align-items: center;
  }

  .ranking-products {
    @media (max-width: 767px) {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }

    div + div {
      margin-left: 0;
    }
  }

  .ranking-product-single {
    margin-bottom: 20px;

    @media (max-width: 767px) {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 200px;
    }

    img {
      width: 60px;
      height: 60px;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 10px;

      span:nth-of-type(1) {
        font-weight: 600;
        font-size: 16px;
        color: #fff;

        @media (max-width: 767px) {
          text-align: center;
        }
      }

      span:nth-of-type(2) {
        font-weight: 600;
        font-size: 14px;
        color: #fff;

        @media (max-width: 767px) {
          text-align: center;
        }
      }
    }
  }
`

export const TeamContainer = styled.div`
  background: #0a152d;
  border-radius: 16px;
  padding: 30px;
  margin-top: 30px;

  > h3 {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    color: #ffffff;
    margin-bottom: 45px;
  }
`
