import React from 'react';
import styles from './PromptBuddy.module.css';
import { TbPrompt } from 'react-icons/tb';

const PromptBuddy = () => {

    return (
        <div className={styles.wrapper} id="icon512">
                <TbPrompt className={styles.icon} />
        </div>
    )
}

export { PromptBuddy };