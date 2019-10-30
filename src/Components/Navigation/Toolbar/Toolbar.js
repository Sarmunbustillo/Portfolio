import React from 'react';
import { Link } from "react-router-dom";

import styles from './Toolbar.module.css'
import NavigationItems from '../NavigationItems/NavigationItems';
import Drawertoggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const Toolbar = (props) => {
    return (
        <header >
            {/* <header className={styles.toolbar}>             */}
            {/* <Drawertoggle clicked={props.DraweToggleClicked}/>
            <Link to="/"><div className={styles.home}>Home</div></Link>          
           <nav className={styles.desktopOnly}>
               <NavigationItems/>
           </nav> */}
            <div className={styles.navigation}>
                <input type="checkbox" className={styles.navCheckbox} id="navi-toggle" />
                <label for="navi-toggle" className={styles.navButton}>
                    <span className={styles.navIcon}>&nbsp;</span>
                </label>
                <div className={styles.navBackground}>&nbsp;</div>
                <nav className={styles.navNav}>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}><a href="#" className={styles.navLink}>wassap</a></li>
                        <li className={styles.navItem}><a href="#" className={styles.navLink}>lollll</a></li>
                        <li className={styles.navItem}><a href="#" className={styles.navLink}>magola</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Toolbar;
