import React from 'react';
// @ts-ignore
import styles from './Nav.module.css'
const Nav = () => {
return (
    <div className={styles.nav}>
        <a href="">Home</a>
        <a href="">Skills</a>
        <a href="">Projects</a>
        <a href="">Contacts</a>
    </div>
)
}
export default Nav