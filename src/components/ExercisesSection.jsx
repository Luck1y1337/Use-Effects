import { useState } from 'react'
import SectionHeader from './SectionHeader'
import styles from './ExercisesSection.module.css'

const exercises = [
  {
    num: 1,
    title: "Sahifa sarlavhasi o'zgaruvchisi",
    topic: 'dependency array',
    topicClass: 'dep',
    badge: 'Majburiy',
    badgeClass: 'req',
    desc: (
      <>
        Input yozing, u o'zgarganda <code>document.title</code> ham shu matn bilan yangilansin.
        Sahifa yorlig'ida real vaqtda o'zgarish ko'rinishi kerak.
      </>
    ),
    checks: [
      <><code>useState</code> bilan <code>name</code> state yarating</>,
      <>Input ga <code>value</code> va <code>onChange</code> ulang</>,
      <>useEffect ichida <code>document.title = name</code> yozing</>,
      <>Dependency array ga <code>name</code> kiriting — faqat name o'zgarganda ishlash kerak</>,
      <>Input bo'sh bo'lsa title <code>"Portfolio"</code> bo'lib qolsin</>,
    ],
    hint: (
      <>
        <strong>Savol:</strong> dependency array dan <code>name</code> ni olib tashlaсangiz
        nima bo'ladi? Sinab ko'ring.
      </>
    ),
  },
  {
    num: 2,
    title: 'Sekundomer (Stopwatch)',
    topic: 'cleanup funksiyasi',
    topicClass: 'clean',
    badge: 'Majburiy',
    badgeClass: 'req',
    desc: (
      <>
        "Boshlash" tugmasi bosilganda har soniyada <code>+1</code> qo'shilib boruvchi sekundomer
        yasang. "To'xtatish" tugmasi timer ni to'xtatsin.{' '}
        <strong>Cleanup to'g'ri ishlashi shart.</strong>
      </>
    ),
    checks: [
      <><code>seconds</code> va <code>isRunning</code> state lari kerak</>,
      <>useEffect ichida <code>setInterval</code> bilan har soniyada seconds++ qiling</>,
      <>Effect <code>return</code> ichida <code>clearInterval</code> yozing</>,
      <><code>isRunning</code> dependency ga qo'shing — u o'zgarganda effect qayta ishlaydi</>,
      <>"Reset" tugmasi ham qo'shing — <code>seconds = 0</code> va to'xtaydi</>,
    ],
    hint: (
      <>
        <strong>Kuzating:</strong> Cleanup yo'q bo'lsa, "Stop" bosganda ham timer ishlashda
        davom etishini ko'ring. Keyin cleanup qo'shing va farqni sezin.
      </>
    ),
  },
  {
    num: 3,
    title: "Oyna o'lchami kuzatuvchi",
    topic: 'event listener + cleanup',
    topicClass: 'clean',
    badge: 'Majburiy',
    badgeClass: 'req',
    desc: (
      <>
        Brauzer oynasining kenglik va balandligini real vaqtda ko'rsating. Oyna o'lchami
        o'zgarganda raqamlar avtomatik yangilansin.
      </>
    ),
    checks: [
      <><code>width</code> va <code>height</code> state — boshlang'ich qiymat <code>window.innerWidth/innerHeight</code></>,
      <>useEffect ichida <code>window.addEventListener('resize', handler)</code></>,
      <>Handler: <code>setWidth(window.innerWidth)</code> va <code>setHeight</code></>,
      <>Cleanup da <code>window.removeEventListener('resize', handler)</code></>,
      <>Dependency array — <code>[]</code>, faqat mount da qo'shiladi</>,
    ],
    hint: (
      <>
        <strong>Kuzating:</strong> Cleanup bo'lmasa va komponent qayta render bo'lsa, event
        listener har safar yangisiga qo'shilaveradi (listener lar to'planadi).
      </>
    ),
  },
  {
    num: 4,
    title: "Foydalanuvchi ma'lumotlarini yuklash",
    topic: 'fetch + loading state',
    topicClass: 'fetch',
    badge: 'Majburiy',
    badgeClass: 'req',
    desc: (
      <>
        <code>https://jsonplaceholder.typicode.com/users</code> dan foydalanuvchilar ro'yxatini
        yuklang. Yuklash paytida loading, xato bo'lsa error ko'rsating.
      </>
    ),
    checks: [
      <><code>users</code>, <code>isLoading</code>, <code>error</code> — uchta state</>,
      <>useEffect ichida <code>fetch()</code> → <code>.then()</code> yoki <code>async/await</code></>,
      <>Yuklash boshida <code>setIsLoading(true)</code>, tugaganda <code>false</code></>,
      <>Xato bo'lsa <code>setError(err.message)</code></>,
      <>Dependency array — <code>[]</code>, sahifa ochilganda bir marta yuklanadi</>,
      <>Har bir foydalanuvchi uchun: ism, email, telefon ko'rsating</>,
    ],
    hint: (
      <>
        <strong>URL:</strong> https://jsonplaceholder.typicode.com/users
        <br />
        <strong>Tekshirish:</strong> Network tab dan "Slow 3G" qo'ying — loading holatini ko'ring.
      </>
    ),
  },
  {
    num: 5,
    title: 'Qidiruv bilan post yuklash',
    topic: 'dep array + fetch birga',
    topicClass: 'all',
    badge: 'Bonus',
    badgeClass: 'bonus',
    desc: (
      <>
        Input ga post id kiritilganda (1 dan 100 gacha) shu postni API dan yuklab ko'rsating. Id
        o'zgarganda effect qayta ishlab yangi post yuklaydi.
      </>
    ),
    checks: [
      <>Input: <code>postId</code> state (boshlang'ich: 1)</>,
      <>useEffect: <code>postId</code> o'zgarganda <code>/posts/{'{postId}'}</code> ga so'rov</>,
      <>Dependency array: <code>[postId]</code></>,
      <>Yuklash va xato holatlari boshqarilgan</>,
      <>"Oldingi" / "Keyingi" tugmalar bilan id ni +1/-1 qilish mumkin</>,
    ],
    hint: (
      <>
        <strong>URL:</strong> https://jsonplaceholder.typicode.com/posts/1
        <br />
        <strong>Savol:</strong> Nima uchun dependency array da <code>[postId]</code> yozildi,{' '}
        <code>[]</code> emas?
      </>
    ),
  },
]

function ExerciseCard({ exercise }) {
  let [open, setOpen] = useState(true)

  let topicColorClass = styles['mt' + exercise.topicClass.charAt(0).toUpperCase() + exercise.topicClass.slice(1)]
  let badgeClass = exercise.badgeClass === 'bonus' ? styles.mbBonus : styles.mbReq

  return (
    <div className={styles.mashq}>
      <div className={styles.mashqHead} onClick={() => setOpen(!open)}>
        <div className={styles.mashqNum}>{exercise.num}</div>
        <div className={styles.mashqTitleWrap}>
          <div className={styles.mashqTitle}>{exercise.title}</div>
          <div className={`${styles.mashqTopic} ${topicColorClass}`}>{exercise.topic}</div>
        </div>
        <span className={`${styles.mashqBadge} ${badgeClass}`}>{exercise.badge}</span>
      </div>

      {open && (
        <div className={styles.mashqBody}>
          <p className={styles.mashqDesc}>{exercise.desc}</p>
          <ul className={styles.checklist}>
            {exercise.checks.map((check, i) => (
              <li key={i}>{check}</li>
            ))}
          </ul>
          <div className={styles.hintBox}>{exercise.hint}</div>
        </div>
      )}
    </div>
  )
}

function ExercisesSection() {
  return (
    <div className={styles.section}>
      <SectionHeader
        label="02 — Kichik Mashqlar"
        title="5 ta mashq"
        subtitle="Har bir mashq bitta tushunchaga qaratilgan — tartib bilan bajaring"
      />

      <div className={styles.mashqList}>
        {exercises.map((ex) => (
          <ExerciseCard key={ex.num} exercise={ex} />
        ))}
      </div>
    </div>
  )
}

export default ExercisesSection
