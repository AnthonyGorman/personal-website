import React from "react";
import styles from "./Poem.module.css";

const Poem = ({ title, body }) => {
  return (
    <div className={styles.poem}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.verse}>
        {body.map((line, index) => (
          <span key={index}>{line}<br /></span>
        ))}
      </div>
    </div>
  );
};

export default Poem;
