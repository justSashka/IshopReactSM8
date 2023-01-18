import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { decCartPrice, incCartPrice, removeItem } from '../../../../redux/slices/cartSlice/cartSlice'
import s from './ItemInCart.module.css'

export function ItemInCart(props) {
  const {
    pictures, discount, tags, price, stock, name, id, isChecked,
  } = props
  const [isItemChecked, setIsItemChecked] = useState(isChecked)
  const [itemCount, setItemCount] = useState(1)
  const [visible, setVisible] = useState(true)
  const removeElement = () => {
    setVisible((prev) => !prev)
  }
  const itemPrice = Math.round((price - ((price / 100) * discount)) * itemCount)
  const dispatch = useDispatch()
  function decCounter() {
    if (itemCount > 1) {
      setItemCount(itemCount - 1)
    }
  }
  function incCounter() {
    if (itemCount < stock) {
      setItemCount(itemCount + 1)
    }
  }
  function handleCheckboxClick() {
    if (isItemChecked === false) {
      dispatch(incCartPrice(itemPrice))
      setIsItemChecked(true)
    } else {
      dispatch(decCartPrice(itemPrice))
      setIsItemChecked(false)
    }
  }
  const handleDeleteClick = () => {
    dispatch(removeItem(id))
    removeElement()
  }

  return (!visible ? ''
    : (
      <div className={s.itemInCartContainer}>
        <div className={s.itemApproveCheckboxContainer}>
          <label className={s.checkboxLabel} htmlFor={`approveCheckbox${id}`}>
            <input className={s.itemApproveCheckbox} onChange={handleCheckboxClick} type="checkbox" name="approveitem" id={`approveCheckbox${id}`} checked={isItemChecked} />
            <img className={s.cartProductPicture} src={pictures} alt={name} />
            <div className={s.itemStatus}>{isItemChecked ? 'Selected' : ''}</div>
          </label>
        </div>

        <div className={s.cartProductInfo}>
          <div className={s.cartItemName}>{name}</div>
          <div className={s.cartItemTags}>
            {tags.map((tag) => <div className={s.cartItemTag}>{tag}</div>)}
          </div>
          <div className={s.cartItemPrice}>

            {' '}
            {discount === 0 ? '' : <del className={s.oldPrice}>{price * itemCount}</del> }

            {' '}
            {itemPrice}
            {' '}
            ₽
          </div>
          <div className={s.cartItemStock}>
            Product stock:
            {stock}
          </div>
          <div className={s.cartItemCounterContainer}>
            <button className={s.cartItemCounterIncButton} onClick={decCounter} type="button" disabled={isItemChecked}>-</button>
            <p className={s.itemCounterText}>{itemCount}</p>
            <button className={s.cartItemCounterDecButton} onClick={incCounter} type="button" disabled={isItemChecked}>+</button>
          </div>
          <button className={s.delItemButton} type="button" onClick={handleDeleteClick} disabled={isItemChecked}> Delete Item</button>

        </div>
      </div>
    )
  )
}
