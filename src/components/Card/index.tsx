import { Container } from './styles'

interface CardProps {
  title?: string
  linear?: boolean
}

/**
 *
 * @param param0
 * need to pass the params:
 * - title?: if the card have a title outside
 * - linear?: if the card background is linear gradient
 */

const Card: React.FC<CardProps> = ({ title, linear, children }) => {
  return (
    <Container linear={linear}>
      {title && <h2>{title}</h2>}
      <div>{children}</div>
    </Container>
  )
}

export default Card
