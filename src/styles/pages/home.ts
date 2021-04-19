import styled from 'styled-components'

interface Border {
  borderColor: string
}

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

export const HomeContainer = styled.section`
  h2 {
    margin: 54px 0 40px;
    color: #fff;
    font-size: 24px;
    line-height: 36px;

    @media (max-width: 767px) {
      margin: 20px 0 20px;
      font-size: 18px;
      line-height: 27px;
    }
  }

  .sell {
    margin-top: 80px;
  }
`

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-direction: column;
  }

  /* products card */
  .products {
    display: flex;
    margin-bottom: 35px;

    img {
      width: 74px;
      height: 74px;
      border-radius: 16px;
      object-fit: cover;

      @media (max-width: 767px) {
        width: 64px;
        height: 64px;
      }
    }

    h3 {
      font-weight: 600;
      font-size: 18px;
      line-height: 10px;
      color: #ffffff;
      margin-top: 15px;
      margin-left: 25px;

      @media (max-width: 1090px) {
        line-height: 18px;
      }
    }
  }

  /* ranking card */
  .ranking {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    hr {
      width: 306px;
      margin: 0 auto;
      margin-bottom: 14px;
    }

    .sales {
      display: flex;
      flex-direction: row;
      align-items: center;

      p {
        display: inline;
      }
      p:nth-of-type(2) {
        display: inline;
        color: #4ff08f;
        font-size: 10px;
        line-height: 12px;
        margin-left: 20px;
      }
    }

    > div {
      padding: 5px 0;

      > div {
        display: flex;
        font-size: 12px;
        color: #ffffff;

        > div {
          display: flex;
          width: 100%;
          justify-content: space-between;
          align-items: center;

          > div {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            span:nth-of-type(1) {
              font-size: 12px;
              line-height: 10px;
              color: #ffffff;
            }

            span:nth-of-type(2) {
              display: flex;
              align-items: center;
              margin: 8px 0;

              span {
                width: 31px;
                height: 12px;
                border-radius: 5.5px;
                font-size: 5px;
                line-height: 10px;
                text-transform: uppercase;
                display: flex;
                justify-content: center;
                padding-top: 2px;
                margin-right: 4px;
              }

              img {
                width: 12px;
                height: 12px;
                margin: 0;
                margin-right: 2px;
              }
            }

            span:nth-of-type(3) {
              font-size: 10px;
              line-height: 10px;
              color: #ffffff;
              display: flex;
              align-items: center;

              img {
                width: 3px;
                height: 3px;
                margin: 0 4px;
              }
            }
          }
        }
      }
    }
  }
`

export const UserCard = styled.div<Border>`
  .user-img {
    width: 48px;
    height: 48px;
    border-radius: 10px;
    object-fit: cover;
    margin-right: 14px;
    border: ${({ borderColor }) =>
      borderColor === 'gold' && '1px solid #FFDC14'};
    border: ${({ borderColor }) => borderColor === 'black' && '1px solid #000'};
    border: ${({ borderColor }) =>
      borderColor === 'rubi' && '1px solid #EF4FF0'};
    border: ${({ borderColor }) =>
      borderColor === 'blue' && '1px solid #3A69CF'};
  }
`

export const Gold = styled.span`
  color: #2e384f;
  background: #ffdc14;
`

export const Black = styled.span`
  color: #fff;
  background: #000;
`

export const Rubi = styled.span`
  color: #fff;
  background: #ef4ff0;
`

export const Blue = styled.span`
  color: #000;
  background: #3a69cf;
`

export const Green = styled.span`
  color: #000;
  background: #4ff08f;
`

export const PerfilContainer = styled.section`
  padding: 60px 0;
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

    span {
      border-radius: 12px;
      font-weight: 600;
      font-size: 10px;
      line-height: 15px;
      text-transform: uppercase;
      width: 60px;
      height: 22px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    img {
      height: 22px;
      width: 22px;
      margin: 0;
      margin-left: 10px;
    }
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

    @media (max-width: 1180px) {
      height: 326px;
    }
    @media (max-width: 1023px) {
      height: 270px;
    }
    @media (max-width: 837px) {
      height: 290px;
    }
    @media (max-width: 799px) {
      height: 326px;
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
