/* eslint-disable react/destructuring-assignment */
import s from './ProductCard.module.css'

export function ProductCard(props) {
  return (
    <div className={s.cardContainer}>
      <div className={s.productStatusBar}>
        <div className={s.tagsContainer}>
          {props.tags.map((tag) => <div key={tag} className={tag === 'new' ? s.newTag : s.otherTag}>{tag}</div>)}
        </div>
        <button className={s.likeButton} type="submit">
          Like
        </button>
      </div>
      <img className={s.productImage} src={props.pictures} alt="ProductImage" />
      <div className={s.oldPrice}>{props.price === (props.price - ((props.price / 100) * props.discount)) ? ' ' : props.price }</div>
      <div className={s.price}>
        Price :
        {' '}
        {props.price - ((props.price / 100) * props.discount)}
      </div>
      <div className={s.stock}>
        Stock:
        {props.stock}
      </div>
      <div className={s.name}>{props.name}</div>
      <button className={s.inCartButton} type="submit">
        In cart
      </button>
    </div>
  )
}
