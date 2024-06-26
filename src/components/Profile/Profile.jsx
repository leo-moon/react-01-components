import s from './profile.module.css'

const User = ({
  username = 'username',
  tag = 'tag',
  location = "Land, Eurth",
  avatar = "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
  stats = {}
}) => {

  const statKeys = Object.keys(stats)
  // statKeys.forEach(item => { console.log("item = ", item, statKeys.indexOf(item)) })

  const elements = statKeys.map(item => {
    return (
      <li key={statKeys.indexOf(item)} className={s.item}>
        <span className={s.label}>{item}</span>
        <span className={s.quantity}>{stats[item]}</span>
      </li>)
  }
  )
  return (
      <div className={s.profile}>

        <div className={s.description}>
          <img
            src={avatar}
            alt="User avatar"
            className={s.avatar}
          />
          <p className={s.name}>{username}</p>
          <p className={s.tag}>{tag}</p>
          <p className={s.location}>{location}</p>
        </div>

        <ul className={s.stats}>
          {elements}
        </ul>

      </div>
  )
}

export default User

