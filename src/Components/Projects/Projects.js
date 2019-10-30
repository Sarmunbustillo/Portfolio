import React, { Component } from 'react';
import {Tabs, Tab} from 'react-mdl';
import styles from './Projects.module.css';
import Cards from './Cards/Cards';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0};
    };    
     
    toggleCategories = () => {             
        if (this.state.activeTab === 0) {
            return (
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
            )
        } 
        else if (this.state.activeTab === 1) {
            return(
                <div className={styles.wrapper}>
                    {/* // project 1 */}
                    <Cards cardtitle={styles.react}>React Project #1</Cards>
                    {/* // project 2 */}
                    <Cards cardtitle={styles.react}>React Project #2</Cards>
                    {/* // project 3 */}
                    <Cards cardtitle={styles.react}>React Project #3</Cards>
                </div>
                )
            }
        else if (this.state.activeTab === 2) {
            return (
                <div className={styles.wrapper}>
                    {/* // project 1 */}
                    <Cards cardtitle={styles.react}>CSS-Grid/Flexbox Project #1</Cards>
                    {/* // project 2 */}
                    <Cards cardtitle={styles.react}>CSS-Grid/Flexbox Project #2</Cards>
                    {/* // project 3 */}
                    <Cards cardtitle={styles.react}>CSS-Grid/Flexbox Project #3</Cards>
                </div>
            )
        } 
    };     
    
    render() {        
        return (
            
            <div className={styles.mainWrapper}>
                <Tabs 
                    className={styles.Tabs}
                    activeTab={this.state.activeTab} 
                    onChange={(tabId) => this.setState({ activeTab: tabId })}
                    ripple>
                    <Tab>JavaScript</Tab>
                    <Tab>React</Tab>
                    <Tab>HTML/CSS</Tab>                    
                </Tabs>        
                
                <div>
                    {this.toggleCategories()}                    
                </div>            
            </div>
        );
    }
};

export default Projects;