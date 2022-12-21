import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Api from '../../../Api'
import s from './LoginPage.module.css'

const logInQuerryKey = ['LOG_IN_QUERRY_KEY']

export function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const querryClient = useQueryClient()

  async function requestSignIn(e) {
    e.preventDefault()
    const response = await Api.signIn(email.target.value, password.target.value)
    const responseData = await response.json()
    if (response.status === 200) {
      window.localStorage.setItem('token', responseData.token)
    } else {
      throw new Error('Wrong login or password! Bark!')
    }
  }

  const { mutateAsync, error } = useMutation({
    mutationFn: requestSignIn,
    onSuccess: () => {
      querryClient.invalidateQueries({ queryKey: logInQuerryKey })
      navigate('/catalogue')
    },
  })

  return (
    <div className={s.loginPageContainer}>
      <h1 className={s.title}>{error ? error.message : 'Enter your e-mail and secret password!'}</h1>
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
        <button onClick={mutateAsync} className={s.submitButton} type="button">
          Let`s go in!
        </button>
      </form>
      <a href="/register" className={s.loginPageLink}>
        Dont have account?
      </a>
    </div>
  )
}
