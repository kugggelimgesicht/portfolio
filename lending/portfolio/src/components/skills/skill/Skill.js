import React from 'react';

// @ts-ignore
import styles from './Skill.module.css'
const Skill = (props) => {
return (
    <div className={styles.skill}>
       <div className={styles.icon}></div>
       <h3>{props.title}</h3>
       <span className={styles.description}>{props.description}</span>
    </div>
)
}
export default Skill