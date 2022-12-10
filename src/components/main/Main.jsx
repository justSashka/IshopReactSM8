import { Routes, Route } from 'react-router-dom'
import { RegistrationPage } from './RegistrationPage/RegistrationPage'
import { LoginPage } from './loginPage/LoginPage'
import { Catalogue } from './catalogue/Catalogue'
import s from './Main.module.css'

export function Main() {
  return (
    <div className={s.mainContainer}>
      <Routes>
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  )
}
