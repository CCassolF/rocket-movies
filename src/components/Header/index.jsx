import { Input } from '../Input'
import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <p>RocketMovies</p>

      <Input placeholder="Pesquisar pelo título" />

      <a href='#'>
        <div>
          <strong>Carlos Cassol</strong>
          <span>sair</span>
        </div>
        <img src="https://github.com/ccassolf.png" alt="Foto do usuário" />
      </a>
    </header>
  )
}