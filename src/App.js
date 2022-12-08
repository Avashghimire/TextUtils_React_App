// import logo from './logo.svg';
import './App.css';
import Navbar from "./MyComponents/Navbar";
import TextForm from "./MyComponents/TextForm";
import About from './MyComponents/About';
import Alert from "./MyComponents/Alert";
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,  
} from "react-router-dom";


// import {Todos} from "./MyComponents/Todos"; 
// import {Footer} from "./MyComponents/Footer"; 
function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState('');

  const displayAlert = (message,type)=>{
setAlert({
  msg:message,
  type:type
})
setTimeout(() => {
  setAlert(null)
}, 1500);
  }
// Enable Blue Dark Mode   
  const togglemode = () =>{
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor='#0c0742' ;
      displayAlert('Dark mode has been Enable','success')
    }
    else{
        setmode('light'); 
      document.body.style.backgroundColor='white' ;
      displayAlert('light mode has been Enable','success')

    }
  }

  // Enable Red Dark Mode 


  // let myvalue=33333
  return (
<>
<Router>
<Navbar title = " TextUtils" aboutTitle = "About" togglemode = {togglemode} mode = {mode} searchBar = {false}/>
<Alert alert = {alert}/>
<div className='container my-3'>
<Switch>
          <Route  exact path="/about">
            <About mode ={mode}/>
          </Route>
          <Route exact path="/">
<TextForm heading = "Try TextUtils-WordCounter,charater counter,Remove text" displayAlert={displayAlert} mode={mode}/>
          </Route>
 </Switch>
</div>
</Router>
 </>

  );
}

export default App;
