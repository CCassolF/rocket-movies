import { FiPlus, FiX } from "react-icons/fi";
import styles from "./styles.module.scss";

export function NoteItem({ isNew, value, onClick, ...rest}) {
  return (
    <div 
      className={styles.Container}
      isnew={isNew}
    >
      <input
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
      />

      <button
        type="button"
        onClick={onClick}
      >
        { isNew ? <FiPlus /> : <FiX /> }
      </button>
    </div>
  )
}