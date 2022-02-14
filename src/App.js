import React, {useState} from "react";
import { Forms, Label, TermsContainer, ButtonCenterContainer, Button, SuccessfulMessage, ErrorMessage} from "./elements/Forms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import InputComponent from './components/Input';

const App = () => {

  const [user, setUser] = useState({field: '', valid: null});
  const [name, setName] = useState({field: '', valid: null});
  const [password, setPassword] = useState({field: '', valid: null});
  const [password2, setPassword2] = useState({field: '', valid: null});
  const [email, setEmail] = useState({field: '', valid: null});
  const [phone, setPhone] = useState({field: '', valid: null});
  const [terms, setTerms] = useState(false);
  const[validForm, setValidForm] = useState(null);

  const expressions = {
    user: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone: /^\d{7,14}$/ // 7 a 14 numeros.
  }

  const validatePassword2 = () => {
    if(password.field.length > 0) {
      if(password.field !== password2.field){
        setPassword2((prevState) => {
          return {...prevState, valid: 'false'}

        })
      } else {
        setPassword2((prevState) => {
          return {...prevState, valid: 'true'}
      });
    }}
  }

  const onChangeTerms = (e) => {
    setTerms(e.target.checked);
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if(user.valid === 'true' && name.valid === 'true' && password.valid === 'true' && password2.valid === 'true' && email.valid === 'true' && phone.valid === 'true' && terms) {
         setValidForm(true);  
         setUser({field: '', valid: null});
         setName({field: '', valid: null});
         setPassword({field: '', valid: null});
         setPassword2({field: '', valid: null});
         setEmail({field: '', valid: null});
         setPhone({field: '', valid: null});
         setTerms(false);

    } else {
      setValidForm(false);
    }


  }

  return (
    <main>
      <Forms action="" onSubmit={onSubmit}>
        <InputComponent
        state={user}
        setState={setUser}
        type="text"
        label="Username"
        placeholder="User-34e"
        name="User"
        errorCaption="User must be have 4-16 digits,- or_ and numbers"
        regularExpression={expressions.user}
        
        />
       
        <InputComponent
        state={name}
        setState={setName}
        type="text"
        label="Name"
        placeholder="Full name"
        name="Name"
        errorCaption="You can only use letters and spaces."
        regularExpression={expressions.name}
        
        />
        <InputComponent
        state={password}
        setState={setPassword}
        type="password"
        label="Password"
        name="password1"
        errorCaption="4-12 digits."
        regularExpression={expressions.password}
        
        />

        <InputComponent
        state={password2}
        setState={setPassword2}
        type="password"
        label="Repeat Password"
        name="password2"
        errorCaption="Password is not the same."
        validate={validatePassword2}
  
        />

<InputComponent
        state={email}
        setState={setEmail}
        type="email"
        label="Email"
        placeholder="email@email.com"
        name="email"
        errorCaption="Please enter a valid e-mail adress!"
        regularExpression={expressions.email}
        
        />
         <InputComponent
        state={phone}
        setState={setPhone}
        type="text"
        label="Phone Number"
        name="phone"
        errorCaption="Phone must be have 7-14 digits, only numbers."
        regularExpression={expressions.phone}
        
        />
      

        <TermsContainer>
          <Label>
            <input type="checkbox" 
            name="terms" 
            id="terms" 
            checked={terms}
            onChange={onChangeTerms}/>
            I accept the terms and conditions.
          </Label>
        </TermsContainer>
       {validForm === false && <ErrorMessage>
        <p>
            <FontAwesomeIcon icon={faTriangleExclamation}/>
            
            <b>Error:</b> Please, fill the form correctly and accept terms and conditions. </p>
        </ErrorMessage>}

        <ButtonCenterContainer>
          <Button type="submit">Send</Button>
          {validForm === true && <SuccessfulMessage>The upload has been successful.</SuccessfulMessage>}
        </ButtonCenterContainer>
      </Forms>
    </main>


  );

 
};


export default App;
