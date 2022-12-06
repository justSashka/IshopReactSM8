import s from './FooterMenu.module.css'

export function FooterMenu() {
  return (
    <div className={s.footerMenuContainer}>
      <a href="/catalogue" className={s.menuLink}>
        Catalogue
      </a>
      <a href="/discount" className={s.menuLink}>
        Discount
      </a>
      <a href="/news" className={s.menuLink}>
        News
      </a>
      <a href="/reviewes" className={s.menuLink}>
        Reviews
      </a>
      <a href="/payment" className={s.menuLink}>
        Payment
      </a>
      <a href="/faq" className={s.menuLink}>
        F.A.Q.
      </a>
      <a href="/feedback" className={s.menuLink}>
        Feedback
      </a>
      <a href="/contacts" className={s.menuLink}>
        Contacts
      </a>
    </div>
  )
}
