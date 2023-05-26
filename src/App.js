import React, { useState } from 'react';
import './App'

function GreetMe() {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');

  const handleFNameChange = (event) => {
    setFName(event.target.value);
  };

  const handleLNameChange = (event) => {
    setLName(event.target.value);
  };

  const handleGreetMeClick = () => {
    alert(`Hello ${fName} ${lName}!`);
  };

  return (
    <div>
      <label htmlFor="f-name">First Name:</label>
      <input type="text" id="f-name" value={fName} onChange={handleFNameChange} required /><br /><br />
      <label htmlFor="l-name">Last Name:</label>
      <input type="text" id="l-name" value={lName} onChange={handleLNameChange} required /><br /><br />
      <button onClick={handleGreetMeClick}>Greet Me</button>
    </div>
  );
}

export default GreetMe;