import { useState, useEffect } from 'react'
import styles from './Exercise.module.css'

function Exercise1() {
  let [name, setName] = useState('')

  useEffect(() => {
    if (name === '') {
      document.title = 'Portfolio'
    } else {
      document.title = name
    }
  }, [name])

  return (
    <div className={styles.card}>
      <div className={styles.badge} style={{ color: 'var(--blue)' }}>dependency array</div>
      <h2 className={styles.title}>Mashq 1 — Sahifa sarlavhasi</h2>
      <p className={styles.desc}>
        Input ga yozing — brauzer tab da sarlavha real vaqtda o'zgaradi.
      </p>
      <input
        className={styles.input}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Ismingizni kiriting..."
      />
      <div className={styles.result}>
        <span className={styles.resultLabel}>document.title:</span>
        <code>{name === '' ? 'Portfolio' : name}</code>
      </div>
    </div>
  )
}

export default Exercise1
