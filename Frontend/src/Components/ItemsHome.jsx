import React, { useState } from 'react'
import { itemsHomeStyles } from '../assets/dummyStyles'
import BannerHome from './BannerHome'

const ItemsHome = () => {
    const[search,setsearch] = useState('')

    const handleSearch = (term) =>{
        setsearch(term)
    }

  return (
    <div className={itemsHomeStyles.page}>
      <BannerHome onSearch={handleSearch}/>
    </div>
  )
}

export default ItemsHome
