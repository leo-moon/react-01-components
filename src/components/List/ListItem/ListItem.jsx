import PropTypes from 'prop-types'

import s from './list-item.module.css'

const ListItem = ({ ...item }) => {
  console.log(item)
  return <li className={s.list-item} >{item.title}. {item.num}</li>
}

export default ListItem

ListItem.propTypes = {
    title: PropTypes.string.isRequired,
    num: PropTypes.string.isRequired
}