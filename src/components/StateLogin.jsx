//Login Functionality using useState.

import { useState } from "react";


export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredValues, setEnteredValue] = useState({
    email: '',
    password: '',
  })


  function handleSubmit(event) {
    event.preventDefault();
    console.log("Entered Values are : " ,enteredValues);

    setEnteredValue({  //for resetting the values after submit
      email: '',
      password: '',
    })
  }


  function handleInputChange(identifier, event) {
    setEnteredValue(prevValues => ({
      ...prevValues,
      [identifier]: event.target.value //[] this sybol is used to dynamically access a property in an object.
    }));
  }


  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input 
            id="email" 
            type="email" 
            name="email" 
            onChange={(event) => handleInputChange('email', event)}
            value={enteredValues.email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input 
            id="password" 
            type="password" 
            name="password" 
            onChange={(event) => handleInputChange('password', event)}
            value={enteredValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" >Login</button>
      </p>
    </form>
  );
}
