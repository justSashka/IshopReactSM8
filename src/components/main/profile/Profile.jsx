import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Api from '../../../Api'
import s from './Profile.module.css'

const profileQuerryKey = ['PROFILE_QUERRY_KEY']

export function Profile() {
  const token = useSelector((state) => state.user.token)
  const navigate = useNavigate()

  const getProfileInfo = async () => {
    const response = await Api.getProfile()
    const data = await response.json()
    return data
  }

  const { data: user, isLoading } = useQuery(
    {
      queryKey: profileQuerryKey,
      queryFn: getProfileInfo,
    },
  )

  useEffect(() => {
    if (token === null) { navigate('/login') }
  }, [])

  return (
    isLoading ? <div>loading</div>
      : (
        <div className={s.profileContainer}>
          <div className={s.profileName}>{user.name}</div>
          <div className={s.profileAbout}>{user.about}</div>
          <img className={s.profileAvatar} src={user.avatar} alt="avatar of user" />
          <div className={s.profileEmail}>{user.email}</div>
        </div>
      )
  )
}
