import React from 'react';
import { Label, InputGroup, ErrorCaption, IconValidation, Input } from './../elements/Forms';
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";

const InputComponent = () => {
    return(
        <div>
        <Label htmlFor="name">User</Label>
        <InputGroup>
          <Input type="text" placeholder="Name" id="name" />
          <IconValidation icon={faSquareXmark} />
        </InputGroup>

        <ErrorCaption> leyenda ajajjajfhhfhs</ErrorCaption>
      </div>
    );
};


export default InputComponent;
