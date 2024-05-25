import React from 'react'
import { ShopContext } from '../context/shopContext';
import { useParams } from 'react-router-dom';
import Breadcrums from '../components/breadcrums/breadcrums';

const Product = (props) => {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_products.find((e) => e.id === Number(productId))
  return (
    <div>
      <Breadcrums product={product} />
    </div>
  )
}

export default Product