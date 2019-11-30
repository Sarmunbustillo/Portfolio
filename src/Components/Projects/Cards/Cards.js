import React from 'react';
import Aux from '../../../hoc/Auxilary/Auxilary';
import styles from './Cards.module.css';

const Cards = (props) => {     
    const openNewTab = (url) => {
     window.open(url, '_blank');          
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
