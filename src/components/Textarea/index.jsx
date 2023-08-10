import styles from './styles.module.scss'

export function Textarea({ value, ...rest }) {
  return (
    <textarea 
      className={styles.Container}
      {...rest}
    >
      {value}
    </textarea>
  )
}