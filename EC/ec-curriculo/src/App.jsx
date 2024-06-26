import Comments from './components/Comments';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Post from './components/Post';
import styles from './app.module.css'
import './styles.global.css'

function App() {
 

  return (
    <>
      <div>
      <Header/>

        <div className={styles.wrapper}> 
        <Sidebar/>
        <main>
        <Post />
        </main>

        </div>
      </div>
    </>
  )
}

export default App
