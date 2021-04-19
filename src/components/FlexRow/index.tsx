import React from 'react'

import { Container } from './styles'

interface Props {
  className?: string
}

const Flex: React.FC<Props> = ({ children, className }) => {
  return <Container className={className}>{children}</Container>
}

export default Flex
