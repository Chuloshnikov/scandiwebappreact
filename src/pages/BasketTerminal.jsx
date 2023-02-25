import React, { useState } from 'react';
import BasketTerminalHeader from '../components/BasketTerminalHeader';
import BasketTerminalMain from '../components/BasketTerminalMain';
import { useNavigate } from 'react-router-dom';
import {v4 as uuid} from 'uuid';

const BasketTerminal = ({ setGoods }) => {

  const [sku, setSku] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState();
  const [productType, setProductType] = useState('');
  const navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();  
    const product = {id: uuid(), sku, name, price, productType};
    //add product in the goods arr
    if (sku && name && price && productType) {
      setGoods(prevGoods => [product, ...prevGoods])
      setSku("");
      setName("");
      setPrice("");
      setProductType("");

      //redirect to home page
      navigate('/');
    }
  }





  return (
    <>
    <BasketTerminalHeader handleSubmit={handleSubmit}/>
    <BasketTerminalMain 
    handleSubmit={handleSubmit}
    productType={productType}
    sku={sku}
    name={name}
    price={price}
    setProductType={setProductType}
    setSku={setSku}
     setName={setName}
    setPrice={setPrice}
    />
    </>
  )
}

export default BasketTerminal;