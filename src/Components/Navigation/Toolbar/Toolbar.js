import React from 'react';

import styles from './Toolbar.module.css'
import NavigationItems from '../NavigationItems/NavigationItems';


const Toolbar = (props) => {  

    const backgroundVisibilityHandler = () => {        
       document.getElementById('navi-toggle').checked = false;
    };

    return (
        <header >           
            <div className={styles.navigation}>
                <input type="checkbox" className={styles.navCheckbox} id="navi-toggle"  />
                <label htmlFor="navi-toggle" className={styles.navButton} >
                    <span className={styles.navIcon}>&nbsp;</span>
                </label>
                <div className={styles.navBackground}>&nbsp;</div>
                <nav className={styles.navNav}>
                    <NavigationItems checked={backgroundVisibilityHandler}/>                    
                </nav>
            </div>
        </header>
    )
}

export default Toolbar;
