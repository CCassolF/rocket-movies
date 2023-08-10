import styles from './styles.module.scss'

export function Input({ icon: Icon, ...rest }) {
  return (
    <div className={styles.Container}>

      { Icon && <Icon size={20} />}
      <input {...rest} />
    </div>
  )
}