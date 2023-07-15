import React from 'react';
import styles from "./WikiPromo.module.css";
import wiki from "../../../assets/wiki.png";
const WikiPromo = () => {
    return (
        <div className={styles.wrapper} id="promo-poster">
                <img src={wiki} alt="wiki" style={{width: "120px"}}/>
                <p className={styles.text}>Dark Mode</p>
        </div>
    )
}

export { WikiPromo };