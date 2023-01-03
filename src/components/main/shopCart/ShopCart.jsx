import { useQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import Api from '../../../Api'
import { ItemInCart } from './itemInCart/ItemInCart'
import s from './ShopCart.module.css'

const ShopCartQueryKey = ['SHOP_CART_QUERY_KEY']

export function ShopCart() {
  const cart = useSelector((state) => state.cart.cart)
  const getProductById = async (productId) => {
    const response = await Api.getProductById(productId)
    const responseData = await response.json()
    return responseData
  }

  const getProductPromiseArray = []
  cart.forEach((product) => {
    getProductPromiseArray.push(getProductById(product))
  })
  async function combineProductPromises(arr) {
    const result = await Promise.all(arr)
    return result
  }
  async function cartItemsArray() {
    const result = await combineProductPromises(getProductPromiseArray)
    return result
  }
  const { data: items, isLoading } = useQuery(
    {
      queryKey: ShopCartQueryKey,
      queryFn: cartItemsArray,
    },
  )

  return (
    <div className={s.shopCartContainer}>
      {items.length === 0 ? 'cart is empty' : ''}
      {isLoading ? 'loading' : items.map((item) => (
        <ItemInCart
        // eslint-disable-next-line no-underscore-dangle
          key={item._id}
          discount={item.discount}
          tags={item.tags}
          price={item.price}
          stock={item.stock}
          name={item.name}
          pictures={item.pictures}
        />

      ))}

    </div>
  )
}
