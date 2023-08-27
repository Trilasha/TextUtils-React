
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';


import Alert from './components/Alert';



function App() {
  const [mode, setMode]=useState('light');//whether dark mode is enabled or not
  const [alert, setAlert]=useState(null);
  const showAlert=(message,type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }



    
    const toggleMode=(cls)=>{
      removeBodyClasses();
      console.log(cls);
      document.body.classList.add('bg-'+cls)
    if(mode==='light')
    {
    setMode('dark');
    document.body.style.backgroundColor='#042743';
    showAlert("Dark mode has been enabled successfully","success");
    



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
   <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>


   <Alert alert={alert}/>

   <div className="container my-3">

  
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
