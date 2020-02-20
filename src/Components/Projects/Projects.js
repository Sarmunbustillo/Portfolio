import React from 'react';
import styles from './Projects.module.css';
import Cards from './Cards/Cards';



 const Projects = () => { 
    

    return (  
        <div className={styles.wrapperProject}>
            {/* <span className={styles.title}><strong>Projects</strong></span> */}
            <div className={styles.mainWrapper}>                   
                <div className={styles.wrapper}>
                    {/* // project 1 */}                     
                    <Cards
                        background={styles.burgersHooks}
                        linkDemo={"https://sarmunbustillo.github.io/Dylans-Burgers-HOOKS/"}
                        description={'Create a custom burger, sign in and enter your contact data for delivery. Used: React.js with HOOKS, CSS-Modules and Firebase.'}
                        // technologies={'In this project I used: React.js, CSS-Modules, Firebase'}
                    >Dylan's Burgers
                    </Cards>
                    {/* // project 2 */}                     
                    <Cards                        
                        background={styles.cookIt}                        
                        linkDemo={"https://sarmunbustillo.github.io/CookIt"}
                        description={'Find recipes from all around the world! Used: Vanilla JavaScript, HTML/CSS, BEM, Webpack and axios API for fetching data'}
                    >CookIT!
                    </Cards>   
                    {/* // project 3 */}
                    <Cards
                        background={styles.budgetCalculator}                        
                        linkDemo={"https://sarmunbustillo.github.io/budget-calculator/"}
                        description={'Manage your budget. Used: Vanilla JavaScript,  HTML/CSS and BEM'}
                    >Budget Calculator
                    </Cards>                                    
                    {/* // project 4 */}
                    <Cards
                        background={styles.portfolio}
                        linkDemo={"https://github.com/Sarmunbustillo/porfolio"}
                        description={'My own Portfolio for work and to practice. Used: React.js, CSS-Modules and Styled Components'}
                        >Portfolio
                    </Cards>                                     
                    {/* // project 5 */} 
                    <Cards                        
                        background={styles.gridTeplate}                        
                        linkDemo={"https://sarmunbustillo.github.io/CSS-grid-responsive-Layout/"}
                        description={'CSS-grid with a responsive layout'}
                    >Responsive Layout
                    </Cards>                    
                    {/* // project 6 */}
                    <Cards
                        background={styles.burgersRedux}
                        linkDemo={"https://github.com/Sarmunbustillo/Dylans-Burger-REDUX"}
                        description={'Same functionality as the previous one, but it manages the state with REDUX Instead of with Hooks'}
                    >Dylan's Burgers
                    </Cards>
              
                    
                    
                    
                </div>
            
            </div>
        </div>      
    );
}

export default Projects;