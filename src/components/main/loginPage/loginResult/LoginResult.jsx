import { Link } from 'react-router-dom'
import s from './LoginResult.module.css'

export function LoginResult() {
  return (
    <div className={s.loginResultContainer}>
      <h1 className={s.loginMessage}>The dog wags its tail, she not recognized you!</h1>
      <Link to="/register" className={s.succesLoginLink}>Want to register!</Link>
      <Link to="/login" className={s.succesLoginLink}>Have account!</Link>
    </div>
  )
}
