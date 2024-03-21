import React from "react";
import styles from  "./Header.module.css";

function Header() {
  const myName = "Anthony Gorman"
  const github = "https://github.com/AnthonyGorman"
  return (
    <div className={styles.header}>
      <table className={styles.table}>
          <tr>
            <th className={styles.leftEntry}>
              {myName}  
            </th>
            <th className={styles.rightEntry}>
              <a href={github} style={{color: "inherit"}}>Github</a>
            </th>
          </tr>
      </table>
    </div>
  )
}

export default Header
