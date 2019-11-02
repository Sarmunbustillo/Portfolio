import React, {Component}from 'react';
import styles from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar';



class Layout extends Component {
    render() {
        return (
            <div className={styles.layout}>
                <Toolbar DraweToggleClicked={this.toggleSideDrawer} />            
            </div>
        )
    }    
}

export default Layout;
