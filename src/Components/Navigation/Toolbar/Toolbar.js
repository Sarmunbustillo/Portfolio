import React, { useState} from 'react';


import styles from './Toolbar.module.css'
import NavigationItems from '../NavigationItems/NavigationItems';


const Toolbar = (props) => {
    const [showBackground, setShowBackground] = useState(false)

    const backgroundVisibilityHandler = () => {
        setShowBackground(!showBackground);           
        
    };  
    

    return (
        <header >           
            <div className={styles.navigation} onClick={backgroundVisibilityHandler}>
                <input type="checkbox" className={styles.navCheckbox} id="navi-toggle" />
                <label htmlFor="navi-toggle" className={styles.navButton} >
                    <span className={styles.navIcon}>&nbsp;</span>
                </label>
                <div className={styles.navBackground}>&nbsp;</div>
                <nav className={styles.navNav}>
                    <NavigationItems/>                    
                </nav>
            </div>
        </header>
    )
}

export default Toolbar;
