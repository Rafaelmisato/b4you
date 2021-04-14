import { useState, useEffect } from 'react'

import { Container } from './styles'

import { CopyToClipboard } from 'react-copy-to-clipboard'

interface InputProps {
  value: string
}

const inputQr: React.FC<InputProps> = ({ value }) => {
  const [inputValue, setInputValue] = useState(value)
  const [buttonClicked, setButtonClicked] = useState(false)

  useEffect(() => {
    setInputValue(value)
  }, [])

  return (
    <Container>
      <input value={inputValue} readOnly />
      <CopyToClipboard text={inputValue}>
        <button>copy</button>
      </CopyToClipboard>

      <button>QR</button>

      <CopyToClipboard text={inputValue}>
        <span>Clique para copiar</span>
      </CopyToClipboard>
    </Container>
  )
}

export default inputQr
