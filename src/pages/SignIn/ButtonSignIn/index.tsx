import './styles.scss'

interface ButtonSignInProps {
  children: React.ReactNode;
  type: 'submit' | 'button' | 'reset';
}

export function ButtonSignIn({type, children}: ButtonSignInProps, {...rest}) {
  return (
    <button type={type} {...rest}>{children}</button>
  )
}