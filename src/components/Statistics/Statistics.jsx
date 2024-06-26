import s from './statistics.module.css'

const Statistics = ({title , stats }) => {
  const elements = stats.map(stat => {return(
    <li key={stat.id} className={s.item}>
      <span className={s.label}>{stat.label}</span>
      <span className={s.percentage}>{stat.percentage}</span>
    </li>)
  })
  return (
    <section className={s.statistics}>
     { {title} && <h2 className={s.title}>{title}</h2> }

      <ul className={s.list}>
        {elements}
        {/* <li className={s.item}>
          <span className={s.label}>.docx</span>
          <span className={s.percentage}>4%</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>.mp3</span>
          <span className={s.percentage}>14%</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>.pdf</span>
          <span className={s.percentage}>41%</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>.mp4</span>
          <span className={s.percentage}>12%</span>
        </li> */}
      </ul>
    </section>
  )
}

export default Statistics