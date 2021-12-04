import React, { useEffect, useState } from 'react';
import { Card } from '../components/Card';
import { FormattedMessage } from 'react-intl';

export const Home = ({ searchKey }) => {
  const [products, setProducts] = useState(null);
  useEffect(()=>{
  fetch(`http://localhost:3001/api/products?q=`+searchKey)
  .then(responde => responde.json())
  .then(data => setProducts(data.results))
  },[searchKey])
  return (
    <section id='home'>
      <div className='home-container'>
        <h1>
          <FormattedMessage id="gallery"/>
          </h1>
        <div className='home-card'>
        {products && products.map((product)=>(
              <div >
              <Card
              key={product.id}
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
