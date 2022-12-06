import { FooterLogo } from './footerLogo/FooterLogo'
import { FooterMenu } from './footerMenu/FooterMenu'
import { FooterContacts } from './footerContacts/FooterContacts'
import s from './Footer.module.css'

export function Footer() {
  return (
    <div className={s.footerContainer}>
      <FooterLogo />
      <FooterMenu />
      <FooterContacts />
    </div>
  )
}
