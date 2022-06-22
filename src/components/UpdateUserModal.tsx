import styles from "./UpdateUserModal.module.css";

import Modal from "react-modal";
import { X } from "phosphor-react";
import { useState } from "react";

interface UpdateUserModalProps {
  isUpdateUserModal: boolean;
  onCloseUpdateUserModal: () => void;
  onUpdateUser: (user: string, userUrl: string) => void;
}

export function UpdateUserModal({
  isUpdateUserModal,
  onCloseUpdateUserModal,
  onUpdateUser
}: UpdateUserModalProps) {
  const [user, setUser] = useState('')
  const [userUrl, setUserUrl] = useState('')

  function handleUpdateUser() {
    onUpdateUser(user, userUrl)
    onCloseUpdateUserModal()
  }

  return (
    <Modal
      isOpen={isUpdateUserModal}
      onRequestClose={onCloseUpdateUserModal}
      overlayClassName={styles["react-modal-overlay"]}
      className={styles["react-modal-content"]}
    >
      <header>
        <h2>Editar nome de usuário</h2>
        <button onClick={onCloseUpdateUserModal}>
          <X size={20} />
        </button>
      </header>
      <main>
        <label htmlFor="inputUser">Nome de Usuário:</label>
        <input
          type="text"
          id="inputUser"
          placeholder="Escreva seu nome de usuário"
          onChange={(e) => setUser(e.target.value)}
        />
        <label htmlFor="inputUserUrl">Nome de Usuário:</label>
        <input
          type="text"
          id="inputUserUrl"
          placeholder="Url da sua foto"
          onChange={(e) => setUserUrl(e.target.value)}
        />
        <button
          className={styles.updateUserButton}
          onClick={handleUpdateUser}
        >
          Enviar
        </button>
      </main>
    </Modal>
  );
}
