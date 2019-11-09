import React from 'react';

import styles from './LandingPage.module.css';


const Landing = () =>  {   
    // const [color, setColor] = useState(styles.picContainer);
    
    // const onScrollHandler = () => {
    //     if( window.scrollY > 700) {
    //         console.log('> 20')
    //         setColor(styles.blackish)
    //         console.log('aaaaaaaaaaaaaaa', color);    
    //     }
    //     else {
    //         console.log ('mpeee')
    //         setColor(styles.picContainer)
    //         console.log(color);
    //     }
    // }
    // useEffect(() => {
    //     window.addEventListener('scroll', onScrollHandler);
        
    //     return () => {
    //         window.removeEventListener('scroll', onScrollHandler);
    //     }
    // },)

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