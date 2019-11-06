import React, {useEffect  } from 'react';

import styles from './LandingPage.module.css';


const Landing = () =>  {   
    let   
    const onScrollHandler = () => {
        if( window.scrollY > 20) {
            console.log('> 20')

           const container = document.querySelector('stylespicContainer');  

            container.classList.toggle('blackish');
            
        }
        else {
            console.log ('mpeee')
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', onScrollHandler)
       
    },)

    return (                   
        <div className={styles.landingGrid}>           
                <div className={styles.picContainer}></div>
                <span className={styles.author} id="sss">Sarmun Bustillo</span>
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
    );    
};


export default Landing;