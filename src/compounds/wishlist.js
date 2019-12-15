import React, { useState} from 'react';
import * as RC from '../assets/styles/wishlist';
import { Whishlist } from '../components/wishlist'


export const WishList = () => {
  const [kartAll, setKartAll] = useState(false);
  return (
    <RC.WishListWrapper>
      <RC.WishListContainer>
        <RC.WishListBtnTitle>
        <RC.WishListPageTitle>Wishlist</RC.WishListPageTitle>
        <RC.ButtonUploadToKart onClick={() => setKartAll(true)} className="btn btn-md">Cart All</RC.ButtonUploadToKart>
        </RC.WishListBtnTitle>
        <Whishlist kartAll={kartAll}/>
      </RC.WishListContainer>
    </RC.WishListWrapper>
  )
}