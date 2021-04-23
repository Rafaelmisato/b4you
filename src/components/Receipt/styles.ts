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
      cursor: pointer;
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

    @media (min-width: 768px) {
      .buttonAvailable {
        width: ${({ available }) => available && '100%'};
        display: ${({ antecipation }) => antecipation && 'none'};
        border: ${({ available }) => available && '1px solid #4ff08f'};
        flex-direction: ${({ available }) => available && 'row'};
        padding: ${({ available }) => available && '40px'};

        &:hover {
          border: 1px solid #4ff08f;
        }

        .buttonTitleReceipt {
          height: ${({ available }) => available && '100%'};
          align-items: ${({ available }) => available && 'center'};
          width: ${({ available }) => available && '50%'};
          border-right: ${({ available }) => available && '2px solid #fff'};

          > img {
            width: ${({ available }) => available && '70px'};
            height: ${({ available }) => available && '70px'};
          }
        }

        > .valuescontainer {
          height: ${({ available }) => available && '100%'};
        }
      }

      .buttonAntecipation {
        width: ${({ antecipation }) => antecipation && '100%'};
        display: ${({ available }) => available && 'none'};
        border: ${({ antecipation }) => antecipation && '1px solid #ffdc14'};
        flex-direction: ${({ antecipation }) => antecipation && 'row'};
        padding: ${({ antecipation }) => antecipation && '40px'};

        &:hover {
          border: 1px solid #ffdc14;
        }

        .buttonTitleReceipt {
          height: ${({ antecipation }) => antecipation && '100%'};
          align-items: ${({ antecipation }) => antecipation && 'center'};
          width: ${({ antecipation }) => antecipation && '50%'};
          border-right: ${({ antecipation }) =>
            antecipation && '2px solid #fff'};

          > img {
            width: ${({ antecipation }) => antecipation && '70px'};
            height: ${({ antecipation }) => antecipation && '70px'};
          }
        }

        > .valuescontainer {
          height: ${({ antecipation }) => antecipation && '100%'};
        }
      }
    }
    @media (max-width: 767px) {
      .buttonAvailable {
        display: ${({ antecipation }) => antecipation && 'none'};
        border: ${({ available }) => available && '1px solid #4ff08f'};
      }

      .buttonAntecipation {
        display: ${({ available }) => available && 'none'};
        border: ${({ antecipation }) => antecipation && '1px solid #ffdc14'};
      }
    }
  }

  > .infodata {
    width: 100%;
    height: 95px;
    padding: 0 45px;
    display: flex;
    align-items: center;
    background: #0a152d;
    border-radius: 16px;
    margin-bottom: 20px;

    &:nth-of-type(6) {
      background: #37f0d3;

      > span {
        color: #0a152d;
      }
    }

    > span {
      font-weight: 600;
      font-size: 18px;
      color: #ffffff;
    }

    > span:nth-of-type(1) {
      margin-right: 20px;
    }

    > .infoClick {
      cursor: pointer;
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

  .accounts {
    h3 {
      font-weight: 600;
      font-size: 24px;
      color: #ffffff;
      margin-bottom: 30px;
    }

    .account-form-button {
      margin-top: 10px;
      width: 336px;
      height: 56px;
      background: #37f0d3;
      border-radius: 8px;
      border: none;
      outline: none;
      cursor: pointer;

      @media (max-width: 434px) {
        width: 290px;
      }

      > span {
        display: flex;
        align-items: center;
        justify-content: center;

        > img {
          margin-left: 10px;
        }
      }
    }
  }
`
