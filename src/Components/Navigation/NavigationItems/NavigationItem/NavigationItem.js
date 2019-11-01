import React from 'react';
import styles from './NavigationItem.module.css';
import { Link } from "react-router-dom";

const NavigationItem = (props) => {
    return(
    <li className={styles.navigationItem}>
        <Link 
            onClick={props.checked}
            className={styles.itemLink}
            to={props.link}>            
            {props.children}
        </Link>        
    </li>
    )
};

export default NavigationItem