/* eslint-disable react/destructuring-assignment */
import likePassive from '../../../../images/like(passive).png'
import s from './ProductCard.module.css'

export function ProductCard(props) {
  return (
    <div className={s.cardContainer}>
      <div className={s.productStatusBar}>
        <div className={s.tagsContainer}>
          {props.tags.map((tag) => <div key={tag} className={tag === 'new' ? s.newTag : s.otherTag}>{tag}</div>)}
        </div>
        <button className={s.likeButton} type="submit">
          <img src={likePassive} alt="" srcSet="" />
        </button>
      </div>
      <img className={s.productImage} src={props.pictures} alt="ProductImage" />
      <div className={s.name}>{props.name}</div>
      <div className={s.oldPriceContainer}>
        {props.discount === 0 ? '' : 'Old price:'}
        {' '}
        <span className={s.oldPrice}>
          {props.price === (props.price - ((props.price / 100) * props.discount)) ? ' ' : props.price }
        </span>
      </div>
      <div className={props.discount === 0 ? s.price : s.priceDiscount}>
        Price :
        {' '}
        {props.price - ((props.price / 100) * props.discount)}
        {' '}
        ₽
      </div>
      <div className={s.stock}>
        Stock:
        {props.stock}
      </div>

      <button className={s.inCartButton} type="submit">
        In cart
      </button>
    </div>
  )
}
