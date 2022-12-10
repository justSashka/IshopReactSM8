import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Api from '../../../Api'
import s from './RegistrationPage.module.css'

export function RegistrationPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  function handleSubmit(e) {
    e.preventDefault()
    console.log(email.target.value, password.target.value)
    Api.signUp(email.target.value, password.target.value).then(navigate('/login'))
  }
  return (
    <div className={s.registrationPageContainer}>
      <h1 className={s.title}>First time visiting our shop? Lets create account!</h1>
      <form className={s.registrationForm} action="POST">
        <input
          onChange={setEmail}
          className="emailInput"
          type="email"
          name="emailinput"
          id="regEmail"
          placeholder="Example@woofwoof.com"
          required
        />
        <input
          onChange={setPassword}
          className={s.passwordInput}
          type="password"
          name="passwordinput"
          id="regPass"
          placeholder="Such secret password"
          required
        />
        <button onClick={handleSubmit} className={s.submitButton} type="submit">
          Register me!
        </button>
      </form>
      <a href="/login" className={s.loginPageLink}>
        To login page!
      </a>
    </div>
  )
}
