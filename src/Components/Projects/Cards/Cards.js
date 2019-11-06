import React from 'react';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu } from 'react-mdl';
import Aux from '../../../hoc/Auxilary/Auxilary';
import styles from './Cards.module.css';
import {Link} from 'react-router-dom';

const Cards = (props) => {     
    const openNewTab = (url) => {
        let win = window.open(url, '_blank');          
    }
    
    return (
        <Aux>           
            <div className={styles.Card} onClick={() => openNewTab(props.linkDemo)}> 
                <div className={props.background}></div>         
                <div className={styles.CardTitle}><span className={styles.title}><strong>{props.children}</strong></span></div>                
                <div className={styles.cardDescription}><span className={styles.description}>{props.description}</span></div>                                           
            </div>           
        </Aux>
        
    )
}

export default Cards
