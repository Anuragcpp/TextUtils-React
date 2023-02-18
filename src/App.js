
import { useState } from 'react';
import './App.css';
import Alart from './component/Alart';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlart] = useState(null);

  const showAlart =(message,type)=>{
    setAlart({
       msg:message,
       type:type
    });
   setTimeout(()=>{
    setAlart(null);
   },2000);
  }
  const toggleMode=()=>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor= '#0a3056';
      showAlart('Dark kmode activated','seccess');
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlart('Light tmode activated','seccess');
    }
  }
  return (
    <>
     <Router>
     <Navbar title = "TextUtils" About="About" mode={mode} toggleMode={toggleMode} />
     <Alart alert={alert} />
     <div className='container' >  
       <Switch>
          <Route exact path="/about">
            <About exact About="About" mode={mode} />
          </Route> 
          <Route path="/">
            <TextForm  heading= "Enter Your text to analize below"showAlart={showAlart} mode={mode}/>
          </Route>
        </Switch>     
    </div>
    </Router>
    </>
  );
}

export default App;
