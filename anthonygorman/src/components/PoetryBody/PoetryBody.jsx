import React from "react";
import styles from "./PoetryBody.module.css";
import Poem from "../Poem";

function PoetryBody() {
  return (
    <div className={styles.body}>
      <h1 className={styles.h1}>My Poetry</h1>
      <p className={styles.text}>
        Soon, I'll be self-publishing a book of my poetry.
        Here are a few of my poems to get you started (Copyright © 2025 Anthony Gorman).
      </p>
      <Poem title="Concrete"
            body={[
              "The TV is telling lies,",
              "but the trees have come alive.",
              "I chase my cat outside",
              "into the November night.",
              "",
              "The moonlight lands",
              "on grass clothed with ice",
              "like scattered stars",
              "burning bright.",
              "I lie down on the concrete",
              "and thank God for the sky.",
              "",
              "The trees have come alive,",
              "and tears fall from my eyes.",
              "",
              "I can't find my cat,",
              "but just like me,",
              "I think he wants to be outside.",
              "",
              "Away from the noise of the TV,",
              "and whoever I used to be",
              "inside."
            ]}
        >
      </Poem>
      <Poem title="Battle of Binary"
            body={[
              "Two identities:",
              "the product and the sum.",
              "A war of true and false-",
              "of zero and of one.",
              "Words determine warriors-",
              "the generals of binary.",
              "One wrong character",
              "Leads to a fatality."
            ]}
      >
      </Poem>
      <Poem title="Human Beings"
            body={[
              "human beings",
              "are like cigarrettes",
              "",
              "are like flowers",
              "are like stars",
              "",
              "they shine for a moment",
              "and then they dissappear",
              "",
              "the truth is:",
              "no matter who you are",
              "",
              "whether a cigarrette,",
              "a flower,",
              "or a star",
              "",
              "we all expire one day",
              "",
              "the question is:",
              "who will you be?",
              "",
              "are you a cigarrette,",
              "shining faintly with a flame?",
              "",
              "are you a flower,",
              "shining brightly with color?",
              "",
              "or are you a star?",
              "will you shine violently",
              "and explode",
              "before the end?"
            ]}
      >
      </Poem>
    </div>
  );
}

export default PoetryBody;
