import React from 'react';
// @ts-ignore
import styleContainer from "./../../common/styles/Container.module.css";
import Skill from './skill/Skill';
// @ts-ignore
import styles from './Skills.module.css'
const Skills = () => {
return (
    <div className={styles.skillsBlock}>
        <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
            <h2 className={styles.title}>My Skills</h2>
            <div className={styles.skills}>
                <Skill title={'JS'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin est augue, pellentesque et magna in, vestibulum pharetra justo.'}/>
                <Skill title={'HTML/CSS'} description={'Etiam ullamcorper magna at purus ultrices tristique. Nulla cursus elementum sodales. Integer vitae tristique eros.'}/>
                <Skill title={'React'} description={'Etiam tellus urna, rhoncus sed purus vel, blandit ultricies mi. Duis quis interdum mauris, eget porta massa. '}/>
            </div>
        </div>
    </div>
)
}
export default Skills