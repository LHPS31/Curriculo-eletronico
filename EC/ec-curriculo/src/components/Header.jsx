import styles from './header.module.css';

export default function header() {
  return (
    <header className={styles.header}>
        <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"alt="" />
        <strong>Curriculo Eletronico</strong>
    </header>
  )
}
