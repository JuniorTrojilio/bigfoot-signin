import bear from '../assets/bear.svg'
import './styles.scss'
import './styles.svg.scss'

export function SignIn() {
  return (
    <form>
      <div className="svgContainer">
        <div>
          <img src={bear} alt="" />
        </div>
      </div>
      <div className="input-group email">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" placeholder=" " required />
        <p>email @domain.com.br</p>
      </div>
      <div className="input-group">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" placeholder=" " required />
        <label id="showPasswordToggle" htmlFor="showPasswordToggle">Show
        <input id="showPasswordToggle" type ="checkbox" />
        <div className ="indicator"></div>
        </label>
      </div>
      <button type="submit" id="login">Log in</button>
    </form>
  )
}