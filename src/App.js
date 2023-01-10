// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
// or else it was showing useState as undefined

import Alert from './components/Alert';


// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";
// react router dom is a package 

// import { Routes ,Route } from 'react-router-dom';






// let name="Harry";
function App() {
  const [mode, setMode]=useState('light');//whether dark mode is enabled or not
  const [alert, setAlert]=useState(null);
  //we are making alert an object 

  const showAlert=(message,type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }



    //*************** Need to give class to the body ******************
    const toggleMode=(cls)=>{
      removeBodyClasses();
      console.log(cls);
      document.body.classList.add('bg-'+cls)
    if(mode==='light')
    {
    setMode('dark');
    document.body.style.backgroundColor='#042743';
    showAlert("Dark mode has been enabled successfully","success");
    // document.title="TextUtils - Dark Mode";


    // setInterval(() => {
    //   document.title='TextUtils is just Amazing';
    // }, 2000);

    // setInterval(() => {
    //   document.title='Install TextUtils now';
    // }, 1500);
    }
    else
    {
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabled successfully","success");
    // document.title="TextUtils - Light Mode";
    }
  }


  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  
  }


  return (
   <>
   {/* <nav>
    <li>Home</li>
    <li>About</li>
    <li>Contact Us</li>
   </nav> */}

   {/* <Navbar /> */}
   {/* <img src="" alt="" /> */}
   {/* can work with components in this way
   but always do remember to put / at the end  */}
   
   {/* <div className="container">
    <h1>Hello {name}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eveniet nihil reprehenderit amet, dolor ea. Fuga vitae, molestiae natus modi blanditiis ducimus nobis aperiam ut, magnam unde voluptatibus, aliquid velit? Voluptate reprehenderit cum ducimus.</p>
   </div> */}

   {/* we have to wrap everything inside the router */}
   {/* <Router> */}
   <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
   {/* <Navbar/> */}

   <Alert alert={alert}/>

   <div className="container my-3">

   {/* <Routes> */}
          {/* <Route exact path="/about" element={<About mode={mode}/>}></Route> */}
          {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils: Word & Character Counter | Remove Extra Spaces " mode={mode}/>}></Route> */}
   {/* </Routes> */}




   {/* <TextForm showAlert={showAlert} heading="Enter the text below to analyze" mode={mode}/> */}
   <TextForm showAlert={showAlert} heading="Try TextUtils: Word & Character Counter | Remove Extra Spaces " mode={mode}/>
   {/* <About/> */}
   </div>
   {/* </Router> */}
   </>
  );
}

export default App;







/*
/users --> Component 1
/users/home --> Component 2
 so despite of writing the later , the former would be rendered if exact word is not mentioned 
 */