import { Container } from './styles'

interface ModalProps {
  onClose: () => void
  title: string
}

/**
 *
 * @param param0
 * onClose: state to close modal
 * title: modal title
 */

const Modal: React.FC<ModalProps> = ({ children, onClose, title }) => {
  return (
    <Container>
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
