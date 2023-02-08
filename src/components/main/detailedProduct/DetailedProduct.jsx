/* eslint-disable no-underscore-dangle */
import { useQuery } from '@tanstack/react-query'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Api from '../../../Api'
import { addItem } from '../../../redux/slices/cartSlice/cartSlice'
import { addFavoritesId } from '../../../redux/slices/favouritesSlice/favouritesSlice'
import likeActive from '../../../images/like(active).png'
import likePassive from '../../../images/like(passive).png'
import s from './DetailedProduct.module.css'

const detailedProductQueryKey = ['DETAILED_PRODUCT_QUERY_KEY']

export function DetailedProduct() {
  const params = useParams()
  const productId = params.id
  const cart = useSelector((state) => state.cart.cart)
  const dispatch = useDispatch()
  const favouriteArray = useSelector((state) => state.favourites.favouritesIdArray)

  const getProductById = async () => {
    const response = await Api.getProductById(productId)
    const responseData = await response.json()
    return responseData
  }

  const { data: product, isLoading } = useQuery(
    {
      queryKey: detailedProductQueryKey,
      queryFn: getProductById,
    },
  )
  const addProductHandler = () => dispatch(addItem(product))
  const favouritesHandler = () => dispatch(addFavoritesId(product._id))
  return (
    isLoading ? 'loading'
      : (
        <div className={s.detailedProductContainer}>
          <div className={s.detailedProductName}>{product.name}</div>
          <img src={product.pictures} alt={`${product.name} product`} />
          <div className={s.detailedProductDescription}>
            <div className={s.detailedProductAvailable}>
              {`Available: ${product.available ? 'available' : 'out of stock'}`}
            </div>
            <div className={s.detailedProductStock}>
              {`Stock: ${product.stock}`}
            </div>
            <div className={s.detailedProductPrice}>
              {`Product Price: ${product.price - ((product.price / 100) * product.discount)}`}
            </div>
            <div className={s.detailedProductDiscount}>
              {product.discount === 0 ? 'No Discount' : `Discount:${product.discount}%`}
            </div>
            <div className={s.detailedProductButtonsContainer}>
              {JSON.stringify(cart).includes(JSON.stringify(product)) ? 'Already in cart' : <button onClick={addProductHandler} className={s.inCartButton} type="button">In cart!</button>}
              <button className={s.likeButton} type="button" onClick={favouritesHandler}>
                {favouriteArray.includes(product._id) ? <img src={likeActive} alt="liked" srcSet="" /> : <img src={likePassive} alt="unliked" srcSet="" />}
              </button>
            </div>

          </div>
        </div>
      )
  )
}
