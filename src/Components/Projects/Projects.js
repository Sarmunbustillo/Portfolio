import React, { Component } from 'react';
import styles from './Projects.module.css';
import Cards from './Cards/Cards';


 const Projects = () => {           
       return (  
           <div className={styles.wrapperProject}>
            <div className={styles.mainWrapper}>                   
                <div className={styles.wrapper}>
                    {/* // project 1 */}
                    <Cards
                        cardtitle={styles.javaScript}
                        link={"urlgithub"}
                        description={<p>Recipe finder......
                                <br></br>
                            <br></br>
                        </p>}
                    >CookIT!
                    </Cards>
                    {/* // project 2 */}
                    <Cards
                        cardtitle={styles.javaScript}
                        description={<p>Build, Customize and order a Burger Online!</p>}
                    >Dylan's Burger
                        </Cards>
                    {/* // project 3 */}
                    <Cards
                        cardtitle={styles.javaScript}
                        description={<p>Calculate your budget and dynamically see the percentages </p>}
                    >Budget Calculator
                        </Cards>
                </div> 
                <div className={styles.wrapper}>
                    {/* // project 4 */}
                    <Cards cardtitle={styles.react}>React Project #1</Cards>
                    {/* // project 5 */}
                    <Cards cardtitle={styles.react}>React Project #2</Cards>
                    {/* // project 6 */}
                    <Cards cardtitle={styles.react}>React Project #3</Cards>
                </div>
            
            </div>
        </div>  
    );
}

export default Projects;