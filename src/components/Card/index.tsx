import { Container } from './styles'

interface CardProps {
  title?: string
  linear?: boolean
  fullWidth?: boolean
  className?: string
}

/**
 *
 * @param param0
 * need to pass the params:
 * - title?: if the card have a title outside
 * - linear?: if the card background is linear gradient
 * - fullWidth?: if card width is 100% (default is 50%)
 */

const Card: React.FC<CardProps> = ({
  title,
  linear,
  fullWidth,
  children,
  className
}) => {
  return (
    <Container linear={linear} fullWidth={fullWidth}>
      {title && <h2>{title}</h2>}
      <div className={className}>{children}</div>
    </Container>
  )
}

export default Card
