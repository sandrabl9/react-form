import React from 'react';
import { Label, InputGroup, ErrorCaption, IconValidation, Input } from './../elements/Forms';
import { faSquareXmark, faCheckSquare} from "@fortawesome/free-solid-svg-icons";

const InputComponent = ({state, setState, type, label, placeholder, name, errorCaption, regularExpression,validate }) => {
     const onChange = (e) => {
      setState({...state, field: e.target.value});
      
    } 
    const validation = () => {
      if(regularExpression){
        if(regularExpression.test(state.field)) {
       setState({...state, valid:'true'});
    } else {
      setState({...state, valid:'false'});
    }}


    if(validate){
     validate();
    }
  }

  
  return(
        <div>
        <Label htmlFor={name}
        valid={state.valid}>{label}</Label>
        <InputGroup>
          <Input 
          type={type} 
          placeholder={placeholder} 
          id={name}
          value={state.field}
          onChange={onChange} 
          onKeyUp={validation}
          onBlur={validation}
          valid={state.valid}
          />
          <IconValidation icon={state.valid === 'true' ? faCheckSquare : faSquareXmark}
          valid={state.valid} />
        </InputGroup>

        <ErrorCaption
        valid={state.valid}> {errorCaption}</ErrorCaption>
      </div>
    );
};


export default InputComponent;
