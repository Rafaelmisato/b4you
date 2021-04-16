import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 30px;
  border-radius: 16px;
  background: #0a152d;

  @media (max-width: 767px) {
    padding: 10px;
  }
`

export const Header = styled.div`
  display: flex;
  padding-right: 40px;
  width: 100%;
  margin-bottom: 20px;

  @media (max-width: 767px) {
    padding: 0;
    flex-direction: column;
    align-items: center;
  }

  div:nth-of-type(1) {
    width: 50%;
    display: flex;
    align-items: center;

    @media (max-width: 767px) {
      width: 100%;
      margin-bottom: 10px;
    }

    img {
      width: 63px;
      height: 63px;
    }

    h2 {
      margin: 0;
      margin-left: 20px;
      color: #bfcae1;
      font-weight: bold;
      font-size: 24px;
      line-height: 10px;
    }
  }

  div:nth-of-type(2) {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font-weight: 600;
      font-size: 14px;
      line-height: 10px;
      color: #ffffff;
    }

    button {
      background: none;
      border: none;
      outline: none;
      cursor: pointer;
    }
  }
`

export const Sellings = styled.div`
  > .borderTop {
    width: calc(100% - 20px);
    height: 4px;
    background: #244282;
    border-radius: 4px;
    margin: 0 auto;
    margin-bottom: 30px;
  }

  h3 {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #ffffff;
    margin-bottom: 25px;
  }
`

export const Table = styled.div`
  > div:nth-of-type(1) {
    background: none;

    > span {
      font-weight: 600;
      font-size: 12px;
      line-height: 18px;

      &:nth-of-type(1) {
        padding-left: 40px;

        @media (max-width: 767px) {
          padding: 0;
        }
      }
      &:nth-of-type(2) {
      }
      &:nth-of-type(3) {
      }
    }
  }

  > div {
    display: flex;
    align-items: center;
    background: rgba(36, 66, 130, 0.5);
    border-radius: 6px;
    padding: 6px 0;
    margin-bottom: 10px;

    > span {
      font-weight: 600;
      font-size: 10px;
      line-height: 15px;
      color: #ffffff;

      &:nth-of-type(1) {
        width: 60%;
        margin-left: 20px;
        margin-right: -20px;

        @media (max-width: 767px) {
          margin: 0 10px;
          width: 50%;
        }
      }

      &:nth-of-type(2) {
        width: 20%;
        display: flex;
        align-items: center;
        justify-content: center;

        @media (max-width: 767px) {
          width: 30%;
        }
        img {
          margin-right: 6px;
        }
      }
      &:nth-of-type(3) {
        width: 20%;
        display: flex;
        justify-content: center;
      }
    }
  }
`
