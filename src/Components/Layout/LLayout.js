import React, {Component}from 'react';
import styles from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


class Layout extends Component {
    state ={
        showSideDrawer: false
    };

    SideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
        //console.log('[SideDrawerClosedHandler] i am false');
    };

    toggleSideDrawer = () => {
        this.setState((prevState) => {
            //console.log('[toggleSideDrawer] i ' + !prevState.showSideDrawer);
            return { showSideDrawer: !prevState.showSideDrawer};

        });
    };

    render() {
        return (
            <div className={styles.layout}>
                <Toolbar DraweToggleClicked={this.toggleSideDrawer} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.SideDrawerClosedHandler} />
            </div>
         )
    }    
}

export default Layout;
