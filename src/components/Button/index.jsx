import styles from './styles.module.scss'

export function Button({ title, isNew, onClick }) {
  return (
    <button
      className={styles.Container}
      type="button"
      isnew={isNew}
      onClick={onClick}
    >
      {title}
    </button>
  )

}