import { InputHTMLAttributes } from 'react'
import './styles.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export function Input({label, ...rest }: InputProps) {
  return (
    <div className="inputGroup">
      <label htmlFor={rest.id} >{label}</label>
      <input 
        type={rest.type} 
        name={rest.name} 
        id={rest.id} 
        placeholder={rest.placeholder} 
        required />
      {rest.type !== "password" && (<p>email@domain.com.br</p>)}
    </div>
  )
}