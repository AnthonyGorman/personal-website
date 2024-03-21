import React from "react";
import styles from  "./Body.module.css";

function Body() {
  return (
    <div className={styles.body}>
        <h1 className={styles.h1}>Welcome!</h1>
        <p className={styles.text}>
          My name is Anthony Gorman. Welcome to the personal website that
          I built with the Create React App framework. The front-end 
          was made with JavaScript and CSS, while the back-end was
          written in Golang.
        </p>
        <h1 className={styles.h1}>About</h1>
        <p className={styles.text}>
          The place that I call home is Joliet, IL. Most Sundays 
          growing up you could find me watching a Chicago Bears 
          football game with my family and eating an Italian Beef.
        </p>
        <p className={styles.text}>
          
        </p>
        <h2 className={styles.h2}>
          [Testimony]
        </h2>
        <p className={styles.text}>
          Right around the time that I turned 16 my life changed in 
          a pretty dramatic way. During my freshman year of high school
          I did not have many friends. However, I met someone in my 
          History class who 
        </p>
    </div>
  )
}

export default Body