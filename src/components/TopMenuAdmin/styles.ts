import styled from 'styled-components'

interface Props {
  width: number
  height: number
}

export const Container = styled.div<Props>`
  height: 46px;
  display: flex;
  border: 1px solid #37f0d3;
  border-radius: 8px;
  width: ${({ width }) => `${width.toString()}px`};
  margin: 0 auto;

  @media (max-width: 767px) {
    flex-direction: column;
    width: 270px;
    height: ${({ height }) => `${height.toString()}px`};
  }

  > div {
    width: 270px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-weight: 600;
    font-size: 18px;
    color: #37f0d3;

    @media (max-width: 767px) {
      height: 46px;
    }
  }

  .active {
    background: #37f0d3;
    color: #000;
    transition: all 0.3s linear;
  }
`
