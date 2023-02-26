import React, { useState} from 'react';
import BasketHeader from '../components/BasketHeader';
import BasketMain from '../components/BasketMain';


const Basket = ({ goods, setGoods }) => {

  const [checkedItemIds, setCheckedItemIds] = useState([]);
  
  

  const handleDeleteCheckedItems = () => {

    if (checkedItemIds.length !== 0) {
    if (window.confirm('You sure you want to delete this products?')) {
    const checkedItems = goods.filter(item => checkedItemIds.includes(item.id));
    const uncheckedItems = goods.filter(item => !checkedItemIds.includes(item.id));
    localStorage.setItem('goods', JSON.stringify(uncheckedItems));
    setGoods(...uncheckedItems);
    setCheckedItemIds([]);
      }
    }
    
  }


  return (
    <>
    <BasketHeader handleDeleteCheckedItems={handleDeleteCheckedItems}/>
    <BasketMain goods={goods} checkedItemIds={checkedItemIds} setCheckedItemIds={setCheckedItemIds}/>
    </>
  )
}

export default Basket;