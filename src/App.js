import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textbox from "./components/Textbox";
import React ,{useState} from "react";
// import{
//   BrowserRouter as Router ,
//   switch,
//   Route,
//   link,
// } frome "react-router-dom";

function App() {
  const  [mode,setMode] = useState ('light');

  const toggleMode = ()=>{
        if (mode === 'light'){
          setMode ( 'dark');
          document.body.style.backgroundColor = '#95bce3';   
        }
        else {
          setMode ('light');
          document.body.style.backgroundColor = 'white'; 
        }
  }



return (
    <>   
    <Navbar title="Text Convertor" mode={mode} toggleMode ={toggleMode}/>
     <div className="container my-3">
      <Textbox heading="Enter The Text.."/>
     </div>
      <About toggleMode ={toggleMode} />
    
  
    </>
  );
} 

export default App;
