import styled, {css} from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const colors =  {
   border: "#282846",
   error: "#bb2929",
   success: "#1ed12d"
} 

const Forms = styled.form`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 20px;

@media(max-width: 800px) { 
    grid-template-columns: 1fr;
    
    
}
`;

const Label = styled.label`
display: block;
font-weight: 700;
padding: 10px;
min-height: 40px; 
cursor: pointer;


${props =>props.valid === 'false' && css`
color: ${colors.error};
`}
`;
//min-height para que en caso de que no pongamos texto en el label el input no se desplace hacía arriba


const InputGroup = styled.div`
position: relative;
z-index: 90;
`;

const Input = styled.input`
width: 100%;
background: #fff;
border-radius: 3px;
height: 45px;
line-height: 45px;
padding: 0 40px 0 10px;
trasition: .3s ease all;
border: 3px solid transparent;

&:focus {
    border: 3px solid ${colors.border};
    outline: none;
    box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
}

${props =>props.valid === 'true' && css`
border: 3px solid transparent;
`}
${props =>props.valid === 'false' && css`
border: 3px solid ${colors.error} !important;
`}
`;

const ErrorCaption = styled.p`
font-size: 12px;
font-weight: bold;
margin-bottom: 0;
color: #fff;
display: none;

${props =>props.valid === 'true' && css`
display: none;
`}
${props =>props.valid === 'false' && css`
display: block;
`}
`;

const IconValidation = styled(FontAwesomeIcon)`

position: absolute;
right: 10px;
bottom: 14px;
z-index: 100;
font-size: 18px;
opacity: 0;

${props =>props.valid === 'true' && css`
opacity: 1;
color: ${colors.success};
`}
${props =>props.valid === 'false' && css`
opacity: 1;
color: ${colors.error};
`}
`;

const TermsContainer = styled.div`
grid-column: span 2;

input {
    margin-right: 10px;

}

@media (max-width: 800px) {
    grid-column: span 1;
}
`;

const ButtonCenterContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
grid-column: span 2;

@media (max-width: 800px) {
    grid-column: span 1;
}

`;

const Button = styled.button`
height: 45px;
line-height: 45px;
width: 30%;
background: #000;
color: #fff;
font-weight: bold;
border:none;
border-radius: 3px;
cursor: pointer;
trasition: .1s ease all;

&:hover {
    box-shadow: 3px 0px 30px rgba(163,163,163, 1);
}
`;

const SuccessfulMessage = styled.p`
color: ${colors.success};
font-size: 14px;

`;

const ErrorMessage = styled.div`
height: 45px;
line-height: 45px;
background: ${colors.error};
padding: 0 15px;
border-radius: 3px;
grid-column: span 2;

 p {
     margin: 0;

 }
 b{
     margin-left: 10px;
 }
 
 @media (max-width: 800px) {
    grid-column: span 1;
}
`;

export {Forms, Label, InputGroup, Input, ErrorCaption, IconValidation, TermsContainer, ButtonCenterContainer, Button, SuccessfulMessage, ErrorMessage};