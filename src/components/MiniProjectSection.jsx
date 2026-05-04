import SectionHeader from './SectionHeader'
import Callout from './Callout'
import styles from './MiniProjectSection.module.css'

const features = [
  {
    icon: '⌨️',
    title: 'Shahar qidirish',
    desc: 'Input bilan shahar nomi kiriting. Tugma bosilganda qidiruv boshlanadi.',
    hook: '→ useEffect([city])',
    hookClass: 'dep',
  },
  {
    icon: '🌡️',
    title: 'Joriy harorat',
    desc: "Harorat (°C), ob-havo holati va namlik foizini ko'rsating.",
    hook: '→ fetch + isLoading/error',
    hookClass: 'ftch',
  },
  {
    icon: '📄',
    title: 'Sahifa sarlavhasi',
    desc: "Shahar yuklanganda document.title = \"Toshkent ob-havosi\" bo'lsin.",
    hook: '→ useEffect([city])',
    hookClass: 'dep',
  },
  {
    icon: '🧹',
    title: 'Cleanup',
    desc: "Komponent unmount bo'lganda document.title asl holiga qaytsin.",
    hook: '→ return () => cleanup',
    hookClass: 'cln',
  },
]

const checklistItems = [
  { text: <>Shahar nomi kiritish uchun input va "Qidirish" tugmasi</>, pts: '15 ball' },
  { text: <>useEffect bilan API ga so'rov (<code>[city]</code> dependency)</>, pts: '20 ball' },
  { text: <> isLoading — "Yuklanmoqda..." xabari</>, pts: '10 ball' },
  { text: <> error — "Shahar topilmadi" yoki boshqa xato xabari</>, pts: '10 ball' },
  { text: <>Harorat, holat, namlik ko'rsatiladi</>, pts: '15 ball' },
  { text: <>document.title shahar nomiga qarab o'zgaradi</>, pts: '15 ball' },
  { text: <>Cleanup: unmount da title aslida qaytadi</>, pts: '15 ball' },
]

function MiniProjectSection() {
  return (
    <div className={styles.section}>
      <SectionHeader
        label="03 — Mini Loyiha"
        title="Hammasi bitta joyda"
        subtitle="5 ta mashqdagi bilimlarni birlashtirib yasang"
      />

      <div className={styles.projectCard}>
        <div className={styles.projectHero}>
          <div className={styles.projectHeroBg}>Havo</div>
          <div className={styles.projectTag}>Mini loyiha · useEffect</div>
          <div className={styles.projectName}>Havo Ob-havosi</div>
          <div className={styles.projectSub}>
            Shahar nomi kiritilganda ob-havo ma'lumotlarini yuklovchi ilova
          </div>
        </div>

        <div className={styles.projectBody}>
          <Callout type="info" icon="🔑">
            <strong>API:</strong>{' '}
            <code>{'https://wttr.in/{shahar}?format=j1'}</code> — bepul, API key kerak emas.
            <br />
            Misol: <code>https://wttr.in/Tashkent?format=j1</code>
          </Callout>

          <div className={styles.featureGrid}>
            {features.map((f) => (
              <div key={f.title} className={styles.featureItem}>
                <div className={styles.featureItemIcon}>{f.icon}</div>
                <div className={styles.featureItemTitle}>{f.title}</div>
                <div className={styles.featureItemDesc}>{f.desc}</div>
                <div className={`${styles.featureItemHook} ${styles['fh' + f.hookClass.charAt(0).toUpperCase() + f.hookClass.slice(1)]}`}>
                  {f.hook}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.checklistWrap}>
            <div className={styles.checklistLabel}>Bajariladigan vazifalar</div>
            <ul className={styles.projectChecklist}>
              {checklistItems.map((item, i) => (
                <li key={i}>
                  {item.text}
                  <span className={styles.pclPts}>{item.pts}</span>
                </li>
              ))}
            </ul>
          </div>

          <Callout type="tip" icon="💡">
            <strong>Tavsiya:</strong> Avval sodda versiya yasang — faqat fetch ishlaydi. Keyin
            isLoading, error, title, cleanup qo'shing. Bir vaqtda hammani qilmoqchi bo'lmang.
          </Callout>
        </div>
      </div>
    </div>
  )
}

export default MiniProjectSection
