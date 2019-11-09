import React from 'react';
import styles from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => {
    return (
        <ul className={styles.navigationItems}>
           <NavigationItem checked={props.checked} link="#">Home</NavigationItem>            
           <NavigationItem checked={props.checked} link="#projects">Projects</NavigationItem>
           <NavigationItem checked={props.checked} link="#aboutme">About</NavigationItem>
           <NavigationItem checked={props.checked} link="#contact">Contact</NavigationItem> 
        </ul>
    )
}

export default NavigationItems
