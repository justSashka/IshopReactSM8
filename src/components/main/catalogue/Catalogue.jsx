/* eslint-disable no-underscore-dangle */
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Api from '../../../Api'
import { sortPriceMaxToMin, sortPriceMinToMax } from '../../../redux/slices/sortSlice/sortKeys'
import { setSortValue } from '../../../redux/slices/sortSlice/sortSlice'

import s from './Catalogue.module.css'
import { ProductCard } from './productCard/ProductCard'

const catalogueQueryKey = ['CATALOGUE_QUERY_KEY']

export function Catalogue() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const token = useSelector((state) => state.user.token)
  const searchValue = useSelector((state) => state.search.searchValue)
  const searchArray = useSelector((state) => state.search.searchArray)

  const getProductArr = async () => {
    const response = await Api.getProducts()
    const responseData = await response.json()
    return responseData.products
  }

  const { data: products, isLoading } = useQuery(
    {
      queryKey: catalogueQueryKey,
      queryFn: getProductArr,
    },
  )
  useEffect(() => {
    if (token === null) {
      navigate('/login')
    }
  }, [])
  const changeSortHandler = (value) => {
    dispatch(setSortValue(value))
  }
  return (

    <div className={s.catalogueContainer}>
      {searchValue === '' ? '' : (
        <div className={s.filtredProductContainer}>
          <h1 className={s.searchInfo}>
            By order
            {' '}
            <span className={s.filterAccent}>
              {' '}
              {searchValue}
              {' '}
            </span>
            {' '}
            finds:
          </h1>
          <div className={s.filtredProductContainer}>
            {searchArray.map((product) => (
              <ProductCard
            // eslint-disable-next-line dot-notation, no-underscore-dangle
                key={product._id}
            // eslint-disable-next-line no-underscore-dangle
                productId={product._id}
                discount={product.discount}
                tags={product.tags}
                price={product.price}
                stock={product.stock}
                name={product.name}
                pictures={product.pictures}
                productObj={product}
              />
            ))}
          </div>
        </div>
      )}
      <div className={s.filtersContainer}>
        <button className={s.filterButton} type="button" onClick={() => changeSortHandler(sortPriceMinToMax)}>Cheap first</button>
        <button className={s.filterButton} type="button" onClick={() => changeSortHandler(sortPriceMaxToMin)}>Expensive first</button>
        <div className={s.filterButton}>Discount</div>
      </div>
      <div className={s.createProductLinkContainer}>
        <Link className={s.createProductLink} to="/createProduct">Create product</Link>
      </div>
      <div className={s.productCardsContainer}>

        {isLoading ? <div>Loading</div> : products.map((product) => (
          <ProductCard
            // eslint-disable-next-line dot-notation, no-underscore-dangle
            key={product._id}
            // eslint-disable-next-line no-underscore-dangle
            productId={product._id}
            discount={product.discount}
            tags={product.tags}
            price={product.price}
            stock={product.stock}
            name={product.name}
            pictures={product.pictures}
            productObj={product}

          />
        ))}
      </div>
    </div>
  )
}
