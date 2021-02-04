import React from 'react';
import Nav from './nav/Nav';
// @ts-ignore
import styles from './header.module.css'
const Header = () => {
return (
    <div className={styles.header}>
        <Nav/>
    </div>
)
}
export default Header