import React from 'react';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu } from 'react-mdl';
import Aux from '../../../hoc/Auxilary/Auxilary';
import styles from './Cards.module.css';
import {Link} from 'react-router-dom';

const Cards = (props) => {
    return (
        <Aux>
            <Card shadow={5} className={styles.Card}>              
                     <CardTitle className={props.cardtitle}>{props.children}</CardTitle>                
                    <CardText className={styles.CardText}>
                        {props.description}
                    </CardText>               
                <CardActions border className={styles.cardActions}>
                    <Link to={props.link}> <Button colored><span style={{color: 'black', fontWeight: 'bold'}}>Github</span></Button></Link>
                    <Button colored><span style={{ color: 'black', fontWeight: 'bold'}}>demo</span></Button>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
                 </CardActions>
                <CardMenu className={styles.cardMenu}></CardMenu>                 
            </Card>
        </Aux>
        
    )
}

export default Cards
