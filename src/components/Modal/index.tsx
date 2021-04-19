import { Container } from './styles'

interface ModalProps {
  onClose: () => void
  title: string
  zoom?: number
  rotate?: number
}

/**
 *
 * @param param0
 * onClose: state to close modal
 * title: modal title
 * zoom?: number
 * rotate?: number
 */

const Modal: React.FC<ModalProps> = ({
  children,
  onClose,
  title,
  zoom,
  rotate
}) => {
  return (
    <Container zoom={zoom} rotate={rotate}>
      <div className="modal">
        <button className="close" onClick={onClose}>
          <img src="/closebutton.svg" />
        </button>
        <h3>{title}</h3>
        {children}
      </div>
    </Container>
  )
}

export default Modal
