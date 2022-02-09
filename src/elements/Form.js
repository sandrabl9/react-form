import React from 'react';
import styled from 'styled-components';

const colors =  {
    border: "#d8ebe4",
    error: "#bb2929",
    success:"#1ed12d"
}
const Form = styled.form`
display: grid;
grid-template-column: 1fr 1fr;
gap: 20px;

@media(max-width: 800px) { 
    grid-template-column: 1fr;

}
`;