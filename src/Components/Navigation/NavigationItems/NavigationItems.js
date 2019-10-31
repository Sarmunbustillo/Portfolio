import React from 'react';
import styles from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => {
    return (
        <ul className={styles.navigationItems}>
        <NavigationItem link="/">Home</NavigationItem> 
           <NavigationItem link="/Resume">Resume</NavigationItem>
           <NavigationItem link="/Aboutme">About</NavigationItem>
           <NavigationItem link="/Projects">Projects</NavigationItem>
           <NavigationItem link="/Contact">Contact</NavigationItem> 
        </ul>
    )
}

export default NavigationItems
