import React from 'react';
import styles from './NavigationItem.module.css';

const NavigationItem = (props) => {
    return(
    <li className={styles.navigationItem}>
        <a 
            onClick={props.checked}
            className={styles.itemLink}
            href={props.link}>            
            {props.children}
        </a>        
    </li>
    )
};

export default NavigationItem