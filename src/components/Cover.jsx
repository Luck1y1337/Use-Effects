import styles from './Cover.module.css'

function Cover() {
  return (
    <div className={styles.cover}>
      <div className={styles.coverTop}>
        <span className={styles.coverTopLabel}>React Hooks · Amaliy topshiriq</span>
        <span className={styles.coverTopLabel}>useState → useEffect</span>
      </div>

      <div className={styles.coverMain}>
        <div className={styles.coverEyebrow}>Hooks seriyasi · 2-dars</div>
        <h1 className={styles.coverTitle}>
          use<span className={styles.italic}>Effect</span>
          <br />
          Hook
        </h1>
        <p className={styles.coverDesc}>
          Dependency array, cleanup va fetch — uchta asosiy tushunchani kichik
          mashqlardan boshlab, mini loyihagacha amalda o'rganish.
        </p>
        <div className={styles.coverTags}>
          <span className={`${styles.ctag} ${styles.ctagDep}`}>dependency array</span>
          <span className={`${styles.ctag} ${styles.ctagClean}`}>cleanup</span>
          <span className={`${styles.ctag} ${styles.ctagFetch}`}>fetch / API</span>
        </div>
      </div>

      <div className={styles.coverBottom}>
        <div className={styles.coverStat}>
          <div className={styles.coverStatVal}>5</div>
          <div className={styles.coverStatKey}>Kichik mashq</div>
        </div>
        <div className={styles.coverStat}>
          <div className={styles.coverStatVal}>1</div>
          <div className={styles.coverStatKey}>Mini loyiha</div>
        </div>
        <div className={styles.coverStat}>
          <div className={styles.coverStatVal}>5–7</div>
          <div className={styles.coverStatKey}>Soat (taxminan)</div>
        </div>
      </div>
    </div>
  )
}

export default Cover
