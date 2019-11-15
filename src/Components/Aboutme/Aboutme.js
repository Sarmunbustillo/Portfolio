import React from 'react';
import styled from 'styled-components'

const About = () => {    
    const Wrapper = styled.div`
        height: 100vh;
        position: relative;    
        z-index: -95;
        background-color:black ;      
        
        @media(max-width: 499px) { 
            height: 70vh
         }
       
    `;

    const Skewed = styled.div`
        position: relative;
        top: -9%; 
        left: 0;
        height: 80%;
        width: 100%;
        transform: skewY(-6deg)  translateY(-3%);
        background-color: black;           
        z-index: -100 ;   
        

        ::before {
            content: "";
            position: absolute;
            top: 0;
            left: 50%;
            height: 100%;
            width: 95%;        
            box-shadow: inset 0px 0px 46px  black;
            background-color: #ffff;                
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