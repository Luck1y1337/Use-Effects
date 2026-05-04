import SectionHeader from './SectionHeader'
import CodeBlock from './CodeBlock'
import Callout from './Callout'
import styles from './TheorySection.module.css'

const theoryItems = [
  {
    icon: '🎯',
    nameClass: 'dep',
    name: 'Dependency Array',
    tag: '[ ] parametri',
    content: (
      <>
        <p>
          useEffect ikkinchi argument sifatida massiv qabul qiladi.{' '}
          <em>Bu massiv qaysi o'zgaruvchilar o'zgarganda effect qayta ishlashini belgilaydi.</em>
        </p>
        <p>
          <code>useEffect(fn)</code> — har render da ishlaydi
          <br />
          <code>useEffect(fn, [])</code> — faqat birinchi render da (mount)
          <br />
          <code>useEffect(fn, [count])</code> — faqat <code>count</code> o'zgarganda
        </p>
      </>
    ),
  },
  {
    icon: '🧹',
    nameClass: 'clean',
    name: 'Cleanup',
    tag: 'return () => {}',
    content: (
      <>
        <p>
          Effect ichida return qilingan funksiya — bu <em>cleanup funksiyasi</em>. Komponent
          unmount bo'lganda yoki effect qayta ishlashidan oldin chaqiriladi.
        </p>
        <p>
          Timer, event listener, WebSocket — bular cleanup qilmasa <em>memory leak</em>{' '}
          yuzaga keladi. Komponent o'chsa ham ular ishlashda davom etadi.
        </p>
      </>
    ),
  },
  {
    icon: '🌐',
    nameClass: 'fetch',
    name: 'Fetch / API',
    tag: "ma'lumot yuklash",
    content: (
      <>
        <p>
          Server dan ma'lumot olish <em>yon ta'sir (side effect)</em> hisoblanadi — shuning
          uchun u useEffect ichida yoziladi. Odatda <code>[]</code> bilan — sahifa ochilganda
          bir marta yuklash uchun.
        </p>
        <p>
          Yuklash holatini boshqarish uchun <code>isLoading</code> va <code>error</code>{' '}
          state larini ham useEffect bilan birga ishlatish kerak.
        </p>
      </>
    ),
  },
]

const codeSnippet = `<span class="k">import</span> { <span class="p">useState</span>, <span class="g">useEffect</span> } <span class="k">from</span> <span class="s">'react'</span>

<span class="k">function</span> <span class="c">MisolComponent</span>() {

  <span class="cm">// 1. Dependency array — har render da ishlaydi (xavfli!)</span>
  <span class="g">useEffect</span>(() => {
    console.<span class="k">log</span>(<span class="s">'har render da ishlaydi'</span>)
  })

  <span class="cm">// 2. Bo'sh array — faqat birinchi render (mount)</span>
  <span class="g">useEffect</span>(() => {
    console.<span class="k">log</span>(<span class="s">'faqat bir marta'</span>)
  }, [])

  <span class="cm">// 3. O'zgaruvchi bilan — u o'zgarganda ishlaydi</span>
  <span class="g">useEffect</span>(() => {
    console.<span class="k">log</span>(<span class="s">"count o'zgardi:"</span>, count)
  }, [<span class="r">count</span>])

  <span class="cm">// 4. Cleanup bilan — unmount da tozalanadi</span>
  <span class="g">useEffect</span>(() => {
    <span class="k">const</span> timer = setInterval(() => {
      console.<span class="k">log</span>(<span class="s">'tick'</span>)
    }, <span class="s">1000</span>)

    <span class="k">return</span> () => {
      clearInterval(timer)  <span class="cm">// ← cleanup: komponent o'chganda ishlaydi</span>
    }
  }, [])
}`

function TheorySection() {
  return (
    <div className={styles.section}>
      <SectionHeader
        label="01 — Nazariya"
        title="useEffect qanday ishlaydi?"
        subtitle="Uchta asosiy tushunchani boshlashdan oldin yaxshi o'qib oling"
      />

      <div className={styles.theoryStack}>
        {theoryItems.map((item) => (
          <div key={item.name} className={styles.theoryRow}>
            <div className={styles.theoryLeft}>
              <span className={styles.theoryIcon}>{item.icon}</span>
              <span className={`${styles.theoryName} ${styles['tname' + item.nameClass.charAt(0).toUpperCase() + item.nameClass.slice(1)]}`}>
                {item.name}
              </span>
              <span className={styles.theoryTag}>{item.tag}</span>
            </div>
            <div className={styles.theoryRight}>{item.content}</div>
          </div>
        ))}
      </div>

      <CodeBlock filename="useEffect — umumiy ko'rinish">{codeSnippet}</CodeBlock>

      <Callout type="warn" icon="⚠️">
        <strong>Keng tarqalgan xato:</strong> useEffect ichida state o'zgartirish — agar
        dependency array to'g'ri yozilmasa, <em>cheksiz loop</em> yuzaga keladi. Masalan:
        effect ichida <code>setCount</code> chaqirilib, <code>count</code> dependency ga
        qo'shilsa.
      </Callout>
    </div>
  )
}

export default TheorySection
