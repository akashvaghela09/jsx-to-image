import React from 'react';
import styles from './PromptBuddy.module.css';
import { TbPrompt } from 'react-icons/tb';


const PromptBuddy = () => {
    return (
        <div className={styles.wrapper}>
            <TbPrompt className={styles.icon}/>
            <p className={styles.text}>Prompt Buddy</p>
        </div>
    )
}

export { PromptBuddy };