import React, { useState, useEffect } from 'react';
import BasketHeader from '../components/BasketHeader';
import BasketMain from '../components/BasketMain';


const Basket = ({ goods, setGoods }) => {

  const [checkedItemIds, setCheckedItemIds] = useState([]);
  
  const [text, setText] = useState('');
  const [filteredGoods, setFilteredGoods] = useState(goods);
  

  const handleDeleteCheckedItems = () => {
    if (window.confirm('You sure you want to delete this products?')) {
    const checkedItems = goods.filter(item => checkedItemIds.includes(item.id));
    const uncheckedItems = goods.filter(item => !checkedItemIds.includes(item.id));
    localStorage.setItem('goods', JSON.stringify(uncheckedItems));
    setGoods(uncheckedItems);
    setCheckedItemIds([]);
    }
    window.location.reload();
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