import React from 'react';
import styled from 'styled-components';
import MeImage from '../../pics/turtle.JPG';

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

    const ContentWrapper = styled.div`
        position: relative;
        top: 100%;
        left: 50%;    
        width: 90%;
        height: 80%;
        transform: skewY(6deg)  translateY(-100%) translateX(-50%);
        border: 2px solid #6d7a69;
        padding: 1vh;
        display: flex;
    `;
    const Img = styled.div`
        height: 100%;
        width: 100%;
        background-image: url(${MeImage});
        background-size: cover;
    `;
    const TextWrapper = styled.div`
        width: 100%;
    `;
    const Title = styled.h2`
        position: absolute;
        
    `;
    
    return (        
        <Wrapper>  
            <Skewed>
                <ContentWrapper>
                    <Img />
                    <TextWrapper></TextWrapper>
                </ContentWrapper>  
            </Skewed> 
        </Wrapper>
        
    );    
};

export default About;