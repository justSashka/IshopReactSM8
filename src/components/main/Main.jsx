import { Routes, Route } from 'react-router-dom'
import { RegistrationPage } from './RegistrationPage/RegistrationPage'
import { LoginPage } from './loginPage/LoginPage'
import { Catalogue } from './catalogue/Catalogue'
import s from './Main.module.css'
import { Profile } from './profile/Profile'

export function Main() {
  return (
    <div className={s.mainContainer}>
      {localStorage.getItem('token') === null ? (
        <div className={s.unregContainer}>
          <h1 className={s.unregTitle}>Register new account or log in. Bark. Bark. Woof.</h1>
          <span className={s.pozornoeOpravdanie}>
            {' '}
            Это плейсхолдер. Потом тут будет классная страничка с приветствием.
            По поводу внешнего вида строго не судите времени хватило только на функцмонал.
            Внешкой пришлось принебречь. Винить прошу мою работу. Весь декабрь я теперь в отпуске.
            Обещаю нагнать перегнать и вперед пойти!
            {' '}

          </span>
          <a className={s.link} href="/register">Registration</a>
          <a className={s.link} href="/login">Login</a>
        </div>
      ) : '' }
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  )
}
