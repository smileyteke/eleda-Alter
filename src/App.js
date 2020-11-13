import React from 'react';
import './App.css';
import {BrowserRouter,Route, Link} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ContactScreen from './screens/ContactScreen';
import ServicesScreen from './screens/ServicesScreen';



function App() { 
  
  return (
      <BrowserRouter> 
      <div className='main'>
        <header className="header">
        <div className="header-links-services">                
          <Link to='/' >ELEDA ALTER</Link>               
        </div>   
        <div className="header-links-services">           
          <Link to={'/services'}>SERVICES </Link>        
        </div>          
        <div className="header-links-services">           
           <Link to={'/contact/'}>CONTACT </Link>          
        </div>              
        </header>     
                    
            <Route path = '/' exact={true} component= {HomeScreen} />
            <Route path = '/contact/' component ={ContactScreen} />
             <Route path = '/services' component ={ServicesScreen}/>  
           
      </div>   
             
   
            

    </BrowserRouter>
  );
}

export default App;
