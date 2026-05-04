import { useState, useEffect } from 'react'
import styles from './Exercise.module.css'

function Exercise4() {
  let [users, setUsers] = useState([])
  let [isLoading, setIsLoading] = useState(true)
  let [error, setError] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    setError(null)

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data)
        setIsLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setIsLoading(false)
      })
  }, [])

  return (
    <div className={styles.card}>
      <div className={styles.badge} style={{ color: 'var(--green)' }}>fetch + loading + error</div>
      <h2 className={styles.title}>Mashq 4 — Foydalanuvchilar ro'yxati</h2>
      <p className={styles.desc}>
        Sahifa ochilganda API dan 10 ta foydalanuvchi yuklanadi.
      </p>

      {isLoading && (
        <div className={styles.stateBox}>
          <div className={styles.spinner} />
          <span>Yuklanmoqda...</span>
        </div>
      )}

      {error && (
        <div className={styles.errorBox}>
          ⚠️ Xato: {error}
        </div>
      )}

      {!isLoading && !error && (
        <div className={styles.userList}>
          {users.map((user) => (
            <div key={user.id} className={styles.userCard}>
              <div className={styles.userAvatar}>
                {user.name.charAt(0)}
              </div>
              <div className={styles.userInfo}>
                <div className={styles.userName}>{user.name}</div>
                <div className={styles.userMeta}>{user.email}</div>
                <div className={styles.userMeta}>{user.phone}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Exercise4
