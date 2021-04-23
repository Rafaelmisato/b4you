import React, { InputHTMLAttributes, useEffect, useRef, useState } from 'react'
import { useField } from '@unform/core'
import { Container } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

/**
 *
 * @param param0
 * needs to pass the params
 * - name: string, input name
 */

const Input: React.FC<InputProps> = ({ onChange, name, width, ...rest }) => {
  const inputRef = useRef(null)
  const { fieldName, defaultValue, registerField } = useField(name)

  const [checked, setChecked] = useState(false)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [registerField, fieldName])

  const handleChange = () => {
    setChecked(!checked)
  }

  return (
    <Container checked={checked}>
      <input
        type="checkbox"
        name={name}
        ref={inputRef}
        onChange={handleChange}
        defaultValue={defaultValue}
        value={checked}
        {...rest}
      />
      <div>
        <div />
      </div>
      <span>{checked ? 'Ativado' : 'Desativado'}</span>
    </Container>
  )
}

export default Input
