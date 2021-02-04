import React from "react";
// @ts-ignore
import styles from "./main.module.css";
// @ts-ignore
import styleContainer from "./../../common/styles/Container.module.css";
const Main = () => {
  return (
    <div className={styles.mainBlock}>
      <div className={styleContainer.container}>
        <div className={styles.greeting}>
          <span>Hi There</span>
          <h1>I am SHREK</h1>
          <p>Frontend Developer</p>
        </div>
        <div className={styles.photo}><img src='http://pngimg.com/uploads/shrek/shrek_PNG9.png'/></div>
      </div>
    </div>
  );
};
export default Main;
