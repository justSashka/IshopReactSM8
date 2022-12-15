import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Api from '../../../Api'
import s from './Profile.module.css'

export function Profile() {
  const navigate = useNavigate()
  const [user, setUser] = useState({})
  useEffect(() => {
    if (!window.localStorage.getItem('token')) navigate('/login')

    const getProfileInfo = async () => {
      const response = await Api.getProfile()
      const data = await response.json()
      setUser(data)
    }

    getProfileInfo()
  }, [])

  return (
    <div className={s.profileContainer}>
      <div className={s.profileName}>{user.name}</div>
      <div className={s.profileAbout}>{user.about}</div>
      <img className={s.profileAvatar} src={user.avatar} alt="avatar of user" />
      <div className={s.profileEmail}>{user.email}</div>
    </div>
  )
}
