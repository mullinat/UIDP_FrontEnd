import React  from 'react';

const Button  = ({onChangeIdentity}) => (
    <div onClick={() => onChangeIdentity()}> click here </div>
)

export default Button;