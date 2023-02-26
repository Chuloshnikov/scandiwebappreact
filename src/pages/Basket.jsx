import React, {useReducer, useState} from 'react';
import BasketHeader from '../components/BasketHeader';
import BasketMain from '../components/BasketMain';


const Basket = ({ goods, setGoods }) => {

  const [checkedItemIds, setCheckedItemIds] = useState([]);
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  

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


  return (
    <>
    <BasketHeader handleDeleteCheckedItems={handleDeleteCheckedItems}/>
    <BasketMain goods={goods} checkedItemIds={checkedItemIds} setCheckedItemIds={setCheckedItemIds}/>
    </>
  )
}

export default Basket;