import styled from 'styled-components'

export const Container = styled.div`
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
      margin-bottom: 20px;

      @media (max-width: 767px) {
        flex-direction: column;
        align-items: center;
      }

      .header-img {
        width: 100px;
        height: 100px;
      }

      .header-text {
        padding: 15px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 10px;
        width: 100%;

        @media (max-width: 767px) {
          height: 100px;
          align-items: center;
        }
      }
    }

    .buttons {
      width: 200px;
      display: flex;
      justify-content: space-between;
      margin-top: 35px;
    }
  }
`
