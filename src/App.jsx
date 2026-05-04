import { useState } from 'react'
import Cover from './components/Cover'
import TheorySection from './components/TheorySection'
import ExercisesSection from './components/ExercisesSection'
import MiniProjectSection from './components/MiniProjectSection'
import ScoreSection from './components/ScoreSection'
import QuestionsSection from './components/QuestionsSection'
import Footer from './components/Footer'
import ExercisesPage from './pages/ExercisesPage'
import styles from './App.module.css'

function App() {
  let [tab, setTab] = useState('topshiriq')

  return (
    <>
      <nav className={styles.nav}>
        <button
          className={tab === 'topshiriq' ? styles.tabActive : styles.tab}
          onClick={() => setTab('topshiriq')}
        >
          📄 Topshiriq
        </button>
        <button
          className={tab === 'live' ? styles.tabActive : styles.tab}
          onClick={() => setTab('live')}
        >
          ⚡ Live Mashqlar
        </button>
      </nav>

      {tab === 'topshiriq' && (
        <>
          <Cover />
          <TheorySection />
          <div className="divider" />
          <ExercisesSection />
          <div className="divider" />
          <MiniProjectSection />
          <div className="divider" />
          <ScoreSection />
          <div className="divider" />
          <QuestionsSection />
          <Footer />
        </>
      )}

      {tab === 'live' && <ExercisesPage />}
    </>
  )
}

export default App
