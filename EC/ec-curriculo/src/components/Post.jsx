import styles from './post.module.css';
import Comments from './Comments';

export default function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://residencia.jfrn.jus.br/wp-content/uploads/2017/11/boneco.png" alt="" />
          <div className={styles.authorInfo}>
            <strong>Luiz Henrique</strong>
            <span>Gerente / Desenvolvimento Front-End</span>
          </div>
        </div>
      </header>
      <div className={styles.content}>
        <h3>Sobre você</h3>
        <p>Estou no último periodo de formação em desenvolvimento Front-End.
          Tambem formado em analise e desenvolvimento de sistema, procuro oportunidades para ganhar experiencia na area e logo poder me estabelecer e evoluir em areas diferentes com consequentemente com cargos maiores.
        </p>
        
        <h3>Links Repositorio</h3>
        <a href="">Link repositorio</a>
        <h3>Meu último Projeto</h3>
        <a href="https://homenagemsenna.vercel.app/" target='_blank'>Ùltimo Projeto</a>
      </div>

      <form className={styles.form} action="">
        <h2>Experiencia Profissional</h2>
      </form>

      <div>
        <Comments />
      </div>

    </article>
  )
}


