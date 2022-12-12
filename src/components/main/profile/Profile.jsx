import { useEffect, useState } from 'react'
import Api from '../../../Api'
import s from './Profile.module.css'

export function Profile() {
  const [profile, setProfile] = useState({})
  useEffect(() => { Api.getUser().then((obj) => setProfile(obj)) }, [])
  return (
    <div className={s.profileContainer}>
      <div className={s.profileName}>{profile.name}</div>
      <div className={s.profileAbout}>{profile.about}</div>
      <img className={s.profileAvatar} src={profile.avatar} alt="avatar of user" />
      <div className={s.profileEmail}>{profile.email}</div>
    </div>
  )
}
