import {
  ErrorMessage, Field, Form, Formik,
} from 'formik'
import useNewProductForm from '../../../hooks/useProdForm'
import s from './CreateProduct.module.css'

export function CreateProduct() {
  const {
    initialValues,
    validationSchema,
    isCreating,
    mutate,
  } = useNewProductForm()

  return (
    <div className={s.createProductFormContainer}>
      <h1>Describe your product:</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          mutate(values)
        }}
      >
        <Form className={s.createProductForm}>
          <div className={s.createProductFieldContainer}>
            <Field className={s.createProductFormField} name="name" placeholder="Name your product" type="text" />
            <ErrorMessage className={s.error} component="span" name="name" />
          </div>

          <div className={s.createProductFieldContainer}>
            <Field className={s.createProductFormField} name="pictures" placeholder="Set link to product image" type="text" />
            <ErrorMessage className={s.error} component="span" name="pictures" />
          </div>

          <div className={s.createProductFieldContainer}>
            <Field className={s.createProductFormField} name="price" placeholder="Set Price" type="number" />
            <ErrorMessage className={s.error} component="span" name="price" />
          </div>

          <div className={s.createProductFieldContainer}>
            <Field className={s.createProductFormField} name="discount" placeholder="Discount" type="number" />
            <ErrorMessage className={s.error} component="span" name="discount" />
          </div>
          <div className={s.createProductFieldContainer}>
            <Field className={s.createProductFormField} name="stock" placeholder="Count of product" type="number" />
            <ErrorMessage className={s.error} component="span" name="stock" />
          </div>
          <div className={s.createProductFieldContainer}>
            <Field className={s.createProductFormField} name="weight" placeholder="Weight of product" type="text" />
            <ErrorMessage className={s.error} component="span" name="wight" />
          </div>
          <div className={s.createProductFieldContainer}>
            <Field className={s.createProductFormField} name="description" placeholder="Description of product" type="textarea" />
            <ErrorMessage className={s.error} component="span" name="description" />
          </div>

          <button disabled={isCreating} type="submit" className={s.createProductSubmitButton}>Create</button>
        </Form>
      </Formik>
    </div>
  )
}
