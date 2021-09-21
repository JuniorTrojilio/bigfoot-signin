import { Checkbox } from './Checkbox'
import { Input } from './Input'
import {ButtonSignIn} from './ButtonSignIn'
import {SvgContainer} from './SvgContainer'
import './styles.scss'

export function SignIn() {
  return (
    <form>
      <SvgContainer />
      <Input label="Email" type="email" name="email" id="email" placeholder=" " required />
      <Checkbox id="showPasswordToggle"/>
      <Input label="Password" type="password" name="password" id="password" required />
      <ButtonSignIn type="submit">Login</ButtonSignIn>
    </form>
  )
}