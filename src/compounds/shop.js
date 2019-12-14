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

export const Shop = () => {
	// Redux Hooks
	const dispatch = useDispatch();
	const products = useSelector(state => state.ProductCRUD.products);

	// React Hooks
	const [showProductActionBtns, setShowProductActionBtns] = useState(false);
	const [currentData, setCurrentData] = useState(ProductData[0]);
	const [currentFigure, setCurrentFigure] = useState(1);
	const [magnifyProduct, setMagnifyProduct] = useState(false);
	const [currentImage, setCurrentImage] = useState({});

	useEffect(() => {
		dispatch(retreiveProducts());
		}, [dispatch]);

		useEffect(() => {
			// setCurrentData(products);
		}, [products]);

	const displayActionBtn = index => setShowProductActionBtns(index);

	const hideActionBtn = () => setShowProductActionBtns(false);

  const handleImageToManify = dat => setCurrentImage({ src: dat.image, id: dat.id});

  const handleMagnifyProduct = data => {
    setMagnifyProduct(true);
    setCurrentData(data)
    setCurrentImage({ src: data.productImages[0].image, id: data.productImages[0].id })
  }
  
  const closeModal = data => {
    setMagnifyProduct(false);
    setCurrentFigure(1);
  }

	// const handleStars = () => {}

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

	const handleChangeQty = event => {
		setCurrentFigure(event.target.value <= 1 ? 1 : parseInt(event.target.value, 10));
	};

	const handleKartCreate =() => {
		alert('Coming Soon...')
	}

	const handleWishListCreate = () => {
		alert("I'm on it....")
	}

	return (
		<Fragment>
			<RC.ShopContainer>
				<ShopFilter />
				<RC.ShopMainSection>
					{products && products.map((data, index) => (
						<Product
							key={index}
							index={index}
							data={data}
							hideActionBtn={hideActionBtn}
							Styles={{ mr: '30px', mb: '20px' }}
							handleKartCreate={handleKartCreate}
							magnify={() => handleMagnifyProduct(data)}
							handleWishListCreate={handleWishListCreate}
							showProductActionBtns={showProductActionBtns}
							displayActionBtn={() => displayActionBtn(index)}
						/>
					))}
				</RC.ShopMainSection>
			</RC.ShopContainer>
			<RC.ShopPagination>
				<Paginator
					previousLabel={'<'}
					nextLabel={'>'}
					breakLabel={'...'}
					breakClassName={'break-me'}
					marginPagesDisplayed={2}
					pageRangeDisplayed={5}
					containerClassName={'pagination'}
					subContainerClassName={'pages pagination'}
					activeClassName={'pagination-active'}
					pageCount={ProductData.length}
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
					handleKartCreate={handleKartCreate}
					handleImageToManify={handleImageToManify}
					handleWishListCreate={handleWishListCreate}
				/>
			</Modal>
		</Fragment>
	);
};
