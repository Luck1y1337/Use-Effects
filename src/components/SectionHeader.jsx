import styles from './SectionHeader.module.css'

function SectionHeader({ label, title, subtitle }) {
  return (
    <>
      <div className={styles.secLabel}>
        <span>{label}</span>
      </div>
      <h2 className={styles.secTitle}>{title}</h2>
      {subtitle && <p className={styles.secSub}>{subtitle}</p>}
    </>
  )
}

export default SectionHeader
