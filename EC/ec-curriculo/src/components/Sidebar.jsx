import styles from './sidebar.module.css'

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://universidadedatecnologia.com.br/wp-content/uploads/2017/12/Principais-linguagens-2.jpg" alt="" />
      <div className={styles.profile}>
        <img className={styles.avatar} src="https://residencia.jfrn.jus.br/wp-content/uploads/2017/11/boneco.png" alt="" />
        <strong>Luiz Henrique</strong>
        <span>Desenvolverdor Front-End</span>

      </div>
      <footer>
        <a href="">Seu GitHub</a>
      </footer>
    </aside>
  )
}


