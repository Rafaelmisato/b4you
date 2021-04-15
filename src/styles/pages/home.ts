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
  }

  .sell {
    margin-top: 80px;
  }
`

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  /* products card */
  .products {
    display: flex;
    margin-bottom: 35px;

    img {
      width: 74px;
      height: 74px;
      border-radius: 16px;
      object-fit: cover;
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
  color: #fff;
  background: #3a69cf;
`
