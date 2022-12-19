import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Api from '../../../Api'
import s from './RegistrationPage.module.css'

const signUpQuerryKey = ['SIGN_UP_QUERRY_KEY']

export function RegistrationPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const querryClient = useQueryClient()

  async function requestSignUp(e) {
    e.preventDefault()
    const response = await Api.signUp(email.target.value, password.target.value)
    if (response.status === 409) {
      throw new Error('This user already registred')
    }
    return response
  }

  const { mutateAsync, error } = useMutation({
    mutationFn: requestSignUp,
    onSuccess: () => {
      querryClient.invalidateQueries({ queryKey: signUpQuerryKey })
      navigate('/login')
    },
  })

  return (
    <div className={s.registrationPageContainer}>
      <h1 className={s.title}>{error ? error.message : 'First time visiting our shop? Lets create account!'}</h1>
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
        <button onClick={mutateAsync} className={s.submitButton} type="submit">
          Register me!
        </button>
      </form>
      <a href="/login" className={s.loginPageLink}>
        To login page!
      </a>
    </div>
  )
}
