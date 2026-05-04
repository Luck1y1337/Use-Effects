import Exercise1 from '../components/exercises/Exercise1'
import Exercise2 from '../components/exercises/Exercise2'
import Exercise3 from '../components/exercises/Exercise3'
import Exercise4 from '../components/exercises/Exercise4'
import Exercise5 from '../components/exercises/Exercise5'
import styles from './ExercisesPage.module.css'

function ExercisesPage() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.label}>Ishlayotgan Mashqlar</div>
        <h1 className={styles.title}>Live Demo</h1>
        <p className={styles.sub}>Barcha 5 ta mashq — haqiqiy React state va useEffect bilan</p>
      </div>

      <Exercise1 />
      <Exercise2 />
      <Exercise3 />
      <Exercise4 />
      <Exercise5 />
    </div>
  )
}

export default ExercisesPage
