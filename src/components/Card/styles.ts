import styled from 'styled-components'

interface CardProps {
  linear: boolean
}

export const Container = styled.div<CardProps>`
  > div {
    width: 429px;
    height: 341px;
    background: ${({ linear }) =>
      linear
        ? 'linear-gradient(180deg, rgba(7, 51, 145, 0.5) 0%, rgba(10, 21, 45, 0.5) 100%);'
        : '#0a152d'};
    border-radius: 16px;
    padding: 25px 30px;
    overflow-y: auto;
  }
`
