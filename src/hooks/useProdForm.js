/* eslint-disable no-underscore-dangle */
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import * as Yup from 'yup'
import Api from '../Api'

const useNewProductForm = () => {
  const initialValues = {
    name: '',
    pictures: '',
    price: '',
    discount: '',
    stock: '',
    wight: '',
    description: '',
  }

  const validationSchema = Yup.object(
    {
      name: Yup.string()
        .min(4, 'Name should have more than 4 symbols')
        .max(30, 'Name <= 30 symbols')
        .required('Please set name'),
      pictures: Yup.string()
        .min(5, 'Link should have more than 5 symbols')
        .max(100, 'Link <= 100 symbols')
        .required('Required'),
      price: Yup.number()
        .min(1, 'Cant be < 1')
        .required('Price cant be empty'),
      discount: Yup.number()
        .min(0, 'Cant be < 0'),
      stock: Yup.number()
        .min(1, 'Stock cant be negative or null'),
      wight: Yup.string()
        .min(3, '3 or more symbols')
        .max(20, 'Should have <= 20 symbols'),
      description: Yup.string()
        .min(10, 'Brevity is the sister of talent. But not today. More than 10 symbols please.')
        .max(500, 'Max 500 symbols, its dog food, not rocket science')
        .required('Set product description'),
    },
  )

  const navigate = useNavigate()

  const successHandler = () => {
    navigate('/catalogue')
  }
  const errorHandler = (response) => {
    console.log(response.response.data.message)
  }
  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: (productData) => Api.createProduct(productData),
    onSuccess: successHandler,
    onError: errorHandler,
  })

  return {
    initialValues,
    validationSchema,
    mutate,
    isCreating,
  }
}
export default useNewProductForm
