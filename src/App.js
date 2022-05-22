import React from 'react';
import '/Users/prsaha/workspace/FE/react/tutorial-03-component/src/App.css';
import Instructions  from '/Users/prsaha/workspace/FE/react/tutorial-03-component/src/Instruction.js'

const displayEmojiName = event => alert(event.target.id);
const emojis = [
  {
    emoji: '😀',
    name: "test grinning face"
  },
  {
    emoji: '🎉',
    name: "party popper"
  },
  {
    emoji: '💃',
    name: "woman dancing"
  }
];

function App() {
  const greeting = "greeting";
  const displayAction = false;
  return(
      <Instructions />
  )
}

export default App;
