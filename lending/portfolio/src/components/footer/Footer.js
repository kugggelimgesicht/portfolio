import React from 'react';
// @ts-ignore
import styleContainer from "./../../common/styles/Container.module.css";

// @ts-ignore
import styles from './Footer.module.css'
const Footer = () => {
return (
    <div className={styles.footerBlock}>
        <div className={`${styleContainer.container} ${styles.footerContainer}`}>
            <h2 className={styles.title}>Shrek</h2>
            <div className={styles.social}>
              <div><img src='https://image.flaticon.com/icons/png/512/25/25684.png'></img></div>
              <div><img src='https://image.flaticon.com/icons/png/512/25/25684.png'></img></div>
              <div><img src='https://image.flaticon.com/icons/png/512/25/25684.png'></img></div>
              <div><img src='https://image.flaticon.com/icons/png/512/25/25684.png'></img></div>
            </div>
            <p>© 2019 All Rights Reserved.</p>
        </div>
    </div>
)
}
export default Footer