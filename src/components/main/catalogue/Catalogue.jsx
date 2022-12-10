import Api from '../../../Api'
import s from './Catalogue.module.css'
import { ProductCard } from './productCard/ProductCard'

export function Catalogue() {
  Api.getProducts()
  return (
    <div className={s.catalogueContainer}>
      <h1 className={s.searchInfo}>{'By order Order finds count products '}</h1>
      <div className={s.filtersContainer}>
        <div className={s.filterButton}>Popular</div>
        <div className={s.filterButton}>New</div>
        <div className={s.filterButton}>Cheap first</div>
        <div className={s.filterButton}>Expensive first</div>
        <div className={s.filterButton}>By rating</div>
        <div className={s.filterButton}>Discount</div>
      </div>
      <div className={s.productCardsContainer}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  )
}
