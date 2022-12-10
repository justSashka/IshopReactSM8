import s from './ProductCard.module.css'

export function ProductCard() {
  return (
    <div className={s.cardContainer}>
      <div className={s.productStatusBar}>
        <div className={s.tagsContainer}>Tags</div>
        <button className={s.likeButton} type="submit">
          Like
        </button>
      </div>
      <img className={s.productImage} src="" alt="ProductImage" />
      <div className={s.oldPrice}>oldPrice</div>
      <div className={s.price}>Price</div>
      <div className={s.stock}>stock</div>
      <div className={s.name}>name</div>
      <button className={s.inCartButton} type="submit">
        In cart
      </button>
    </div>
  )
}
