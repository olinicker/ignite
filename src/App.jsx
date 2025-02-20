import { Header } from './components/Header'
import { Post } from './Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'
import './global.css'

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Línicker"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id maiores magnam quia dolorum, debitis facilis? "
          />
          <Post
            author="Línicker"
            content="teste "
          />
        </main>
      </div>
    </div>
  )
}

export default App;


