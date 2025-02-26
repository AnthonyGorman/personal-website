
import React from "react";
import styles from  "./Body.module.css";
import { Link } from "react-router-dom";

function Body() {
  return (
    <div className={styles.body}>
        <h1 className={styles.h1}>Welcome!</h1>
        <p className={styles.text}>
          My name is Anthony Gorman; This website markets my 
          <Link to="/poetry"> poetry</Link>,
          highlights my programming 
          <Link to="/resume"> talents</Link>, 
          and provides a space for me to share my thoughts. I decided to make my website look like a retro terminal 
          to pay homage to one of my favorite video game franchises: "Fallout".
        </p>
        <h1 className={styles.h1}>About</h1>
        <p className={styles.text}>
          I'm from Joliet, IL. Most Sundays growing up you could find me watching a Chicago Bears 
          football game with my family and eating an italian beef sandwich (that's a popular food in Chicago). This fall,
          I'm headed to New York City to work for Amazon Web Services and study for a Master's in Mathematics 
          at Hunter College.
        </p>
        <p className={styles.text}>
          I began writing poetry when I was a sophomore in college. None of my work is published yet,
          but now that I've written over 100 poems, my goal is to self-publish them. Stay tuned, I plan
          on getting a hold of an editor soon!
        </p>
        <p className={styles.text}>
          I am also a Christian! Back home, I attend Cornerstone Church of Joliet.
        </p>
        <h2 className={styles.h2}>
          [hobbies]
        </h2>
        <p className={styles.text}>
          When not writing poems, you may find me playing pool, board games, or watching movies with 
          my friends. I also enjoy playing video games, but it's hard to play video 
          games when you're constantly in front of computer screen for a living.
        </p>
        <p className={styles.text}>
          My favorite TV show is "How I Met Your Mother". I definitely relate to Ted when people tune out 
          his architecture tangents, since people also hate hearing about mathematics. When it comes to movies,
          I have watched Monty Python's "The Holy Grail" over and over again.
        </p>
        <p className={styles.text}>
          Clearly, computer RPGs hold a special place in my heart. I really enjoyed Obsidian's "The Outer Worlds",
          and I have probably dumped years into playing "The Elder Scrolls III: Morrowind".
          I also enjoy other relaxing games like "Stardew Valley" or "The Sims".
        </p>
        <h1>Contact me</h1>
        <p className={styles.text}>
          You can email me at anthony@anthonygormanpoetry.com. Feel free to send me a poem or ask any questions.
        </p>
    </div>
  )
}

export default Body
