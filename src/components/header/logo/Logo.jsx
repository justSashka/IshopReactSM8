import { Link } from 'react-router-dom'
import logo from '../../../images/dog-food.png'
import s from './Logo.module.css'

export function Logo() {
  return (
    <Link className={s.logoLink} to="/catalogue">
      <div className={s.logoContainer}>

        <img className={s.logoImg} src={logo} alt="logo" srcSet="" />
        <h1 className={s.logoText}>DogNaka</h1>

      </div>
    </Link>
  )
}
