import { useState, useEffect } from 'react'
import styles from './Exercise.module.css'

function Exercise3() {
  let [width, setWidth] = useState(window.innerWidth)
  let [height, setHeight] = useState(window.innerHeight)

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  let sizeLabel = ''
  if (width < 640) {
    sizeLabel = 'mobil 📱'
  } else if (width < 1024) {
    sizeLabel = 'planshet 💻'
  } else {
    sizeLabel = 'desktop 🖥'
  }

  return (
    <div className={styles.card}>
      <div className={styles.badge} style={{ color: 'var(--red)' }}>event listener + cleanup</div>
      <h2 className={styles.title}>Mashq 3 — Oyna o'lchami</h2>
      <p className={styles.desc}>
        Brauzer oynasini kichraytiring yoki kattalashtiring — raqamlar avtomatik yangilanadi.
      </p>
      <div className={styles.sizeDisplay}>
        <div className={styles.sizeBox}>
          <div className={styles.sizeVal}>{width}</div>
          <div className={styles.sizeKey}>kenglik (px)</div>
        </div>
        <div className={styles.sizeSep}>×</div>
        <div className={styles.sizeBox}>
          <div className={styles.sizeVal}>{height}</div>
          <div className={styles.sizeKey}>balandlik (px)</div>
        </div>
      </div>
      <div className={styles.result}>
        <span className={styles.resultLabel}>qurilma:</span>
        <code>{sizeLabel}</code>
      </div>
    </div>
  )
}

export default Exercise3
