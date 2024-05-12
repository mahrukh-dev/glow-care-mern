import React from 'react'
import { GetStarted } from '../components/getStarted/GetStarted'
import Popular from '../components/popular/Popular'
import Offers from '../components/Offers/Offers'
import NewCollection from '../components/NewCollections/NewCollections'

const ShopPage = () => {
  return (
    <div>
      <GetStarted />
      <Popular />
      <Offers />
      <NewCollection />
    </div>
  )
}

export default ShopPage