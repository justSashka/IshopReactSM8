import { Logo } from './logo/Logo'
import { Menu } from './menu/Menu'
import { SearchBar } from './searchBar/SearchBar'
import s from './Header.module.css'

export function Header() {
  return (
    <div className={s.headerContainer}>
      <Logo />
      <SearchBar />
      <Menu />
    </div>
  )
}
