import React from 'react';
import styled from 'styled-components';
import MeImage from '../../pics/turtle.JPG';

const About = () => {
    const Wrapper = styled.div`
        height: 100vh;
        position: relative;
        z-index: -95;
        background-color:black ;
       font-family: 'Fugaz One', cursive;


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
        /* transform: skewY(-6deg)  translateY(-3%); */
        background-color: black;
        z-index: -100 ;

        ::before {
            content: "";
            position: absolute;       
            top: 0;
            left: 50%;
            height: 100%;
            width: 93%;
            box-shadow: inset 0px 0px 15px black;
            /* background-color: #d7d7d7; */
            background-color: black;
            z-index: -101;
            transform: translateX(-50%);
        }
    `;

    const ContentWrapper = styled.div`
        position: relative;       
        top: 110%;
        left: 50%;
        width: 90%;
        height: 80%;
        /* transform: skewY(6deg)  translateY(-120%) translateX(-50%); */
        transform:   translateY(-110%) translateX(-50%);
        padding: 1.5vh;
        display: flex;
        transition: all .5s ease-in;

         @media(max-width: 499px) {
            top: 50%;
            /* transform: skewY(6deg)  translateY(-50%) translateX(-50%); */
            transform: translateY(-50%) translateX(-50%);

         }
    `;

    const Img = styled.div`
        position: relative;
        height: 90%;
        width: 90%;
        background-image: url(${MeImage});
        background-size: cover;
        background-position-x: 60%;
        /* border-radius: 2%; */
        /* box-shadow: 0px 0px 5px lightgray; */
        transition: all .5s ease-in-out;
        overflow: hidden;

        @media(max-width: 499px) {
            display: none;
         }

    `;

    const TextWrapper = styled.div`
        width: 100%;
        display: flex;
        flex-flow: column;
        text-align: center;
        align-items: center;
        padding: 1vh;

    `;

    const Title = styled.h2`
        font-size:3vw;
        color:  #6d7a69;
        font-family: inherit;
        /* text-shadow: 1px 2px 8px black; */
        transition: font-size .3s ease-in-out;
        /* transform: skewY(-6deg); */
        margin-bottom:  5vh;
        transition: all .3s ease-in;

         @media only screen and (min-width: 800px) and (max-width: 1150px) {
            font-size : 5vw;
            margin-bottom:  4vh;

        }

        @media only screen and (min-width: 500px) and (max-width: 799px) {
            font-size : 6.5vw;
            margin-bottom:  4vh;

        }

       @media(max-width: 499px) {
           font-size: 10vw;
           margin-bottom:  4vh;

         }
    `;

    const Text = styled.p`
        font-size: 1.5vw;
        color:  #6d7a69;
        font-family: 'Roboto' ;
        line-height: 1.8;
        letter-spacing: .3px;
        transition: all .3s ease-in-out;


        @media only screen and (min-width: 800px) and (max-width: 1150px) {
             font-size: 1.8vw;
        }

        @media only screen and (min-width: 500px) and (max-width: 799px) {
             font-size: 2vw;
        }

       @media(max-width: 499px) {
           font-size: 3.8vw;
         }
    `;

    const Joke = styled.span`
        position: absolute;
        font-family: inherit;
        font-size: 16px;
        color: lightgoldenrodyellow;
        top: 99.5%;
        left: 100px;
        transform: translateY(-99.5%);
    `;

    return (
        <Wrapper>
            <Skewed>
                <ContentWrapper>
                    <Img>
                        <Joke>No turtle was harmed in the taking of this picture</Joke>
                    </Img>
                    <TextWrapper>
                        <Title>About</Title>
                        <Text>
                            <strong style={{padding: '0px 4px 0px 1px'}}>Hola!</strong>
                            I'm a Self-taught Junior Frontend Web-Dev happily based in Hamburg.
                            I am highly adaptable and driven by learning.
                            I prefer to continue challenging myself, keep learning, and in doing interesting things that matter.
                            I like football and tropical fruits.
                        </Text>
                    </TextWrapper>
                </ContentWrapper>
            </Skewed>
        </Wrapper>

    );
};

export default About;