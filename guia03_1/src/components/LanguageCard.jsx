import React from "react";
import Image from "next/image";
import styles from "./LanguageCard.module.css";

const LanguageCard = ({ language, onClick }) => {
  return (
    <div className={styles.card}>
      <Image src={language.imagen} alt={language.nombre} width={100} height={100} />
      <h3>{language.nombre}</h3>
      <button className={styles.button} onClick={onClick}>Ver más</button>
    </div>
  );
};

export default LanguageCard;
