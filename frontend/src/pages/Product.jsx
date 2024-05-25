import React from 'react'
import { ShopContext } from '../context/shopContext';
import { useParams } from 'react-router-dom';
import Breadcrums from '../components/breadcrums/breadcrums';
import ProductDisplay from '../components/productDisplay/ProductDisplay';

const Product = (props) => {
  const { all_products } = React.useContext(ShopContext);
  const { productId } = useParams();
  const product = all_products.find((e) => e.id === Number(productId))
  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
    </div>
  )
}

export default Product