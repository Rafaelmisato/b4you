import styled from 'styled-components'

export const Container = styled.div`
  background: #0a152d;
  border-radius: 16px;
  margin-top: 100px;
  position: relative;
  padding: 30px 50px;
  animation: zoom 0.3s linear;

  @media (max-width: 767px) {
    padding: 30px 10px;
  }

  > .header {
    position: absolute;
    top: -50px;
    left: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-left: 170px;
    padding-right: 50px;
    color: #fff;
    font-weight: 600;
    font-size: 18px;

    @media (max-width: 767px) {
      padding: 0;
    }
  }

  > .single-container {
    display: flex;
    margin-bottom: 30px;

    @media (max-width: 767px) {
      flex-direction: column;
    }

    > img {
      border-radius: 8px;
      width: 100px;
      height: 100px;
      object-fit: cover;
      margin-right: 20px;
    }

    .single-info {
      display: flex;
      flex-direction: column;
      justify-content: center;

      > span {
        font-weight: 600;
        font-size: 18px;
        color: #ffffff;
      }

      > div:nth-of-type(2) {
        margin: 8px 0;
      }

      > .single-location {
        font-weight: 600;
        font-size: 14px;
        color: #ffffff;
      }
    }

    > .single-wraper {
      display: flex;
      flex: 1;
      justify-content: space-between;
      align-items: center;

      > .single-sales {
        font-weight: 600;
        font-size: 18px;
        color: #ffffff;
      }
    }
  }

  > hr {
    margin: 30px 0;
    border: 1px solid #3a69cf;
  }
`

export const Indications = styled.div`
  margin: 70px 0;

  > div {
    margin-top: 50px;
    padding: 40px 20px 30px;
    background: #0a152d;
    border-radius: 16px;
  }
`
