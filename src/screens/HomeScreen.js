import React from 'react';
import data from '../data';
import { Link } from 'react-router-dom';

function HomeScreen (props) {
    return    <main className='main-homescreen'>
    <ul className="products">
                    {data.products.map(product =>
                     <li>
                     <div className="product">
                     <Link to={'/product/' + product._id}><img className="product-image" src={product.image} alt="products"/> </Link> 
                     <div className="product-brand">
                         <p>
                         Providing affordable & quality alterations by helping people wear 
                            the clothes they already own instead of buying, reduces waste!
                         </p>
                            </div>
                        
                     </div>
                 </li>
                  )}                  
                    
                </ul>
  </main>
} 
export default HomeScreen;