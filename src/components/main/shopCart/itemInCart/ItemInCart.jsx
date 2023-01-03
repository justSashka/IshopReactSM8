import s from './ItemInCart.module.css'

export function ItemInCart(props) {
  const {
    pictures, discount, tags, price, stock, name,
  } = props
  return (
    <div className={s.itemInCartContainer}>
      <img className={s.cartProductPicture} src={pictures} alt={name} />
      <div className={s.cartProductInfo}>{` ${discount}, ${tags}, ${price}, ${stock}, ${name}`}</div>
    </div>
  )
}
