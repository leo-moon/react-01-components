import s from './statistics.module.css'

const Statistics = ({ title, stats }) => {
  const elements = stats.map(stat =>
    <li key={stat.id} className={s.item}>
      <span className={s.label}>{stat.label}</span>
      <span className={s.percentage}>{stat.percentage}</span>
    </li>
  )

  return (
    <section className={s.statistics}>
      {{ title } && <h2 className={s.title}>{title}</h2>}

      <ul className={s.list}>
        {elements}
      </ul>
    </section>
  )
}

export default Statistics