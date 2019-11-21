import React from 'react';
import styles from './Projects.module.css';
import Cards from './Cards/Cards';;



 const Projects = () => { 
    

    return (  
        <div className={styles.wrapperProject}>
            <span className={styles.title}><strong>Projects</strong></span>
            <div className={styles.mainWrapper}>                   
                <div className={styles.wrapper}>
                    {/* // project 1 */}                     
                    <Cards
                        background={styles.portfolio}
                        linkDemo={"https://github.com/Sarmunbustillo/porfolio"}
                        description={'In this project I used: React.js, CSS-Modules and Styled Components'}
                        >Portfolio
                    </Cards>
                    {/* // project 2 */} 
                    <Cards
                        background={styles.burgersHooks}
                        linkDemo={"https://sarmunbustillo.github.io/Dylans-Burgers-HOOKS/"}
                        description={'In this version of the project the main technologies I used are: React.js with HOOKS, CSS-Modules and Firebase.'}
                        // technologies={'In this project I used: React.js, CSS-Modules, Firebase'}
                    >Dylan's Burgers
                    </Cards>
                    {/* // project 3 */}
                    <Cards
                        background={styles.burgersRedux}
                        linkDemo={"https://sarmunbustillo.github.io/Dylans-Burger-REDUX/"}
                        description={'This version has the same functionality as the previous one, but it manages the state with REDUX Instead of with Hooks'}
                    >Dylan's Burgers
                    </Cards>
                    {/* // project 4 */}
                    <Cards                        
                        background={styles.cookIt}                        
                        linkDemo={"https://sarmunbustillo.github.io/CookIt"}
                        description={'In this project I Used: Vanilla JavaScript, Webpack and axios for fetching data'}
                    >CookIT!
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
                        background={styles.budgetCalculator}                        
                        linkDemo={"https://sarmunbustillo.github.io/budget-calculator/"}
                        description={'in this project I used: Vanilla JavaScript and BEM to organize the css files '}
                    >Budget Calculator
                    </Cards>
              
                    
                    
                    
                </div>
            
            </div>
        </div>      
    );
}

export default Projects;