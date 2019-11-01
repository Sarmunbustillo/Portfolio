import React from 'react';
import styles from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => {
    return (
        <ul className={styles.navigationItems}>
           <NavigationItem checked={props.checked} link="/">Home</NavigationItem>            
           <NavigationItem checked={props.checked} link="/Aboutme">About</NavigationItem>
           <NavigationItem checked={props.checked} link="/Projects">Projects</NavigationItem>
           <NavigationItem checked={props.checked} link="/Contact">Contact</NavigationItem> 
        </ul>
    )
}

export default NavigationItems
