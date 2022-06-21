import { Lightbulb, PlusCircle } from 'phosphor-react';
import styles from './Header.module.css';

interface HeaderProps {
  onOpenNewFeedbackModal: () => void;
  postsLength: number
}

export function Header({ onOpenNewFeedbackModal, postsLength }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div>
        <Lightbulb size={25} weight="duotone" />
        <span>{postsLength} sugestões</span>
      </div>
      <button type="submit" onClick={onOpenNewFeedbackModal}><PlusCircle size={18}/> Adicionar</button>
    </header>
  )
}