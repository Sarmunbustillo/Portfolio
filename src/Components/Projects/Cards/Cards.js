import React from 'react';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu } from 'react-mdl';
import Aux from '../../../hoc/Auxilary/Auxilary';
import styles from './Cards.module.css';
import {Link} from 'react-router-dom';

const Cards = (props) => {  
    console.log(props.background);  
    return (
        <Aux>
            <div  className={styles.Card}> 
                <div className={props.background}></div>         
                <div className={styles.CardTitle}><span className={styles.title}>{props.children}</span></div>                
                <div><span className={styles.CardText}>{props.description}</span></div>               
                <div className={styles.linkContainer}>
                    <a href={props.linkGit} target="_blank"><span className={styles.cardLinks}>Github</span></a>
                    <a href={props.linkDemo} target="_blank"> <span className={styles.cardLinks}>demo</span></a>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
                </div>                                 
            </div>
        </Aux>
        
    )
}

export default Cards
