import { FiLock, FiMail } from 'react-icons/fi';
import styles from './styles.module.scss';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';


export function SignIn() {
  return (
    <div className={styles.Container}>
      <div className={styles.signContainer}>
        <h1>RocketMovies</h1>
        <span>Aplicação para acompanhar tudo que assistir.</span>

        <p>Faça seu login</p>

        <div>
          <Input icon={FiMail} placeholder="E-mail" />
          <Input icon={FiLock} placeholder="Senha" />

          <Button title='Entrar' isNew='true' />
        </div>
        
        <a href="">
          Criar conta
        </a>
      </div>

      <div id='bg' className={styles.bgContainer} />
    </div>
  )
}