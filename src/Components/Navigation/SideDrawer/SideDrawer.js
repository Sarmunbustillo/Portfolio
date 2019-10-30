import React from 'react';

import Backdrop from '../../UI/Backdrop/Backdrop';
import styles from './SideDrawer.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Aux from '../../../hoc/Auxilary/Auxilary';

const SideDrawer = (props) => {

    let attachClasses = [styles.SideDrawer, styles.Close];
    if (props.open) {
        attachClasses = [styles.SideDrawer, styles.Open];
    }

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachClasses.join(' ')}>
                <nav className={styles.Nav}>
                <NavigationItems /> 
                </nav>            
            </div>
        </Aux>
    )
}

export default SideDrawer;
