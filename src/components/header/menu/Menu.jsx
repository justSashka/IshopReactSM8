import favouriteIcon from '../../../images/Favor.svg'
import cartIcon from '../../../images/shopCart.svg'
import profileIcon from '../../../images/Contacts.svg'
import s from './Menu.module.css'

export function Menu() {
  return (
    <div className={s.menuContainer}>
      <a href="/favourite" className={s.favouriteButton}>
        <img className={s.favouriteIcon} src={favouriteIcon} alt="" srcSet="" />
        <div className={s.favouriteCounter}>0</div>
      </a>
      <a href="/shopcart" className={s.shopcartButton}>
        <img src={cartIcon} alt="" srcSet="" />
        <div className={s.cartCounter}>0</div>
      </a>
      <a href="/profile" className={s.profileButton}>
        <img src={profileIcon} alt="" srcSet="" />
      </a>
    </div>
  )
}
