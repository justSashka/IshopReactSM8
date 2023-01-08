import { Link } from 'react-router-dom'
import emptyCartImg from '../../../../images/emptycartimg.png'
import s from './EmptyCart.module.css'

export function EmptyCart() {
  return (
    <div className={s.emptyCartContainer}>
      <img className={s.emptyCartImg} src={emptyCartImg} alt="Your shoping cart is empty!" />
      <h1 className={s.emptyCartText}>Our expert found your shopping cart empty</h1>
      <p className={s.emptyCartSubtext}>Go to catalog and add some snaks...</p>
      <Link className={s.emptyCardLink} to="/catalogue">Go to catalogue</Link>
    </div>
  )
}
