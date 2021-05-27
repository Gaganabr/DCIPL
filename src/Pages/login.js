import React, { useState, useCallback } from 'react';
import '../App.css';
import './CSS/login.css';
import Dashboard from './dashboard';

function Login({IsSignIn, setIsSignIn}) {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
 

  const EmailValue = (event) => {
  setEmail(event.target.value);
  };

const PasswordValue = (event) => {
  event.preventDefault();
  setPassword(event.target.value);
  };

  const handleIsSignIn = useCallback(event => {
    setIsSignIn(true);
    localStorage.setItem("IsSignIn", true);
  }, [setIsSignIn])

const onSubmitSignIn = () => {
  document.getElementById('logo').style.display="block";
    fetch('https://dcipl.yourtechshow.com/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: Email,
        password: Password
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          setName(user.name)
          handleIsSignIn();
        } else {
          alert("Wrong Credentials")
          document.getElementById('logo').style.display="none";
        }
      })
  }

const OnPageLoad = () => {
const CheckIsSignIn = localStorage.getItem("IsSignIn");
console.log(CheckIsSignIn)
if (CheckIsSignIn) {
  setIsSignIn(true)
} else {
  setIsSignIn(false)
}

}

	return (
    <>
    {IsSignIn ? (
  <>
  <br/>
        <Dashboard User={Name}/>
</>
      ) : (
  <main>
            <div>
                <div className="logregister_form">  
                    <h1>Register/Login</h1>
                    <form action="#" method="post">
                        <br></br>
                        <input type="email" name="email" placeholder="E-Mail" required onChange={EmailValue} value={Email}></input><br></br>
                        <input type="password" name="password" placeholder="Password"  required onChange={PasswordValue} value={Password}></input><br></br>
                    </form>
                </div>
                <div className= "btn-group">
                    <button type="submit" onClick={onSubmitSignIn}>Login</button>
                    {OnPageLoad()}
                    <div id="logo" class="loadingio-spinner-rolling-kswyn6f3gj7"><div class="ldio-c9p079igqka">
<div></div>
</div></div>
                </div>
            </div>
        </main>
        )}
		</>

		)
};

export default Login;