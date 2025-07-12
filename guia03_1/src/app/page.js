'use client'
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import LanguageCard from "@/components/LanguageCard";
import Modal from "@/components/Modal";
import languagesData from "@/data/languages.json";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const openModal = (language) => {
    setSelectedLanguage(language);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedLanguage(null);
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Lenguajes de Programación</h1>
      <div className={styles.grid}>
        {languagesData.map((lang) => (
          <LanguageCard key={lang.id} language={lang} onClick={() => openModal(lang)} />
        ))}
      </div>
      {modalOpen && (
        <Modal onClose={closeModal}>
          <h2>{selectedLanguage.nombre}</h2>
          <p>{selectedLanguage.descripcion}</p>
        </Modal>
      )}
    </main>
  );
}
