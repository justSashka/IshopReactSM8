/* eslint-disable no-underscore-dangle */
import { useQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import Api from '../../../Api'
import { ProductCard } from '../catalogue/productCard/ProductCard'
import s from './Favourites.module.css'

const itemQueryKey = ['ITEM_QUERY_KEY']
export function Favorites() {
  const productIDs = useSelector((store) => store.favourites.favouritesIdArray)

  const getProductById = async (productId) => {
    const response = await Api.getProductById(productId)
    const responseData = await response.json()
    return responseData
  }
  async function combineProductPromises(arr) {
    const result = await Promise.all(arr)
    return result
  }
  async function favouriteItemsArray() {
    const getFavouritePromiseArray = []
    productIDs.forEach((productId) => {
      getFavouritePromiseArray.push(getProductById(productId))
    })
    const result = await combineProductPromises(getFavouritePromiseArray)
    return result
  }

  const { data, isLoading } = useQuery({
    queryKey: itemQueryKey.concat(productIDs),
    queryFn: favouriteItemsArray,
  })
  if (isLoading) {
    return (
      <div>loading</div>
    )
  }
  if (!data.length) {
    return (
      <div className={s.favouritesContainer}>
        empty favourites
      </div>
    )
  }
  return (
    <div className={s.favouritesContainer}>
      {data.map((product) => (
        <ProductCard
            // eslint-disable-next-line dot-notation
          key={product._id}
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
  )
}
