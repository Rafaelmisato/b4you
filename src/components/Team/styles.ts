import styled from 'styled-components'

export const Container = styled.div`
  .team-wraper {
    display: flex;

    @media (max-width: 767px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .user {
    border-right: 1px solid #fff;
    width: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;

    @media (max-width: 767px) {
      border: none;
      margin-bottom: 20px;
    }

    > img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  .team {
    display: flex;

    > img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      object-fit: cover;

      @media (max-width: 767px) {
        width: 50px;
        height: 50px;
      }
    }

    > img + img {
      margin-left: -30px;

      @media (max-width: 767px) {
        margin-left: -20px;
      }
    }
  }

  .menbers {
    background: #2e384f;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 16px;
    line-height: 10px;
    color: #ffffff;
    margin-left: -30px;

    @media (max-width: 767px) {
      width: 50px;
      height: 50px;
      margin-left: -20px;
    }
  }

  .names {
    margin-top: 30px;
    font-weight: 600;
    font-size: 16px;
    color: #ffffff;
  }
`
