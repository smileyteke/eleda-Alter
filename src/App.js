import React from 'react';
import './App.css';
import data from './data';
import {BrowserRouter,Route, Link} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ContactScreen from './screens/ContactScreen';
import ServicesScreen from './screens/ServicesScreen';

function App() {
  
  
  return (
      <BrowserRouter>
      
     
    <div className="grid-container">
        
        <header className="header">
            <div className="brand">
                
                <Link to='/' >ELEDA ALTER</Link>
               
            </div>
           <div className="header-links-services">
           
               <Link to={'/product/:id'}>SERVICES </Link>
               
               
           </div>
           <div className="header-links-services">
           
           <Link to={'/contact/'}>CONTACT </Link>
           
           
       </div>
           
          
        </header>
        
        <main className="main">
            <div className="content">
                <Route path = '/product/:id' component ={ServicesScreen} />
                <Route path = '/' exact={true} component= {HomeScreen} />
                <Route path = '/contact/' component ={ContactScreen} />
               

            </div>
            
            
        </main>
        <footer className="footer">
           Developed by Ismail Teke
        </footer>
    </div>

    
    </BrowserRouter>
  );
}

export default App;
