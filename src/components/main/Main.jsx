import { Routes, Route } from 'react-router-dom'
import { RegistrationPage } from './RegistrationPage/RegistrationPage'
import { LoginPage } from './loginPage/LoginPage'
import { Catalogue } from './catalogue/Catalogue'
import { Profile } from './profile/Profile'
import { LoginResult } from './loginPage/loginResult/LoginResult'
import { ShopCart } from './shopCart/ShopCart'
import s from './Main.module.css'
import { DetailedProduct } from './detailedProduct/DetailedProduct'
import { CreateProduct } from './createProduct/CreateProduct'
import { Favorites } from './favorites/Favourites'

export function Main() {
  return (
    <div className={s.mainContainer}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/loginres" element={<LoginResult />} />
        <Route path="/shopcart" element={<ShopCart />} />
        <Route path="/catalogue/product/:id" element={<DetailedProduct />} />
        <Route path="/createProduct" element={<CreateProduct />} />
        <Route path="/favourite" element={<Favorites />} />
      </Routes>
    </div>
  )
}
