import React from 'react';
import styles from './NavigationItem.module.css';
import { Link } from "react-router-dom";

const NavigationItem = (props) => (
    
    <li className={styles.navigationItem}>
        <Link 
            className={styles.itemLink}
            to={props.link}>            
            {props.children}
        </Link>        
    </li>
);

export default NavigationItem