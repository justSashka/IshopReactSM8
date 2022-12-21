import { Routes, Route } from 'react-router-dom'
import { RegistrationPage } from './RegistrationPage/RegistrationPage'
import { LoginPage } from './loginPage/LoginPage'
import { Catalogue } from './catalogue/Catalogue'
import { Profile } from './profile/Profile'
import { LoginResult } from './loginPage/loginResult/LoginResult'
import s from './Main.module.css'

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
      </Routes>
    </div>
  )
}
