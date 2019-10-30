import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
//import LandingBody from './LandingBody/LandingBody';
// import '../../App.css';
import styles from './LandingPage.module.css';

class Landing extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <div className={styles.landingGrid}>              
                       <div className={styles.picContainer}> 
                        <div className={styles.picImg}></div>                          
                        {/* <img
                            src={require('../../pics/window.JPG')}
                            alt="pic"
                            className={styles.picImg}
                        /> */}
                       </div>
                        <span className={styles.author}>Sarmun Bustillo</span>
                        <div className={styles.bannerText}>
                            <h1>Junior Web Developer</h1>
                            <hr/>
                            <p>HTML/CSS | JavaScript | React</p>                           
                            <div className={styles.socialLinks}>
                                <a href="https://github.com/Sarmunbustillo" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square"  aria-hidden="true" />
                                </a>                                
                            </div>
                        </div>                    
                </div>                 
                
            </div>
        );
    }
};

export default Landing;