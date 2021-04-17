import React, { InputHTMLAttributes, useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import { Container } from './styles'

import { mask as masker, unMask } from 'remask'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  mask: string[]
  text: string
  width?: number
}

/**
 *
 * @param param0
 * needs to pass the params
 * - name: string, input name
 * - mask: if input have mask pass 9 for number A for letter and S for letter or number
 * - text: is the name thats appear on top of input
 * - width?: width size (%)
 */

const Input: React.FC<InputProps> = ({
  mask,
  onChange,
  name,
  text,
  width,
  ...rest
}) => {
  const inputRef = useRef(null)
  const { fieldName, defaultValue, error, registerField } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [registerField, fieldName])

  const handleChange = e => {
    const originalValue = unMask(e.target.value)
    const maskedValue = masker(originalValue, mask)
    onChange(maskedValue)
  }

  return (
    <Container width={width} error={error}>
      <span>{text}</span>
      <input
        width={width}
        name={name}
        defaultValue={defaultValue}
        ref={inputRef}
        onChange={handleChange}
        {...rest}
      />
      <p>{error}</p>
    </Container>
  )
}

export default Input
