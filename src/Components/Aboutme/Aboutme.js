import React from 'react';
import styled from 'styled-components'

const About = () => {    
    const Wrapper = styled.div`
        height: 100vh;
        position: relative;    
        z-index: -95;
        background-color:black ;       
        

        /* ::after {
            content: "";
            position: absolute;
            top: -30%; 
            left: 0;
            height: 100%;
            width: 100%;
            background-image: linear-gradient(-4.5deg, black 12%, #d7d7d7 14.5%,  #d7d7d7 72%,black 75% );                       
            z-index: -100;
            clip-path: polygon(0% 0%, 100% -10%, 100% 85%, 0% 100% );
            z-index: -100 ;   
            box-shadow: inset 10px 10px 30px black;
        }   */
    `;

    const Skewed = styled.div`
        position: relative;
            top: -8%; 
            left: 0;
            height: 80%;
            width: 100%;
            transform: skewY(-6deg)  translateY(-3%);
            background-color: black;           
            z-index: -100 ;   
            

            ::before{
                content: "";
                position: absolute;
                top: 0;
                left: 50%;
                height: 100%;
                width: 95%;        
                box-shadow: inset 0px 0px 46px black;
                background-color: #d7d7d7;  
                z-index: -101;  
                transform: translateX(-50%);                
            }

            
    `;

    
    return (        
        <Wrapper>  
              <Skewed></Skewed> 
        </Wrapper>
        
    );    
};

export default About;