import React from "react";
import { Forms, Label, TermsContainer, ButtonCenterContainer, Button, SuccessfulMessage, ErrorMessage} from "./elements/Forms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import InputComponent from './components/Input';

const App = () => {
  return (
    <main>
      <Forms action="">
        <InputComponent/>

        <InputComponent/>
        <InputComponent/>
      

        <TermsContainer>
          <Label>
            <input type="checkbox" name="terms" id="terms"/>
            I accept the terms and conditions.
          </Label>
        </TermsContainer>
       { false && <ErrorMessage>
        <p>
            <FontAwesomeIcon icon={faTriangleExclamation}/>
            
            <b>Error:</b> Please, fill the form correctly. </p>
        </ErrorMessage>}

        <ButtonCenterContainer>
          <Button type="submit">Send</Button>
          <SuccessfulMessage>The upload has been successful.</SuccessfulMessage>
        </ButtonCenterContainer>
      </Forms>
    </main>
  );
};

export default App;
