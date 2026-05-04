import SectionHeader from './SectionHeader'
import styles from './QuestionsSection.module.css'

const questions = [
  <>
    <code>useEffect(fn, [])</code> va <code>useEffect(fn)</code> — ikkalasining farqi nima?
    Qaysi biri xavfli va nima uchun?
  </>,
  <>
    Cleanup funksiyasi <em>qachon</em> chaqiriladi? Ikki holatni ayting.
  </>,
  <>
    <code>setInterval</code> ni cleanup qilmasak nimaga olib keladi? Bu qanday muammo?
  </>,
  <>
    Nima uchun <code>fetch</code> ni useEffect <em>ichida</em> yozamiz? Komponent tanasiga
    to'g'ridan-to'g'ri yozsak nima bo'ladi?
  </>,
  <>
    Mashq 5 da dependency array <code>[postId]</code> — agar <code>[]</code> qilib
    o'zgartirsak ilova qanday ishlaydi?
  </>,
  <>"Cheksiz loop" qanday yuzaga keladi? Misol keltiring.</>,
]

function QuestionsSection() {
  return (
    <div className={styles.section}>
      <SectionHeader
        label="05 — Tekshirish Savollari"
        title="Tushundingizmi?"
        subtitle="Topshiriqni topshirishdan oldin quyidagilarga javob bera olishingiz kerak"
      />

      <ul className={styles.qlist}>
        {questions.map((q, i) => (
          <li key={i}>
            <div className={styles.qn}>{i + 1}</div>
            <div>{q}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default QuestionsSection
