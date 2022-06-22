import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

import styles from './Sidebar.module.css'

interface SidebarProps {
  user: string;
  userUrl: string;
  onOpenUpdateUserModal: () => void
}

export function Sidebar({ user, userUrl, onOpenUpdateUserModal }: SidebarProps) {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40" />

      <div className={styles.profile}>
        <Avatar src={userUrl} />
        <strong>{user}</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#" onClick={onOpenUpdateUserModal}>
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}