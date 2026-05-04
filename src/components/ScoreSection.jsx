import SectionHeader from './SectionHeader'
import styles from './ScoreSection.module.css'

const rows = [
  {
    task: "Mashq 1 — document.title",
    topic: 'dependency array',
    topicColor: 'blue',
    pts: '10',
    ptsClass: 'dep',
  },
  {
    task: 'Mashq 2 — Sekundomer',
    topic: 'cleanup',
    topicColor: 'red',
    pts: '15',
    ptsClass: 'cln',
  },
  {
    task: "Mashq 3 — Oyna o'lchami",
    topic: 'event listener cleanup',
    topicColor: 'red',
    pts: '10',
    ptsClass: 'cln',
  },
  {
    task: "Mashq 4 — Foydalanuvchilar ro'yxati",
    topic: 'fetch + loading + error',
    topicColor: 'green',
    pts: '15',
    ptsClass: 'ftch',
  },
  {
    task: 'Mini loyiha — Ob-havo ilovasi',
    topic: 'hammasi birga',
    topicColor: 'amber',
    pts: '50',
    ptsClass: 'amber',
  },
]

function ScoreSection() {
  return (
    <div className={styles.section}>
      <SectionHeader
        label="04 — Baholash"
        title="Ball taqsimoti"
        subtitle="Mashqlar va loyiha birgalikda 100 ball"
      />

      <div className={styles.scoreWrap}>
        <table className={styles.scoreTable}>
          <thead>
            <tr>
              <th>Vazifa</th>
              <th>Mavzu</th>
              <th>Ball</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.task}>
                <td>{row.task}</td>
                <td>
                  <span className={`${styles.topicTag} ${styles['tc' + row.topicColor.charAt(0).toUpperCase() + row.topicColor.slice(1)]}`}>
                    {row.topic}
                  </span>
                </td>
                <td className={`${styles.pts} ${styles['pts' + row.ptsClass.charAt(0).toUpperCase() + row.ptsClass.slice(1)]}`}>
                  {row.pts}
                </td>
              </tr>
            ))}
            <tr className={styles.scoreTotal}>
              <td colSpan={2}>
                <strong>Jami</strong>
              </td>
              <td className={styles.pts}>100</td>
            </tr>
            <tr>
              <td>Bonus — Mashq 5 (qidiruv + dep)</td>
              <td>
                <span className={`${styles.topicTag} ${styles.tcPurple}`}>
                  dep array + fetch
                </span>
              </td>
              <td className={`${styles.pts} ${styles.ptsBonus}`}>+15</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ScoreSection
