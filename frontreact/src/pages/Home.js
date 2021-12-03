import React, { useEffect, useState } from 'react';
import { Card } from '../components/Card';


export const Home = ({ searchKey }) => {
  const [products, setProducts] = useState(null);
  useEffect(()=>{
  fetch('http://localhost:3001/api/products')
  .then(responde => responde.json())
  .then(data => setProducts(data.results))
  },[])
  console.log(products)
  return (
    <section id='home'>
      <div className='home-container'>
        <h1>Gallery</h1>
        <div className='home-card'>
        {products && products.map((product)=>(
              <div >
              <Card
              key={product._id}
              name={product.name}
              picture = {product.picture}
              price = {product.price}
              isActive = {product.isActive}
              />
              </div>))}
          </div>
        <div class="row">
        </div>
      </div>
    </section>
  );
};
