import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/olinicker.png",
      name: "Línicker Mota",
      role: "Web Developer"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },

      {
        type: 'paragraph', content:
          'Fala galera, hoje vim demonstrar um novo projeto que realizei junto ao curso de React da Rocketseat!!!',
      },
      {
        type: 'link', content: 'jane.design/doctorcare'
      },
    ],
    publishedAt: new Date('2025-02-22 20:00:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educador @Rocketseat"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },

      {
        type: 'paragraph', content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: 'link', content: 'jane.design/doctorcare'
      },
    ],
    publishedAt: new Date('2025-02-10 20:00:00'),
  },
];

//

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App;


