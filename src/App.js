import { useState } from 'react';
import './App.css';
import data from './data'

function App() {
  const [back, setBack] = useState(true)

  const { products } = data;
  
  const handleDelete = (id)=>{
    const filteredProducts = products.filter((product) =>{
      return product.id !== id
    })
    setBack(filteredProducts)
  }

  // const remove = () =>{
  //   setBack(false)
  // }
  
return(

  <div className='container'>
          {products.map((product) => {
             return (
              
              
               
                <div className='box' key={product.id} >
               
                 <img src={product.image}></img>
              
               <h2>{product.name}</h2>
                 <h2>{product.price}</h2>
                 <button onClick={() => handleDelete(product.id)}>clear</button>
                 {/* <button onClick={remove}>remove</button> */}
               
               </div>
               
              
               
              
             )
           })}
            

          
          
       
        
        </div>
        )
}

export default App;

