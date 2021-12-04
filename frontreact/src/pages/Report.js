import React, { useState, useEffect, useRef } from 'react';
import { FormattedMessage } from 'react-intl';
import {Chart} from '../components/Chart';
export const Report = ({ searchKey }) => {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    fetch(`http://localhost:3001/api/products?q=`+searchKey)
    .then(responde => responde.json())
    .then(data => setProducts(data.results))
    },[searchKey])
  return (
    <section id='report'>
      <div className='report-container'>
        <h1><FormattedMessage id="reportText"/></h1>
        <Chart data={products}></Chart>
      </div>
    </section>
  );
};
