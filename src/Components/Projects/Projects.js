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
                        description={'This Porfolio'}
                    >Portfolio
                    </Cards>
                    {/* // project 2 */} 
                    <Cards
                        background={styles.burgersHooks}
                        linkDemo={"https://sarmunbustillo.github.io/Dylans-Burgers-HOOKS/"}
                        description={'Using HOOKS'}
                    >Dylan's Burgers
                    </Cards>
                    {/* // project 3 */}
                    <Cards
                        background={styles.burgersRedux}
                        linkDemo={"https://sarmunbustillo.github.io/Dylans-Burger-REDUX/"}
                        description={'Using REDUX'}
                    >Dylan's Burgers
                    </Cards>
                    {/* // project 4 */}
                    <Cards                        
                        background={styles.cookIt}                        
                        linkDemo={"https://sarmunbustillo.github.io/CookIt"}
                        description={'Recipe finder......'}
                    >CookIT!
                    </Cards>
                    {/* // project 5 */}
                    <Cards                        
                        background={styles.gridTeplate}                        
                        linkDemo={"https://sarmunbustillo.github.io/CSS-grid-responsive-Layout/"}
                        description={'CSS-grid'}
                    >Responsive Layout
                    </Cards>
                    {/* // project 6 */}
                    <Cards
                        background={styles.budgetCalculator}                        
                        linkDemo={"https://sarmunbustillo.github.io/budget-calculator/"}
                        description={'Calculate your budget and dynamically see the percentages'}
                    >Budget Calculator
                    </Cards>
              
                    
                    
                    
                </div>
            
            </div>
        </div>      
    );
}

export default Projects;