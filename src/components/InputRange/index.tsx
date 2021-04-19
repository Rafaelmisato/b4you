import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback
} from 'react'
import { useField } from '@unform/core'

import { Container, Header, Content } from './styles'
import { title } from 'process'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  width?: number
  onMouseUp?: () => void
}

const InputRange: React.FC<InputProps> = ({
  name,
  title,
  max,
  ...rest
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const { fieldName, registerField, defaultValue } = useField(name)

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)

    setIsFilled(!!inputRef.current?.value)

    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <Container isFilled={isFilled} isFocused={isFocused}>
      <Header>
        <span>{title}</span>
      </Header>
      <Content>
        <input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
          ref={inputRef}
          type="range"
          min="0"
          max="100"
          {...rest}
        />
      </Content>
    </Container>
  )
}

export default InputRange
