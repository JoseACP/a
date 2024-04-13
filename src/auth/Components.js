
 import styled, { createGlobalStyle  } from 'styled-components';

 export const GlobalStyles = createGlobalStyle`
 * {
   box-sizing: border-box;
 }
`;

export const body = styled.body`
background: #ffffff;;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  height: 100vh;
  margin: -20px 0 50px;
`;

 export const Container = styled.div`
 background-color: #CB142C;
 border-radius: 10px;
 box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
 position: relative;
 overflow: hidden;
 width: 450px;
 max-width: 100%;
 min-height: 400px;
 `;

 export const SignInContainer = styled.div`
 position: absolute;
 top: 0;
 height: 100%;
 transition: all 0.6s ease-in-out;
 left: 0;
 width: 78%;
 z-index: 2;
 
 `;
 
 export const Form = styled.form`
 background-color:#CB142C;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 padding: 0 50px;
 height: 100%;
 width: 100%;
 text-align: center;
 `;

 export const LogoIcon = styled.img`
  
  margin-right: 40px; /* Espacio entre el icono y el texto */
  margin-top: -10px; /* Margen superior */
  margin-bottom: 20px; /* Margen inferior */
  height: 20%;
 width: 50%;

`;
 
 export const Title = styled.h1`
 color: #ffffff;
 font-weight: bold;
 margin: 0;
 `;
 
 export const Input = styled.input`
 border-radius: 10px;
 background-color: #eee;
 border: none;
 padding: 12px 15px;
 margin: 8px 0;
 width: 100%;
 `;
 

 export const Button = styled.button`
    border-radius: 20px;
    border: 1px solid #ffffff;;
    background-color: #ffffff;;
    color: #CB142C;
    font-size: 12px;
    font-weight: bold;
    margin-top:30;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    &:active{
        transform: scale(0.95);
    }
    &:focus {
        outline: none;
    }
 `;
 export const GhostButton = styled(Button)`
 background-color: transparent;
 border-color: #ffffff;
 `;
 
 export const Anchor = styled.a`
 color: #333;
 font-size: 14px;
 text-decoration: none;
 margin: 15px 0;
 `;
 export const OverlayContainer = styled.div`
position: absolute;
top: 0;
left: 50%;
width: 50%;
height: 100%;
overflow: hidden;
transition: transform 0.6s ease-in-out;
z-index: 100;
`;

export const Overlay = styled.div`
background: #CB142C;
background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
background: linear-gradient(to right, #ff4b2b, #ff416c);
background-repeat: no-repeat;
background-size: cover;
background-position: 0 0;
color: #CB142C;
position: relative;
left: -100%;
height: 100%;
width: 200%;
transform: translateX(0);
transition: transform 0.6s ease-in-out;
${props => (props.signinIn !== true ? `transform: translateX(50%);` : null)}
`;
 
 export const OverlayPanel = styled.div`
     position: absolute;
     display: flex;
     align-items: center;
     justify-content: center;
     flex-direction: column;
     padding: 0 40px;
     text-align: center;
     top: 0;
     height: 100%;
     width: 50%;
     transform: translateX(0);
     transition: transform 0.6s ease-in-out;
 `;

 export const LeftOverlayPanel = styled(OverlayPanel)`
   transform: translateX(-20%);
   ${props => props.signinIn !== true ? `transform: translateX(0);` : null}
 `;

 export const RightOverlayPanel = styled(OverlayPanel)`
     right: 0;
     transform: translateX(0);
     ${props => props.signinIn !== true ? `transform: translateX(20%);` : null}
 `;

 export const Paragraph = styled.p`
 font-size: 14px;
   font-weight: 100;
   line-height: 20px;
   letter-spacing: 0.5px;
   margin: 20px 0 30px
 `;