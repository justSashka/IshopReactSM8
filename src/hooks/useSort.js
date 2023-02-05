import { sortPriceByDiscount, sortPriceMaxToMin, sortPriceMinToMax } from '../redux/slices/sortSlice/sortKeys'

export const useSort = (products, sortingValue) => {
  const sortByPrice = (firstProd, secondProd) => {
    const firstPrice = firstProd.price - ((firstProd.price / 100) * firstProd.discount)
    const secondPrice = secondProd.price - ((secondProd.price / 100) * secondProd.discount)
    return firstPrice - secondPrice
  }
  switch (sortingValue) {
    case sortPriceMaxToMin:
      products.sort((a, b) => sortByPrice(a, b))
      break
    case sortPriceMinToMax:
      products.sort((a, b) => -sortByPrice(a, b))
      break
    case sortPriceByDiscount:
      products.sort((a, b) => b.discount - a.discount)
      break
    default:
      break
  }
  return products
}
