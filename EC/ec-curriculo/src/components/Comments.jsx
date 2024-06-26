import styles from './comments.module.css';

export default function Comments() {
  return (
    <div className={styles.Comments}>
      <img className={styles.img} src="https://img.freepik.com/vetores-gratis/laptop-com-icone-de-codigo-isometrico-de-programa-desenvolvimento-de-software-e-aplicacoes-de-programacao-neon-escuro_39422-971.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1717718400&semt=sph" alt="" />
      <div> 
        <div className={styles.CommentsContent}>
        <strong>Formação Profissional: </strong>
        <p>Instituição Senai</p>
        <p>Autonomo</p>
        </div>
        
        <div className={styles.CommentsContent2}>
        <strong>Cursos:</strong>
        <p>Qualificação Front-End</p>
        </div>

        <div className={styles.CommentsContent3}>
        <strong>Habilidade :</strong>
        <p>Boa comunicação, trabalho em equipe, facil adaptabilidade</p> 
        </div>

        <div className={styles.CommentsContent3}>
        <strong>Linguagem de programação:</strong>
        <p>javascript</p> 
        </div>
      </div>
    </div>

  )
}


