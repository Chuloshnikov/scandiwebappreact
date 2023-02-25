import React from 'react';
import BasketHeader from '../components/BasketHeader';
import BasketMain from '../components/BasketMain';


const Basket = ({ goods }) => {
  return (
    <>
    <BasketHeader/>
    <BasketMain goods={goods}/>
    </>
  )
}

export default Basket;