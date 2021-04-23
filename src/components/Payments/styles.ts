import styled from 'styled-components'

interface Props {
  available?: boolean
  antecipation?: boolean
}

export const Container = styled.div<Props>`
  margin-top: 40px;

  > h2 {
    font-weight: 500;
    font-size: 15px;
    color: #ffffff;
    margin-bottom: 45px;
    text-align: center;
  }

  > .buttonContainerReceipt {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 50px;

    @media (max-width: 767px) {
      flex-direction: column;
    }

    > button {
      width: 49%;
      outline: none;
      border: none;
      background: #0a152d;
      border-radius: 16px;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 15px 20px 35px 20px;
      transition: all 0.3s linear;

      @media (max-width: 767px) {
        width: 100%;

        & + button {
          margin-top: 20px;
        }
      }

      > .points-receipt {
        position: absolute;
        top: 10px;
        right: 15px;
      }

      > .buttonTitleReceipt {
        display: flex;
        width: 100%;

        > span {
          margin: auto 0;
          margin-left: 30px;
          font-weight: 600;
          font-size: 18px;
          color: #ffffff;
        }
      }

      > .valuescontainer {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        flex: 1;

        > span:nth-of-type(1) {
          font-weight: 600;
          font-size: 24px;
          color: #ffffff;
          margin: 0 15px;
          margin-top: -20px;

          @media (max-width: 1220px) {
            margin: 0;
          }
        }

        > span:nth-of-type(2) {
          font-weight: 600;
          font-size: 64px;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          align-items: flex-start;

          @media (max-width: 424px) {
            font-size: 48px;
          }

          > div {
            margin-top: -10px;
            font-weight: 600;
            font-size: 11px;
            color: #ffffff;
          }
        }

        > img {
          margin-top: -20px;
          margin-left: 16px;

          @media (max-width: 1220px) {
            display: none;
          }
        }
      }
    }
  }

  > .infodata {
    width: 100%;
    height: 80px;
    padding: 0 30px;
    display: flex;
    align-items: center;
    background: #0a152d;
    border-radius: 16px;
    margin-bottom: 20px;
    cursor: pointer;

    > img {
      margin-right: 25px;
    }

    > span {
      font-weight: 600;
      font-size: 18px;
      color: #ffffff;
    }

    .value {
      margin-left: auto;
      font-weight: bold;
      font-size: 20px;
    }

    > .infoClick {
      position: relative;

      > img {
        margin-left: 20px;
      }

      > div {
        position: absolute;
        top: 100%;
        background: #0a152d;
        width: 150px;
        padding: 10px;
        border-radius: 16px;
        color: #fff;
        z-index: 1;
        border: 1px solid #37f0d3;
      }
    }

    > .infovalue {
      margin-left: auto;
    }
  }

  > .moreInfo {
    background: #0a152d;
    margin-top: -30px;
    padding: 20px 30px 40px;
    margin-bottom: 20px;
    position: relative;
    border-radius: 0 0 16px 16px;

    > .border {
      position: absolute;
      top: 0;
      width: calc(100% - 60px);
      height: 2px;
      background: #37f0d3;
    }

    > .content {
      padding-left: 50px;
      padding-right: 15px;

      @media (max-width: 767px) {
        padding: 10px;
      }

      > h2 {
        font-weight: 600;
        font-size: 14px;
        color: #ffffff;
        margin-bottom: 20px;
      }

      > .moreDetails {
        width: 100%;
        display: flex;

        @media (max-width: 767px) {
          flex-wrap: wrap;
          margin-bottom: 10px;
          border-bottom: 1px solid #fff;
        }

        > span {
          font-size: 14px;
          color: #bfcae1;
          margin: 10px 0;

          @media (max-width: 767px) {
            margin: 0;
            margin-bottom: 10px;
          }
        }

        > span:nth-of-type(1) {
          width: 35%;
          @media (max-width: 767px) {
            width: 50%;
          }
        }
        > span:nth-of-type(2) {
          width: 35%;
          @media (max-width: 767px) {
            width: 50%;
            text-align: right;
          }
        }
        > span:nth-of-type(3) {
          width: 20%;
          @media (max-width: 767px) {
            width: 50%;
          }
        }
        > span:nth-of-type(4) {
          width: 10%;
          text-align: center;
          display: flex;
          justify-content: center;
          @media (max-width: 767px) {
            width: 50%;
            text-align: left;
            justify-content: flex-end;
          }

          > img {
            margin-right: 10px;
          }
        }
      }
    }
  }
`
