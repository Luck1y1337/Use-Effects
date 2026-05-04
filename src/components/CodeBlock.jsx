import styles from './CodeBlock.module.css'

function CodeBlock({ filename, children }) {
  return (
    <div className={styles.codeblock}>
      <div className={styles.cbHead}>
        <div className={styles.cbDots}>
          <i className={styles.d1} />
          <i className={styles.d2} />
          <i className={styles.d3} />
        </div>
        <span className={styles.cbFile}>{filename}</span>
      </div>
      <div className={styles.cbBody}>
        <pre dangerouslySetInnerHTML={{ __html: children }} />
      </div>
    </div>
  )
}

export default CodeBlock
