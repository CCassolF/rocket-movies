import { Header } from '../../components/Header'
import styles from './styles.module.scss'

import { FiPlus, FiStar } from 'react-icons/fi'

export function Home() {
  return (
    <div className={styles.Container}>
      <Header />

      <main className={styles.mainContainer}>
        <section className={styles.headerContainer}>
          <h1>Meus filmes</h1>

          <button>
            <FiPlus />
            Adicionar filme
          </button>
        </section>

        <div className={styles.divContent}>
          <div className={styles.mainContent}>
            <div className={styles.headerContent}>
              <h2>Interstellar</h2>
              <div>
                <FiStar />
                <FiStar />
                <FiStar />
                <FiStar />
                <FiStar />
              </div>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Magnam, assumenda nisi, quos vero dolore obcaecati vitae, eum debitis reprehenderit amet autem omnis nam error architecto saepe. 
              Magnam tempore vel in.
            </p>

            <div className={styles.mainContentTags}>
              <span>Ficção Científica</span>
              <span>Drama</span>
              <span>Família</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}