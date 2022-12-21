import { Link } from 'react-router-dom'
import s from './FooterMenu.module.css'

export function FooterMenu() {
  return (
    <div className={s.footerMenuContainer}>
      <Link className={s.menuLink} to="catalogue">Catalogue</Link>

      <Link to="/discount" className={s.menuLink}>
        Discount
      </Link>
      <Link to="/news" className={s.menuLink}>
        News
      </Link>
      <Link to="/reviewes" className={s.menuLink}>
        Reviews
      </Link>
      <Link to="/payment" className={s.menuLink}>
        Payment
      </Link>
      <Link to="/faq" className={s.menuLink}>
        F.A.Q.
      </Link>
      <Link to="/feedback" className={s.menuLink}>
        Feedback
      </Link>
      <Link to="/contacts" className={s.menuLink}>
        Contacts
      </Link>
    </div>
  )
}
