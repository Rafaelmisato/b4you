import styled from 'styled-components'

interface CardProps {
  linear: boolean
  fullWidth: boolean
}

export const Container = styled.div<CardProps>`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : '49%')};

  @media (max-width: 767px) {
    width: 100%;
  }

  > div {
    height: 341px;
    background: ${({ linear }) =>
      linear
        ? 'linear-gradient(180deg, rgba(7, 51, 145, 0.5) 0%, rgba(10, 21, 45, 0.5) 100%);'
        : '#0a152d'};
    border-radius: 16px;
    padding: 25px 30px;
    overflow-y: auto;
    overflow-x: hidden;
  }
`
