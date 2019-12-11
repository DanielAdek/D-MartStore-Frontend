import React from 'react';
import * as RC from '../assets/styles/wishlist';
import { Whishlist } from '../components/wishlist'

export const WishList = () => {
  return (
    <RC.WishListWrapper>
      <RC.WishListContainer>
      <RC.WishListPageTitle>Wishlist</RC.WishListPageTitle>
      <Whishlist />
      </RC.WishListContainer>
    </RC.WishListWrapper>
  )
}