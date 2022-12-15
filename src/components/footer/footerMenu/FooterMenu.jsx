import { Link } from 'react-router-dom'
import s from './FooterMenu.module.css'

export function FooterMenu() {
  return (
    <div className={s.footerMenuContainer}>
      <Link className={s.menuLink} to="catalogue">Catalogue</Link>

      <Link href="/discount" className={s.menuLink}>
        Discount
      </Link>
      <Link href="/news" className={s.menuLink}>
        News
      </Link>
      <Link href="/reviewes" className={s.menuLink}>
        Reviews
      </Link>
      <Link href="/payment" className={s.menuLink}>
        Payment
      </Link>
      <Link href="/faq" className={s.menuLink}>
        F.A.Q.
      </Link>
      <Link href="/feedback" className={s.menuLink}>
        Feedback
      </Link>
      <Link href="/contacts" className={s.menuLink}>
        Contacts
      </Link>
    </div>
  )
}
