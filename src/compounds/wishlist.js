import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alias } from '../importer';
import * as RC from '../assets/styles/wishlist';
import { Whishlist } from '../components/wishlist'

const { addToKart } = Alias.pathToActions('WishAndKartCRUD');
const { DualRingLoad } = Alias.pathToComponents('spiners');

export const WishList = () => {
  // Redux Hooks
  const dispatch = useDispatch();
  const loading = useSelector(state => state.Loading.loadInComponent);
  const wishlists = useSelector(state => state.WishAndKartCRUD.wishLists);

  // React Hooks
  const handlKartCreate = () => {
    dispatch(addToKart({ kartData: wishlists }));
  }

  return (
    <RC.WishListWrapper>
      <RC.WishListContainer>
        <RC.WishListBtnTitle>
        <RC.WishListPageTitle>Wishlist</RC.WishListPageTitle>
        <RC.ButtonUploadToKart onClick={handlKartCreate} className="btn btn-md"> { loading ? <DualRingLoad /> : 'Cart All'}</RC.ButtonUploadToKart>
        </RC.WishListBtnTitle>
        <Whishlist />
      </RC.WishListContainer>
    </RC.WishListWrapper>
  )
}