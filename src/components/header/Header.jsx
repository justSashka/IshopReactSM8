import s from './Header.module.css'
import { Logo } from './logo/Logo'
import { Menu } from './menu/Menu'
import { SearchBar } from './searchBar/SearchBar'

export function Header() {
  return (
    <div className={s.headerContainer}>
      <Logo />
      <SearchBar />
      <Menu />
    </div>
  )
}
