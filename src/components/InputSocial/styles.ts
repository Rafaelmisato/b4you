import styled from 'styled-components'

interface InputProps {
  width: number
  error: boolean | string
}

export const Container = styled.div<InputProps>`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  > span {
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: ${({ error }) => (error ? 'red' : '#fff')};
    display: flex;
    align-items: center;
    background: #2e384f;
    border-radius: 8px 0px 0px 8px;
    width: 230px;
    height: 47px;

    @media (max-width: 767px) {
      font-size: 0;
      width: 40px;
    }

    img {
      margin: 0 10px;
    }
  }

  > input {
    width: 100%;
    font-size: 14px;
    line-height: 21px;
    background: transparent;
    outline: none;
    padding: 8px 12px;
    color: #fff;
    height: 47px;
    border: 1px solid #2e384f;
    border-radius: 0px 8px 8px 0px;

    &::-webkit-input-placeholder {
      font-weight: 600;
      font-size: 14px;
      line-height: 21px;
      color: #2e384f;
    }

    &:-moz-placeholder {
      /* Firefox 18- */
      font-weight: 600;
      font-size: 14px;
      line-height: 21px;
      color: #2e384f;
    }

    &::-moz-placeholder {
      /* Firefox 19+ */
      font-weight: 600;
      font-size: 14px;
      line-height: 21px;
      color: #2e384f;
    }

    &:-ms-input-placeholder {
      font-weight: 600;
      font-size: 14px;
      line-height: 21px;
      color: #2e384f;
    }
  }

  > p {
    color: red;
    position: absolute;
    bottom: -4px;
    left: 10px;
    font-size: 10px;
  }
`
