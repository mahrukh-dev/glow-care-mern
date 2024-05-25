import React from 'react'
import './css/ShopCategory.css'
import { ShopContext } from '../context/shopContext';
import dropdown_icon from '../components/assets/icons/dropdown_icon.png'
import Item from '../components/item/Item'

const ShopCategory = (props) => {
  const { all_products } = React.useContext(ShopContext);
  return (
    <div className="shop-category">
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className='shopcategory-indextSort'>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className='shopcategory-sort'>
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_products.map((item, i) => {
          if (props.category === item.category) {
            return  <Item key={i} id={item.id} category={item.category} name={item.name} image={item.image} price={item.price}/>
          }
          else {
            return null;
          }
        })}
      </div>
    </div>
  )
}

export default ShopCategory