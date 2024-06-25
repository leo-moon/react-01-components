import PropTypes from 'prop-types'

import s from './list.module.css';
import ListItem from './ListItem/ListItem';

const List = ({ title, items }) => {
  const elements = items.map(item => <ListItem key={item.id} {...item} />)
  // const elements = items.map(item => <li key={item.id} className='list-item' >{item.title}. {item.num}</li>)
  return (
    <>
      {title && <h4 className={s.list-title}>{title}</h4>}
      <ul className={s.list}>
        {elements}
      </ul>
    </>
  )
}

export default List;

List.defaultProps = {
  items: []
}

List.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    num: PropTypes.string.isRequired
  }))
}