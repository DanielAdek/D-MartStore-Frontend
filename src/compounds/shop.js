import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Paginator from 'react-paginate';
import { Alias } from '../importer';
import * as RC from '../assets/styles/shop';
import { ShopFilter } from '../components/shopFilter';
import { Product } from '../components/product';
import { ProductData } from '../assets/map.v';
import { Modal } from '../components/modal';
import { MagnifyProduct } from '../components/magnifyProduct';

const { retreiveProducts } = Alias.pathToActions('ProductCRUD');
const { addToWishList, addToKart } = Alias.pathToActions('WishAndKartCRUD');
const { DualRingLoadScreen } = Alias.pathToComponents('spiners');

export const Shop = () => {
	// Redux Hooks
	const dispatch = useDispatch();
	const products = useSelector(state => state.ProductCRUD.products);
	const reqFilter = useSelector(state => state.ProductCRUD.reqFilter);
	const processing = useSelector(state => state.Loading.loading);

	// React Hooks
	const [showProductActionBtns, setShowProductActionBtns] = useState(false);
	const [filteredProduct, setFilteredProduct] = useState(null);
	const [currentData, setCurrentData] = useState(ProductData[0]);
	const [currentFigure, setCurrentFigure] = useState(1);
	const [magnifyProduct, setMagnifyProduct] = useState(false);
	const [currentImage, setCurrentImage] = useState({});
	const [paginationPerPageValue, sePaginationPerPageValue] = useState(0);

	useEffect(() => {
		if (!products) {
			dispatch(retreiveProducts());
		}
	}, [dispatch, products]);

	useEffect(() => {
		if (reqFilter) {
			if (reqFilter.productBrand && !reqFilter.productPrices.modifield && !reqFilter.productColors.length) {
				setFilteredProduct(reqFilter && products.products.filter(data => data.productBrand === reqFilter.productBrand))
			}
			if (!reqFilter.productBrand && reqFilter.productPrices.modifield && !reqFilter.productColors.length) {
				setFilteredProduct(reqFilter && products.products.filter(data => data.productPrice >= reqFilter.productPrices.min && data.productPrice <= reqFilter.productPrices.max))
			}
			if (!reqFilter.productBrand && !reqFilter.productPrices.modifield && reqFilter.productColors.length) {
				setFilteredProduct(reqFilter && products.products.filter(data => reqFilter.productColors.includes(data.productColor)))
			}
			if (reqFilter.productBrand && reqFilter.productPrices.modifield && !reqFilter.productColors.length) {
				setFilteredProduct(reqFilter && products.products.filter(data => data.productBrand === reqFilter.productBrand && (data.productPrice >= reqFilter.productPrices.min && data.productPrice <= reqFilter.productPrices.max) ))
			}
			if (reqFilter.productBrand && !reqFilter.productPrices.modifield && reqFilter.productColors.length) {
				setFilteredProduct(reqFilter && products.products.filter(data => data.productBrand === reqFilter.productBrand && reqFilter.productColors.includes(data.productColor)))
			}
			if (!reqFilter.productBrand && reqFilter.productPrices.modifield && reqFilter.productColors.length) {
				setFilteredProduct(reqFilter && products.products.filter(data => (data.productPrice >= reqFilter.productPrices.min && data.productPrice <= reqFilter.productPrices.max) && reqFilter.productColors.includes(data.productColor) ))
			}
			if (reqFilter.productBrand && reqFilter.productPrices.modifield && reqFilter.productColors.length) {
				setFilteredProduct(reqFilter && products.products.filter(data => data.productBrand === reqFilter.productBrand && (data.productPrice >= reqFilter.productPrices.min && data.productPrice <= reqFilter.productPrices.max) && reqFilter.productColors.includes(data.productColor) ))
			}
		} else {
			setFilteredProduct(products && products.products);
		}
	}, [products, reqFilter]);

	const displayActionBtn = index => setShowProductActionBtns(index);

	const hideActionBtn = () => setShowProductActionBtns(false);

  const handleImageToManify = dat => setCurrentImage({ src: dat.image, id: dat.id});

  const handleMagnifyProduct = data => {
    setMagnifyProduct(true);
    setCurrentData(data)
    setCurrentImage({ src: data.productImages[0] && data.productImages[0].image, id: data.productImages[0] && data.productImages[0].id })
  }
  
  const closeModal = () => {
    setMagnifyProduct(false);
    setCurrentFigure(1);
  }

	const handleQtyAmout = event => {
		let figure = currentFigure;
		if (event.target.textContent === '+') {
			figure += 1;
		}
		if (event.target.textContent === '-') {
			figure -= 1;
			if (currentFigure <= 1) {
				figure = 1;
			}
		}
		setCurrentFigure(figure);
	};

	const handleChangeQty = event => setCurrentFigure(event.target.value <= 1 ? 1 : parseInt(event.target.value, 10));


	const handleKartCreate = product => {
		const kartData = { productId: product._id, quantity: currentFigure || 1, imageType: currentImage.id || 1};
		dispatch(addToKart({ kartData }));
	}

	const handleWishListCreate = product => {
		const token = localStorage.getItem('token');
		const data = { imageType: currentImage.id || 1, productId: product._id, wishlistcode: token || "" }
		dispatch(addToWishList(data));
	}

	const handlePageChange = page => sePaginationPerPageValue((page.selected) * 12);

	const pageCount = (products && products.products.length <= 12) ? 1 : products && Math.ceil(products.products.length / 12);
	const pageCountDev = Math.ceil(ProductData.length / 12);
	const displayProductDev = ProductData.slice(paginationPerPageValue, (paginationPerPageValue + 12));
	const displayProductProduction = filteredProduct && filteredProduct.slice(paginationPerPageValue, (paginationPerPageValue + 12));

	return (
		<Fragment>
			<RC.ShopContainer>
			{ processing && <DualRingLoadScreen />}
				<ShopFilter />
				<RC.ShopMainSection>
					{((filteredProduct && displayProductProduction) || displayProductDev).map((data, index) => (
						<Product
							key={index}
							index={index}
							data={data}
							width={'30%'}
							hideActionBtn={hideActionBtn}
							Styles={{ mr: '30px', mb: '20px' }}
							magnify={() => handleMagnifyProduct(data)}
							showProductActionBtns={showProductActionBtns}
							handleKartCreate={() => handleKartCreate(data)}
							displayActionBtn={() => displayActionBtn(index)}
							handleWishListCreate={() => handleWishListCreate(data)}
						/>
					))}
				</RC.ShopMainSection>
			</RC.ShopContainer>
			<RC.ShopPagination>
				<Paginator
					previousLabel={'previous'}
					nextLabel={'next'}
					breakLabel={'...'}
					breakClassName={'break-me'}
					marginPagesDisplayed={2}
					pageRangeDisplayed={5}
					onPageChange={handlePageChange}
					containerClassName={'pagination'}
					subContainerClassName={'pages pagination'}
					activeClassName={'pagination-active'}
					pageCount={((pageCount || pageCountDev) || 1)}
				/>
			</RC.ShopPagination>
			<Modal visible={magnifyProduct}>
				<MagnifyProduct
					closeModal={closeModal}
					currentData={currentData}
					currentImage={currentImage}
					currentFigure={currentFigure}
					handleQtyAmout={handleQtyAmout}
					handleChangeQty={handleChangeQty}
					handleImageToManify={handleImageToManify}
					handleKartCreate={() => handleKartCreate(currentData)}
					handleWishListCreate={() => handleWishListCreate(currentData)}
				/>
			</Modal>
		</Fragment>
	);
};
