import { render } from '@testing-library/react';
import React, { Component } from 'react';
import App from './App';
import emoji from './emoji.svg'
import '/Users/prsaha/workspace/FE/react/tutorial-03-component/src/App.css';

/*export default function Instructions () {
    return(
      <div className="instructions">
        <img alt="laughing crying emoji" src={emoji} />
        <p>Click on an emoji to view the emoji short name.</p>
      </div>
    )
}*/



//Or Using arraow function

const Instruction= () => (
    <div className="instructions">
        <img alt="laughing crying emoji" src={emoji} />
         <p>Click on an emoji to view the emoji short name.</p>
      </div>
)
export default Instruction;
