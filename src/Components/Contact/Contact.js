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
        text-align: center;
        display: flex;
        flex-flow: column;
        

         @media(max-width: 499px) { 
            height: 100%;
            top: -35%
         }       
    `;

    const Title = styled.h2`
        display: inline-block;
        font-size: 3.5vw;
        color: white;
        text-transform: uppercase;
        text-shadow: 2px 5px 10px black;
        margin-top: 5vh; 
        transition: font-size .2s ease-in;

        @media(max-width: 499px) { 
            font-size: 6vw;
            margin-top: 1vh;
            margin-bottom:  1vh;

         }
    `;

    const ContactDetailsWrapper = styled.div`
        width: 90%;
        align-self: center;
        display: flex;   
        margin-top: 3vh;
        transition: all .5s ease-in;
  
        
         @media(max-width: 499px) { 
            flex-flow: column;
            margin: 0;  
            padding: 0;              
         }

        @media only screen and (min-width: 500px) and (max-width: 799px) {
            flex-flow: column;
            margin: 0;  
            padding: 0;   
        }
        
    `;

    const ContactDetails = styled.p`
        font-size: 1.5vw;
        color: white;       
        margin: 1vw;
        flex: 1;
        transition: font-size .2s ease-in;
        
        /* halfscreen / ipad */
        @media only screen and (min-width: 800px) and (max-width: 1100px) {
            font-size: 1.8vw;
            padding: 0;
        }

        @media only screen and (min-width: 500px) and (max-width: 799px) {
            font-size: 2.3vw;
            margin: 1.5vh;
        }

       @media(max-width: 499px) { 
            font-size: 3vw;
            padding: 0;
         }
       
        
        span {
             text-transform: uppercase;             
        }
    `;

    return (            
      <Wrapper>
          <Skewed>
            <Title><strong>Contact</strong></Title>
            <ContactDetailsWrapper>
                <ContactDetails><span><strong>email:</strong></span> sarmunbustillo@hotmail.com  </ContactDetails>
                <ContactDetails><span><strong>Phone:</strong></span> 0 152 23990484  </ContactDetails>
            </ContactDetailsWrapper>
            <ContactDetailsWrapper >
                    <ContactDetails ><span><strong>Facebook:</strong></span> Sarmun.bustillo</ContactDetails>
                <ContactDetails><span><strong>Twitter:</strong></span> @Sarmunbustillo  </ContactDetails>
            </ContactDetailsWrapper>             
          </Skewed>
      </Wrapper>
    );

};

export default Contact;