import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alias } from '../importer';
import * as RC from '../assets/styles/wishlist';

const { addToKart, retreiveWishLists, deleteWish } = Alias.pathToActions('WishAndKartCRUD');
const { DualRingLoadScreen, DualRingLoad } = Alias.pathToComponents('spiners');

export const Whishlist = () => {
  // Redux Hooks
  const dispatch = useDispatch();
  const wishlists = useSelector(state => state.WishAndKartCRUD.wishLists);
  const processing = useSelector(state => state.Loading.loading);
  const loading = useSelector(state => state.Loading.loadInComponent);

  // React Hooks
  const [clickedBtn, setClickedBtn] = useState(null);

  useEffect(() => {
		if (!wishlists) {
			dispatch(retreiveWishLists());
		}
  }, [dispatch, wishlists]);

  const handlKartCreate = (data, index) => {
    setClickedBtn(index);
    const kartCode = localStorage.getItem('token');
    const kartData = { kartCode: kartCode || "", productId: data.productId._id, quantity: 1, imageType: data.imageType};
    dispatch(addToKart({ kartData }));
  }

  const handleDelWish = wish => dispatch(deleteWish(wish._id, retreiveWishLists));


  return (
    <RC.WhishListTable>
      <RC.WhishListTableRow>
        <RC.WishListTableHeader>Image</RC.WishListTableHeader>
        <RC.WishListTableHeader>Product</RC.WishListTableHeader>
        <RC.WishListTableHeader>Stock</RC.WishListTableHeader>
        <RC.WishListTableHeader>Price</RC.WishListTableHeader>
        <RC.WishListTableHeader>&nbsp;</RC.WishListTableHeader>
        <RC.WishListTableHeader>&nbsp;</RC.WishListTableHeader>
      </RC.WhishListTableRow>
    { wishlists && wishlists.map((data, index) => (
      <RC.WhishListTableRow key={index}>
        <RC.WhishListTableDataImage>
          <RC.WhishListTableDataImageTag src={data.productId.productImages[data.imageType - 1].image}/>
        </RC.WhishListTableDataImage>
        <RC.WhishListTableDataItemName>
          <RC.WhishListTableDataProName>{data.productId.productName}</RC.WhishListTableDataProName>
          <RC.WishListRRDiv>
            <RC.StarSVG>
              <RC.ProductSVGPath d={RC.StarAttrArea}></RC.ProductSVGPath>
              <RC.ProductSVGPath d={RC.StarAttrPerimeter}></RC.ProductSVGPath>
            </RC.StarSVG>
            <RC.ProductInfoReview>{data.productId.productRating} Reviews</RC.ProductInfoReview>
          </RC.WishListRRDiv>
        </RC.WhishListTableDataItemName>
        <RC.WhishListTableDataSS>
          <RC.WhishListTableDataSSText stock={data.productId.productStatus}>{data.productId.productStatus}</RC.WhishListTableDataSSText>
        </RC.WhishListTableDataSS>
        <RC.WhishListTableDataPrice>${data.productId.productPrice}</RC.WhishListTableDataPrice>
        <RC.WhishListTableDataActionBtn>
          <RC.WhishListTableActionBtn onClick={() => handlKartCreate(data, index)} className="btn btn-md">{(loading && clickedBtn === index) ? <DualRingLoad /> : 'Add Cart'}</RC.WhishListTableActionBtn>
        </RC.WhishListTableDataActionBtn>
        <RC.WhishListTableDataDel>
          <RC.WhishListTableDataDelButton onClick={() => handleDelWish(data)}>x</RC.WhishListTableDataDelButton>
        </RC.WhishListTableDataDel>
      </RC.WhishListTableRow>
      ))}
      { processing && <DualRingLoadScreen />}
    </RC.WhishListTable>
  )
}