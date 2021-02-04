import React from 'react';
// @ts-ignore
import styleContainer from "./../../common/styles/Container.module.css";
import Work from './work/Work';
// @ts-ignore
import styles from './Works.module.css'
const Works = () => {
return (
    <div className={styles.worksBlock}>
        <div className={`${styleContainer.container} ${styles.worksContainer}`}>
            <h2 className={styles.title}>My Works</h2>
            <div className={styles.works}>
                <Work preview={'https://res.cloudinary.com/cmscritic/image/upload/q_auto,f_auto/v1575487832/top-social-networking-sites_wmysmq.jpg'} title={'Social Network'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin est augue, pellentesque et magna in, vestibulum pharetra justo.'}/>
                <Work preview={'https://images-na.ssl-images-amazon.com/images/I/61coGKMe0GL._AC_SL1500_.jpg'} title={'Counter'} description={'Etiam ullamcorper magna at purus ultrices tristique. Nulla cursus elementum sodales. Integer vitae tristique eros.'}/>
                <Work preview={'https://dhtmlx.com/docs/products/dhtmlxTodo/images/todolist-screen-1.png'} title={'Todo List'} description={'Etiam tellus urna, rhoncus sed purus vel, blandit ultricies mi. Duis quis interdum mauris, eget porta massa. '}/>
            </div>
        </div>
    </div>
)
}
export default Works