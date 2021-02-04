import React, {useState} from 'react';

// @ts-ignore
import styles from './Work.module.css'
const Work = (props) => {
 const [hovered, setHovered] = useState(false)

return (
    <div className={styles.work}>
      
       <div className={styles.preview} style={{ backgroundImage: `url(${props.preview})` }} onMouseEnter={()=>{setHovered(true)}} > {
      hovered? <button className={styles.btn} ><a href='http://www.bio.bsu.by/news/'>Show</a></button> :null}</div>
     <div className={styles.description}><h3>{props.title}</h3>
       <span >{props.description}</span> </div>  
    </div>
)
}
export default Work