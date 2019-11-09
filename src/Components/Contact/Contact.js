import React, {  } from 'react';
import styled from 'styled-components'


const Contact = () => {
    const Wrapper = styled.div`
        height: 40vh;
        background-color: #d7d7d7;
        position: relative;  
        
        ::before{
            content: "";
            position: absolute;
            height: 100%;
            width: 100%;
            top: -30%;
            background-color: #d7d7d7; 
            transform: skewY(-6deg);      
            
        }
       @media(max-width: 499px) { 
            height: 30vh;
         }
    `;

    const Skewed = styled.div`
        position: relative;
        width: 80%;
        height: 110%;
        background-color: #eca208;
        top: -23%;
        left: 50%;
        transform: translateX(-50%);
        box-shadow: 0px 0px 30px 0px black;

         @media(max-width: 499px) { 
            height: 100%;
            top: -35%
         }

        
    `;

    return (            
      <Wrapper>
          <Skewed>

          </Skewed>
      </Wrapper>
    );

};

export default Contact;