import styles from "./page.module.css";
import React from "react";
import Form from "@/components/Form";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="App">
        <div>
          <p>Lista de compras</p>
          <Form />
        </div>
      </div>
    </main>
  );
}
