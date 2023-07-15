import React from 'react';
import styles from "./PromptBuddyPromo.module.css";
import prompt from "../../../assets/prompt.png";
const PromptBuddyPromo = () => {
    return (
        <div className={styles.wrapper} id="promo-poster">
                <img src={prompt} alt="prompt" style={{width: "120px"}}/>
                <p className={styles.text}>Prompt Buddy</p>
        </div>
    )
}

export { PromptBuddyPromo };