import { useState, useEffect } from 'react'
import styles from './Exercise.module.css'

function Exercise5() {
  let [postId, setPostId] = useState(1)
  let [inputVal, setInputVal] = useState('1')
  let [post, setPost] = useState(null)
  let [isLoading, setIsLoading] = useState(true)
  let [error, setError] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    setError(null)

    fetch('https://jsonplaceholder.typicode.com/posts/' + postId)
      .then((res) => res.json())
      .then((data) => {
        setPost(data)
        setIsLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setIsLoading(false)
      })
  }, [postId])

  function handlePrev() {
    if (postId > 1) {
      let newId = postId - 1
      setPostId(newId)
      setInputVal(String(newId))
    }
  }

  function handleNext() {
    if (postId < 100) {
      let newId = postId + 1
      setPostId(newId)
      setInputVal(String(newId))
    }
  }

  function handleInputChange(e) {
    setInputVal(e.target.value)
  }

  function handleInputBlur() {
    let num = Number(inputVal)
    if (num >= 1 && num <= 100) {
      setPostId(num)
    } else {
      setInputVal(String(postId))
    }
  }

  return (
    <div className={styles.card}>
      <div className={styles.badge} style={{ color: '#7c3aed' }}>dep array + fetch · Bonus</div>
      <h2 className={styles.title}>Mashq 5 — Post qidirish</h2>
      <p className={styles.desc}>
        Id o'zgarganda useEffect qayta ishlab yangi post yuklaydi. Dependency: <code>[postId]</code>
      </p>

      <div className={styles.postNav}>
        <button
          className={styles.btn}
          onClick={handlePrev}
          disabled={postId <= 1}
        >
          ← Oldingi
        </button>
        <div className={styles.postIdWrap}>
          <span className={styles.postIdLabel}>Post #</span>
          <input
            className={styles.postIdInput}
            type="number"
            min="1"
            max="100"
            value={inputVal}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          />
          <span className={styles.postIdLabel}>/ 100</span>
        </div>
        <button
          className={styles.btn}
          onClick={handleNext}
          disabled={postId >= 100}
        >
          Keyingi →
        </button>
      </div>

      {isLoading && (
        <div className={styles.stateBox}>
          <div className={styles.spinner} />
          <span>Yuklanmoqda...</span>
        </div>
      )}

      {error && (
        <div className={styles.errorBox}>⚠️ Xato: {error}</div>
      )}

      {post && !isLoading && (
        <div className={styles.postCard}>
          <div className={styles.postId}>#{post.id}</div>
          <div className={styles.postTitle}>{post.title}</div>
          <div className={styles.postBody}>{post.body}</div>
        </div>
      )}
    </div>
  )
}

export default Exercise5
