import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Api from '../../../Api'
import s from './LoginPage.module.css'

export function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  function handleSubmit(e) {
    e.preventDefault()
    Api.signIn(email.target.value, password.target.value).finally(() => navigate('/catalogue'))
  }
  return (
    <div className={s.loginPageContainer}>
      <h1 className={s.title}>Enter your e-mail and secret password!</h1>
      <form className={s.loginForm} action="POST">
        <input
          onChange={setEmail}
          className="emailInput"
          type="email"
          name="loginemailinput"
          id="loginEmail"
          placeholder="Example@woofwoof.com"
          required
        />
        <input
          onChange={setPassword}
          className={s.passwordInput}
          type="password"
          name="loginpasswordinput"
          id="loginPass"
          placeholder="Such secret password"
          required
        />
        <button onClick={handleSubmit} className={s.submitButton} type="submit">
          Let`s go in!
        </button>
      </form>
      <a href="/register" className={s.loginPageLink}>
        Dont have account?
      </a>
    </div>
  )
}
