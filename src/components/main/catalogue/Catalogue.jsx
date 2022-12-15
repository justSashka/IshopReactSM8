import { useState, useEffect } from 'react'
import Api from '../../../Api'
import s from './Catalogue.module.css'
import { ProductCard } from './productCard/ProductCard'

export function Catalogue() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsloading] = useState(true)
  useEffect(() => {
    Api.getProducts().then((product) => {
      console.log(product)
      setProducts(product)
      setIsloading(false)
    })
  }, [])

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
        {isLoading ? <div>Loading</div> : products.map((product) => (
          <ProductCard
            // eslint-disable-next-line dot-notation, no-underscore-dangle
            key={product._id}
            discount={product.discount}
            tags={product.tags}
            price={product.price}
            stock={product.stock}
            name={product.name}
            pictures={product.pictures}

          />
        ))}
      </div>
    </div>
  )
}
