import React from "react";
import styles from "./Resume.module.css";

const Resume = () => {
  return (
    <div className={styles.resumeContainer}>
      
      <section>
        <h2>Education</h2>
        <p><strong>Liberty University</strong> - B.S. Computer Science, B.S. Mathematics (08/2021 - 05/2025)</p>
        <p><strong>Hunter College</strong> - Incoming M.A. Mathematics (09/2025 - 05/2027)</p>
      </section>
      
      <section>
        <h2>Professional Experience</h2>
        <div className={styles.jobEntry}>
          <h3>Amazon Web Services - Software Engineer Intern (May 2024 - August 2024)</h3>
          <ul>
            <li>Developed a generative AI feature for AWS Glue.</li>
            <li>Implemented a chat modal for debugging AWS Glue job failures.</li>
            <li>Created automated rollbacks for CI/CD pipeline efficiency.</li>
          </ul>
        </div>
        <div className={styles.jobEntry}>
          <h3>Argonne National Laboratory - Science Intern (January 2023 - April 2023)</h3>
          <ul>
            <li>Integrated object detection models for vehicles in various conditions.</li>
            <li>Optimized evaluation scripts for efficiency.</li>
            <li>Wrote tutorials on object detection models.</li>
          </ul>
        </div>
      </section>
      
      <section>
        <h2>Clubs</h2>
        <p><strong>AI Competition Club</strong> - President (May 2023 - May 2024)</p>
        <p><strong>Kappa Mu Epsilon</strong> - Member (October 2023 - Present)</p>
      </section>
      
      <section>
        <h2>Technical Skills</h2>
        <p><strong>Languages:</strong> C/C++, Python, JavaScript, Go, Bash, Java, C#, SQL, MATLAB, x86 Assembly</p>
        <p><strong>Technologies:</strong> React, Jest, Cypress, Pandas, Seaborn, Git, Docker</p>
      </section>
      
      <section>
        <h2>Miscellaneous</h2>
        <p><strong>Honors Program:</strong> Maintained 3.5+ GPA, completed an honors thesis.</p>
        <p><strong>Volunteering:</strong> 200+ hours in youth ministry, food pantries, inner-city outreach.</p>
      </section>
    </div>
  );
};

export default Resume;
