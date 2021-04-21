import styled from 'styled-components'

interface Props {
  buttonCopy: boolean
  clicked: boolean
}

export const Container = styled.div<Props>`
  width: 49%;
  display: flex;

  @media (max-width: 767px) {
    width: 100%;
  }

  > div {
    width: 100%;
    height: 340px;
    background: #0a152d;
    margin-top: 50px;
    padding: 25px;
    padding-top: 20px;
    border-radius: 16px;
    position: relative;

    @media (max-width: 767px) {
      height: 430px;
    }

    .header {
      display: flex;
      width: 100%;

      @media (max-width: 767px) {
        flex-direction: column;
        align-items: center;
      }

      .product-image {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 16px;
      }

      > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 10px;

        @media (max-width: 767px) {
          align-items: center;
        }

        h3 {
          font-weight: 600;
          font-size: 24px;
          color: #ffffff;

          @media (max-width: 767px) {
            text-align: center;
          }
        }

        .stars {
          width: 100px;
        }

        span {
          font-weight: 600;
          font-size: 13px;
          color: #ffffff;
        }
      }
    }

    > p {
      margin-top: 15px;
      font-weight: 500;
      font-size: 13px;
      color: #ffffff;
      height: 100px;
      overflow: auto;

      @media (max-width: 767px) {
        text-align: center;
      }
    }

    .buttonsContainer {
      position: absolute;
      bottom: 25px;
      display: flex;

      button {
        background: #37f0d3;
        border-radius: 8px;
        border: none;
        outline: none;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        font-size: 13px;
        color: #0f1b35;
        cursor: pointer;
      }

      button:nth-of-type(1) {
        width: 146px;
        width: ${({ clicked }) => (clicked ? '220px' : '146px')};
        margin-right: 10px;
        transition: all 0.3s linear;

        > img {
          margin-left: 20px;
        }
      }
      .qrbutton {
        width: 40px;
        background: ${({ buttonCopy }) => buttonCopy && '#ef4ff0'};
        transition: all 0.3s linear;
      }
      .productinfo {
        background: transparent;
        color: #37f0d3;
        text-decoration: underline;
        width: 80px;
        font-size: 13px;
      }
    }
  }
`
