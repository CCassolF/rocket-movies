import { FiArrowLeft } from 'react-icons/fi'
import styles from './styles.module.scss'

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { NoteItem } from '../../components/NoteItem'
import { Textarea } from '../../components/Textarea'

export function NewMovie() {
  return (
    <div className={styles.Container}>
      <Header />

      <main className={styles.mainContainer}>
        <a href="#">
          <FiArrowLeft />
          Voltar
        </a>

        <div className={styles.mainContent}>
          <h1>Novo filme</h1>

          <div className={styles.inputsContainer}>
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" />
          </div>

          <Textarea placeholder="Observações" />

          <div className={styles.noteItemContainer}>
            <h2>Marcadores</h2>

            <div className={styles.noteItemContent}>
              <NoteItem value="React" />
              <NoteItem isNew='true' placeholder="Novo marcador" />
            </div>
          </div>

          <div className={styles.buttonContainer}>
            <Button title='Excluir filme' />
            <Button isNew='true' title='Salvar alterações' />
          </div>
        </div>

      </main>
    </div>
  )
}