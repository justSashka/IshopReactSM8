import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'
import './App.css'
import { Main } from './components/main/Main'

function App() {
  return (
    <>
      {localStorage.getItem('token') !== null ? <Header /> : ''}
      <Main />
      {localStorage.getItem('token') !== null ? <Footer /> : ''}
    </>
  )
}

export default App
