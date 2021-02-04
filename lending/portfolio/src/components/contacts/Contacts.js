import React from 'react';
// @ts-ignore
import styleContainer from "./../../common/styles/Container.module.css";

// @ts-ignore
import styles from './Contacts.module.css'
const Contacts = () => {
return (
    <div className={styles.contactsBlock}>
        <div className={`${styleContainer.container} ${styles.formContainer}`}>
        <h2 className={styles.title}>Contact Me</h2>
           <form>
               <input type='text' placeholder='name'/>
               <input type='text' placeholder='email'/>
               <textarea placeholder='your message'/>
               <button type='submit' className={styles.sendBtn}>send message</button>

           </form>
        </div>
    </div>
)

}

export default Contacts