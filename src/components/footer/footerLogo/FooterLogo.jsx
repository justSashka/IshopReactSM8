import footerLogo from '../../../images/dog-food.png'
import s from './FooterLogo.module.css'

export function FooterLogo() {
  return (
    <div className={s.footerLogoContainer}>
      <div className={s.footerLogo}>
        <img className={s.footerLogoImg} src={footerLogo} alt="Logo" />
        <span className={s.footerLogoText}>DogNaka</span>
      </div>

      <span className={s.copyright}> Sberunivercity. SM8 - 2022. Boitzev Alexandr</span>
    </div>
  )
}
