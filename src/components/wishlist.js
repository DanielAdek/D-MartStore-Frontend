import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alias } from '../importer';
import * as RC from '../assets/styles/wishlist';
// import { ProductData } from '../assets/map.v';

const { addToKart, retreiveWishLists } = Alias.pathToActions('WishAndKartCRUD');
const { Spiner } = Alias.pathToComponents('loader');

export const Whishlist = props => {
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
    const kartData = props.kartAll ? wishlists : data;
    dispatch(addToKart({ kartData }));
  }

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
          <RC.WhishListTableDataImageTag src={data.productId.productImages[0].image}/>
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
          <RC.WhishListTableActionBtn onClick={() => handlKartCreate(data, index)} className="btn btn-md">{(loading && clickedBtn === index) ? <Spiner fullScreen={true} type="dual-ring" size={150}/> : 'Add Cart'}</RC.WhishListTableActionBtn>
        </RC.WhishListTableDataActionBtn>
        <RC.WhishListTableDataDel>
          <RC.WhishListTableDataDelButton>x</RC.WhishListTableDataDelButton>
        </RC.WhishListTableDataDel>
      </RC.WhishListTableRow>
      ))}
      { processing && <Spiner fullScreen={true} type="dual-ring" size={150}/>}
    </RC.WhishListTable>
  )
}