import { useDispatch } from 'react-redux'
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'
import { Main } from './components/main/Main'
import { syncTokenWithLS } from './redux/slices/userSlice/userSlice'
import './App.css'

function App() {
  const dispatch = useDispatch()
  dispatch(syncTokenWithLS(localStorage.getItem('token')))
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
