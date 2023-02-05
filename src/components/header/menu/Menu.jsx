import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import favouriteIcon from '../../../images/Favor.svg'
import cartIcon from '../../../images/shopCart.svg'
import profileIcon from '../../../images/Contacts.svg'
import s from './Menu.module.css'

export function Menu() {
  const cartLength = useSelector((state) => state.cart.cart.length)
  const favouriteLength = useSelector((state) => state.favourites.favouritesIdArray.length)
  return (
    <div className={s.menuContainer}>
      <Link to="/favourite" className={s.favouriteButton}>
        <img className={s.favouriteIcon} src={favouriteIcon} alt="Favourites" srcSet="" />
        <div className={s.favouriteCounter}>{favouriteLength}</div>
      </Link>
      <Link to="/shopcart" className={s.shopcartButton}>
        <img src={cartIcon} alt="Shoping cart" srcSet="" />
        <div className={s.cartCounter}>{cartLength}</div>
      </Link>
      <Link to="/profile" className={s.profileButton}>
        <img src={profileIcon} alt="Profile" srcSet="" />
        <p className={s.iconTitle}>My profile</p>
      </Link>
    </div>
  )
}
