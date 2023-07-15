import React from 'react';
import styles from './WikipediaDarkMode.module.css';
import { FcWikipedia } from 'react-icons/fc';

const WikipediaDarkMode = () => {
    return (
        <div className={styles.wrapper}>
            <FcWikipedia className={styles.icon}/>
            {/* <p className={styles.text}>Dark Mode</p> */}
        </div>
    )
}

export { WikipediaDarkMode };