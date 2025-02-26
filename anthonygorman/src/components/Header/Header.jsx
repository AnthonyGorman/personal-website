import React from "react";
import { useState } from "react";
import styles from  "./Header.module.css";
import { Link } from "react-router-dom";
import MyIcon from "../../assets/MyIcon/MyIcon";
function Header() {
  const [theme, setTheme] = useState('retro');

  const switchTheme = (newTheme) => {
    document.documentElement.setAttribute('data-theme', newTheme);
    setTheme(newTheme);
  };

  const myName = "Anthony Gorman"
  return (
    <div className={styles.header}>
      <table className={styles.table}>
        <tbody>
          <tr>
            <th className={styles.leftEntry}>
            <Link to="/" className={styles.nameButton}>{myName}</Link> 
            <MyIcon />
            </th>
            <th className={styles.rightEntry}>
              <Link to="/">Home</Link>
              <span className={styles.divider}> | </span>
              <Link to="/poetry">Poetry</Link>
              <span className={styles.divider}> | </span>
              <Link to="/resume">Resume</Link>
                <span className={styles.themeLabel}> | Theme:</span>
                <select
                  value={theme}
                  onChange={(e) => switchTheme(e.target.value)}
                  className={styles.themeDropdown}
                >
                  <option value="retro">Retro</option>
                  <option value="vegas">Vegas</option>
                  <option value="classic">Classic</option>
                  <option value="sarah">Sarah</option>
                </select>              
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Header