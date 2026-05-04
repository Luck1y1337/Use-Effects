import { useState, useEffect } from 'react'
import styles from './Exercise.module.css'

function Exercise2() {
  let [seconds, setSeconds] = useState(0)
  let [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    if (isRunning === false) {
      return
    }

    let timer = setInterval(() => {
      setSeconds((prev) => prev + 1)
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [isRunning])

  function handleReset() {
    setIsRunning(false)
    setSeconds(0)
  }

  let mins = String(Math.floor(seconds / 60)).padStart(2, '0')
  let secs = String(seconds % 60).padStart(2, '0')

  return (
    <div className={styles.card}>
      <div className={styles.badge} style={{ color: 'var(--red)' }}>cleanup funksiyasi</div>
      <h2 className={styles.title}>Mashq 2 — Sekundomer</h2>
      <p className={styles.desc}>
        Boshlash tugmasini bosing — har soniyada +1. Cleanup to'g'ri ishlaydi.
      </p>
      <div className={styles.timerDisplay}>
        {mins}:{secs}
      </div>
      <div className={styles.btnRow}>
        <button
          className={styles.btn}
          style={{ background: 'var(--green)', color: '#fff' }}
          onClick={() => setIsRunning(true)}
          disabled={isRunning}
        >
          ▶ Boshlash
        </button>
        <button
          className={styles.btn}
          style={{ background: 'var(--red)', color: '#fff' }}
          onClick={() => setIsRunning(false)}
          disabled={!isRunning}
        >
          ⏸ To'xtatish
        </button>
        <button
          className={styles.btn}
          onClick={handleReset}
        >
          ↺ Reset
        </button>
      </div>
      <div className={styles.result}>
        <span className={styles.resultLabel}>holat:</span>
        <code>{isRunning ? 'ishlayapti ⏱' : "to'xtatilgan ⏹"}</code>
      </div>
    </div>
  )
}

export default Exercise2
