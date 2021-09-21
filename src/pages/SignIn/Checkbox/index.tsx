import './styles.scss'

interface InputProps {
  id: string;
}

export function Checkbox({id, ...rest}: InputProps) {
  return (
    <div className="inputCheckbox">
      <label className=".inputLabel" htmlFor={id}>Show
        <input {...rest} id={id} type="checkbox" />
        <div className="indicator" />
      </label>
    </div>
  )
}