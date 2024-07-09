import s from './friend-list.module.css'

// const Friends = ({ avatar, name, isOnline, id }) => {
const Friends = ({ friends }) => {

  const elements = friends.map(item =>
    // const status = {item.isOnline}? : 
    <li key={item.id} className='item'>
      <span className="status"></span>
      <img className="avatar" src={item.avatar} alt="User avatar" width="48" />
      <p className="name"></p>
    </li>
  )

  return (
    <>
    </>
  )
}

export default Friends