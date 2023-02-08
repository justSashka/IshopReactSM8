import { useDispatch } from 'react-redux'
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'
import { Main } from './components/main/Main'
import { syncTokenWithLS } from './redux/slices/userSlice/userSlice'
import s from './App.module.css'

function App() {
  const dispatch = useDispatch()
  dispatch(syncTokenWithLS(localStorage.getItem('token')))
  return (
    <div className={s.appContainer}>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
