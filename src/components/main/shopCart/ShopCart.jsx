/* eslint-disable no-underscore-dangle */
import { useQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import Api from '../../../Api'
import { EmptyCart } from './emptyCart/EmptyCart'
import { ItemInCart } from './itemInCart/ItemInCart'
import s from './ShopCart.module.css'

export const ShopCartQueryKey = ['SHOP_CART_QUERY_KEY']

export function ShopCart() {
  const cart = useSelector((state) => state.cart.cart)
  const cartPrice = useSelector((state) => state.cart.cartPrice)

  const getProductById = async (productId) => {
    const response = await Api.getProductById(productId)
    const responseData = await response.json()
    return responseData
  }

  async function combineProductPromises(arr) {
    const result = await Promise.all(arr)
    return result
  }
  async function cartItemsArray() {
    const getProductPromiseArray = []
    cart.forEach((product) => {
      getProductPromiseArray.push(getProductById(product._id))
    })
    const result = await combineProductPromises(getProductPromiseArray)
    return result
  }

  const { data: items, isLoading } = useQuery(
    {
      queryKey: ShopCartQueryKey,
      queryFn: cartItemsArray,
    },
  )
  return (isLoading ? 'loading'
    : (
      <div className={s.shopCartContainer}>
        <div className={s.cartItemsContainer}>
          {cart.length === 0 ? <EmptyCart /> : items.map((item) => (
            <ItemInCart
              key={item._id}
              id={item._id}
              discount={item.discount}
              tags={item.tags}
              price={item.price}
              stock={item.stock}
              name={item.name}
              pictures={item.pictures}
              counter="1"
            />
          ))}
        </div>
        {cart.length === 0 ? '' : (
          <div className={s.cartInfoContainer}>
            <div className={s.cartPrice}>{`Total price: ${cartPrice}`}</div>
            <p className={s.cartPriceInfoText}>
              Select the products you want to buy
              and click on the button below
            </p>
            <a className={s.cartBuyLink} href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Make a purchase</a>
          </div>
        ) }

      </div>
    )
  )
}
