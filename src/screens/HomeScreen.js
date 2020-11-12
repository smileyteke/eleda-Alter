import React from 'react';
import data from '../data';


function HomeScreen () {
    return <div className='main'>
             <div className="logo-description">
                {data.logo.map(logo =>                    
               <div className="logo-image">
                <img className="image" src={logo.image} alt="logo"/>
               </div>  )}              
               <div className="description">
                 <p>
                     Providing affordable & quality alterations by helping people wear 
                     the clothes they already own instead of buying, reduces waste!
                 </p>
               </div>               
                    
              </div>
              
              </div>
                
               
} 
export default HomeScreen;