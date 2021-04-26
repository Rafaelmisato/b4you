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

export const Products = styled.section`
  h1 {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 24px;
    color: #ffffff;
    margin: 45px 0;

    img {
      margin-right: 20px;
    }
  }

  > .my-products {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    animation: zoom 0.3s linear;

    @keyframes zoom {
      from {
        transform: scale(0);
      }
      to {
        transform: scale(1);
      }
    }
  }

  > .product-single {
    padding-top: 70px;
    animation: zoom 0.3s linear;

    @keyframes zoom {
      from {
        transform: scale(0);
      }
      to {
        transform: scale(1);
      }
    }

    > div {
      display: flex;
      flex-direction: column;

      > .product-image-single {
        height: 200px;
        width: 100%;
        object-fit: cover;
        border-radius: 16px;
      }

      > h3 {
        font-weight: 600;
        font-size: 24px;
        color: #ffffff;
        margin: 30px 0;
      }

      > p {
        margin: 25px 0 40px;
        font-weight: 500;
        font-size: 18px;
        color: #ffffff;
      }

      > span {
        display: flex;
        align-items: center;
        font-weight: 600;
        font-size: 18px;
        color: #ffffff;

        > img {
          margin-right: 15px;
        }
      }

      > button {
        width: 290px;
        height: 43px;
        background: #37f0d3;
        border-radius: 8px;
        border: none;
        outline: none;
        cursor: pointer;
        margin-top: 60px;

        @media (max-width: 374px) {
          width: 270px;
        }
      }
    }
  }
`
