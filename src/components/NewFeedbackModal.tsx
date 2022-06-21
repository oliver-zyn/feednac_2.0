import Modal from "react-modal";
import { X } from "phosphor-react";

import styles from "./NewFeedbackModal.module.css";
import { useState } from "react";

interface NewFeedbackModalProps {
  isNewFeedbackModalOpen: boolean;
  onCloseNewFeedbackModal: () => void;
  onSendNewFeedback: (
    titleFeedback: string,
    descriptionFeedback: string,
    activeTypeButton: string
  ) => void;
}

export function NewFeedbackModal({
  isNewFeedbackModalOpen,
  onCloseNewFeedbackModal,
  onSendNewFeedback,
}: NewFeedbackModalProps) {
  const [activeTypeButton, setActiveTypeButton] = useState("BUG");
  const [descriptionFeedback, setDescriptionFeedback] = useState("");
  const [titleFeedback, setTitleFeedback] = useState("");

  function handleSendNewFeedback() {
    onSendNewFeedback(titleFeedback, descriptionFeedback, activeTypeButton);
  }

  return (
    <Modal
      isOpen={isNewFeedbackModalOpen}
      onRequestClose={onCloseNewFeedbackModal}
      overlayClassName={styles["react-modal-overlay"]}
      className={styles["react-modal-content"]}
    >
      <header>
        <h2>Adicionar Feedback</h2>
        <button onClick={onCloseNewFeedbackModal}>
          <X size={20} />
        </button>
      </header>
      <main>
        <label htmlFor="inputFeedbackTitle">Título do Feedback:</label>
        <input
          type="text"
          id="inputFeedbackTitle"
          placeholder="Título do feedback"
          onChange={(e) => setTitleFeedback(e.target.value)}
        />
        <label htmlFor="inputFeedbackDescription">Descrição do Feedback:</label>
        <textarea
          id="inputFeedbackDescription"
          placeholder="Descreva seu feedback"
          onChange={(e) => setDescriptionFeedback(e.target.value)}
        />
        <label>Tipo do Feedback:</label>
        <div>
          <button
            className={
              activeTypeButton === "BUG" ? styles.activeTypeButton : ""
            }
            onClick={() => setActiveTypeButton("BUG")}
          >
            Bug
          </button>
          <button
            className={
              activeTypeButton === "IDEA" ? styles.activeTypeButton : ""
            }
            onClick={() => setActiveTypeButton("IDEA")}
          >
            Ideia
          </button>
          <button
            className={
              activeTypeButton === "OTHER" ? styles.activeTypeButton : ""
            }
            onClick={() => setActiveTypeButton("OTHER")}
          >
            Outro
          </button>
        </div>
        <button
          className={styles.sendFeedbackButton}
          onClick={handleSendNewFeedback}
        >
          Enviar
        </button>
      </main>
    </Modal>
  );
}
