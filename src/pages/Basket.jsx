
import React, { useState, useEffect } from 'react';

import BasketHeader from '../components/BasketHeader';
import BasketMain from '../components/BasketMain';


const Basket = ({ goods, setGoods }) => {

  const [checkedItemIds, setCheckedItemIds] = useState([]);

  const [text, setText] = useState('');
  const [filteredGoods, setFilteredGoods] = useState(goods);


  

  const handleDeleteCheckedItems = () => {

    if (checkedItemIds.length !== 0) {
    if (window.confirm('You sure you want to delete this products?')) {
    const checkedItems = filteredGoods.filter(item => checkedItemIds.includes(item.id));
    const uncheckedItems = filteredGoods.filter(item => !checkedItemIds.includes(item.id));
    localStorage.setItem('goods', JSON.stringify(uncheckedItems));
    setFilteredGoods(uncheckedItems);
    setGoods(uncheckedItems);
    setCheckedItemIds([]);
      }
    }
    
  }

  const handleSearch = () => {
    setFilteredGoods(goods.filter((item) => {
      if (item.name.toLowerCase().match(text.toLocaleLowerCase())){
        return item;
      }
    }))
  }

  useEffect(handleSearch, [text]);


  return (
    <>
    <BasketHeader setText={setText}  handleSearch={handleSearch} goods={goods} handleDeleteCheckedItems={handleDeleteCheckedItems}/>
    <BasketMain filteredGoods={filteredGoods} goods={goods} checkedItemIds={checkedItemIds} setCheckedItemIds={setCheckedItemIds}/>
    </>
  )
}

export default Basket;