import styles from './Callout.module.css'

function Callout({ type = 'info', icon, children }) {
  let typeClass = styles.calloutInfo
  if (type === 'warn') typeClass = styles.calloutWarn
  if (type === 'tip') typeClass = styles.calloutTip

  return (
    <div className={`${styles.callout} ${typeClass}`}>
      <span className={styles.calloutIcon}>{icon}</span>
      <div className={styles.calloutBody}>{children}</div>
    </div>
  )
}

export default Callout
