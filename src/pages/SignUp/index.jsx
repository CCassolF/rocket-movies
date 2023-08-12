import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi';
import styles from './styles.module.scss';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';


export function SignUp() {
  return (
    <div className={styles.Container}>
      <div className={styles.signContainer}>
        <h1>RocketMovies</h1>
        <span>Aplicação para acompanhar tudo que assistir.</span>

        <p>Crie sua conta</p>

        <div>
          <Input icon={FiUser} placeholder="Nome" />
          <Input icon={FiMail} placeholder="E-mail" />
          <Input icon={FiLock} placeholder="Senha" />

          <Button title='Cadastrar' isNew='true' />
        </div>
        
        <a href="">
          <FiArrowLeft />
          Votar para o login
        </a>
      </div>

      <div id='bg' className={styles.bgContainer} />
    </div>
  )
}