import { ReactComponent as Bigfoot } from '../../assets/bear.svg'
import { Checkbox } from './Checkbox'
import { Input } from './Input'
import './styles.scss'
import './styles.svg.scss'

export function SignIn() {
  return (
    <form>
      <div className="svgContainer">
        <div>
          <Bigfoot />
        </div>
      </div>
      <div className="input-group email">
        <Input label="Email" type="email" name="email" id="email" placeholder=" " required />
      </div>
      <div className="input-group">
        <Input label="Password" type="password" name="password" id="password" required />
        <Checkbox />
      </div>
      <button type="submit" id="login">Log in</button>
    </form>
  )
}