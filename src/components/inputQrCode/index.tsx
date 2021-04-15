import { useState, useEffect } from 'react'

import { Container, QRCodeContainer } from './styles'

import { CopyToClipboard } from 'react-copy-to-clipboard'
import QRCode from 'qrcode'

interface InputProps {
  value: string
}

/**
 *
 * @param param0
 * need to pass param
 * - value: url
 */

const inputQr: React.FC<InputProps> = ({ value }) => {
  const [inputValue, setInputValue] = useState(value)
  const [buttonCopy, setButtonCopy] = useState(false)
  const [buttonQr, setButtonQr] = useState(false)
  const [QRCodeGenerated, setQRCodeGenerated] = useState(null)

  useEffect(() => {
    setInputValue(value)
  }, [])

  useEffect(() => {
    if (buttonCopy === true) {
      setTimeout(function () {
        setButtonCopy(false)
      }, 3000)
    }
  }, [buttonCopy])

  useEffect(() => {
    if (buttonQr === true) {
      setTimeout(function () {
        setButtonQr(false)
      }, 3000)
    }
  }, [buttonQr])

  const generateQrCode = async () => {
    try {
      const response = await QRCode.toDataURL(inputValue)
      setQRCodeGenerated(response)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <Container buttonCopy={buttonCopy} buttonQr={buttonQr}>
        <input value={inputValue} readOnly />
        <CopyToClipboard text={inputValue}>
          <button onClick={() => setButtonCopy(true)}>
            <img src="/buttons/copy.svg" alt="copiar" />
          </button>
        </CopyToClipboard>

        <button
          onClick={() => {
            generateQrCode()
            setButtonQr(true)
          }}
        >
          <img src="/buttons/qrcode.svg" alt="copiar" />
        </button>

        <CopyToClipboard text={inputValue}>
          <>
            {!buttonCopy ? (
              <span onClick={() => setButtonCopy(true)}>
                Clique para copiar
              </span>
            ) : (
              <span onClick={() => setButtonCopy(true)}>
                copiado <img src="/buttons/check.svg" alt="copiado" />
              </span>
            )}
          </>
        </CopyToClipboard>
      </Container>

      {QRCodeGenerated && (
        <QRCodeContainer buttonCopy={buttonCopy} buttonQr={buttonQr}>
          <button onClick={() => setQRCodeGenerated(null)}>x</button>
          <img src={QRCodeGenerated} alt="QR code" />
          <span>Leia o qrcode com a câmera do celular</span>
        </QRCodeContainer>
      )}
    </>
  )
}

export default inputQr
