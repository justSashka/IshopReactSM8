import emailLogo from '../../../images/email.png'
import instaLogo from '../../../images/instagram.png'
import teleLogo from '../../../images/telegram.png'
import twitterLogo from '../../../images/twitter.png'
import s from './FooterContacts.module.css'

export function FooterContacts() {
  return (
    <div className={s.footerContactsContainer}>
      <span className={s.contactsText}>Contacts:</span>
      <a className={s.contactsTel} href="tel:+8123456789">
        8 (123) 45-67-89
      </a>
      <span className={s.contactsMail}>NakormimVashu@gmail.com</span>
      <div className={s.contactIconsContainer}>
        <a href="NakormimVashu@gmail.com" className={s.contactLink}>
          <img src={emailLogo} alt="Send email" className={s.emailIcon} />
        </a>
        <a href="https://rkn.gov.ru/" className={s.contactLink}>
          <img src={instaLogo} alt="Instagram" className={s.instaIcon} />
        </a>
        <a href="https://web.telegram.org/k/" className={s.contactLink}>
          <img src={teleLogo} alt="Telegram" className={s.teleIcon} />
        </a>
        <a href="https://rkn.gov.ru/" className={s.contactLink}>
          <img src={twitterLogo} alt="Twitter" className={s.twitterIcon} />
        </a>
      </div>
    </div>
  )
}
