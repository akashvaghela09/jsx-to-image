import React from 'react';
import styles from './WikipediaDarkMode.module.css';
import { BsWikipedia } from 'react-icons/bs';

const WikipediaDarkMode = () => {

    return (
        <div className={styles.wrapper} id="icon512">
                <BsWikipedia className={styles.icon} />
        </div>
    )
}

export { WikipediaDarkMode };