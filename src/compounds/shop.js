import React, { Fragment, useState }from 'react';
import Paginator from 'react-paginate';
import * as RC from '../assets/styles/shop';
import { ShopFilter } from '../components/shopFilter';
import { Product } from '../components/product';
import { ProductData } from '../assets/map.v';
import { Modal } from '../components/modal';
import { MagnifyProduct } from '../components/magnifyProduct';

export const Shop = () => {
  const [showProductActionBtns, setShowProductActionBtns] = useState(false);
  const [currentData, setCurrentData] = useState(ProductData[0]);
  const [currentFigure, setCurrentFigure] = useState(1);
  const [magnifyProduct, setMagnifyProduct] = useState(false);
  const [currentImage, setCurrentImage] = useState({});

  const displayActionBtn = index => setShowProductActionBtns(index);

  const hideActionBtn = () => setShowProductActionBtns(false);

  const handleImageToManify = (dat) => setCurrentImage({ src: dat.image, type: dat.type});

  const handleMagnifyProduct = data => {
    setMagnifyProduct(true);
    setCurrentData(data)
    setCurrentImage({ src: data.product.productImages[0].image, type: data.product.productImages[0].type })
  }
  
  const closeModal = data => {
    setMagnifyProduct(false);
    setCurrentFigure(1);
  }

  // const handleStars = () => {}

  const handleQtyAmout = event => {
    let figure = currentFigure;
    if (event.target.textContent === "+") { figure+=1; }
    if (event.target.textContent === "-") {
      figure -= 1;
      if (currentFigure <= 1) { figure = 1};
    }
    setCurrentFigure(figure);
  }

  const handleChangeQty = (event) => {
    setCurrentFigure(event.target.value <= 1 ? 1 : parseInt(event.target.value, 10));
  }

  return (
    <Fragment>
      <RC.ShopContainer>
        <ShopFilter />
        <RC.ShopMainSection>
        { ProductData.map((data, index) => <Product
          key={index}
          index={index} 
          data={data.product}
          hideActionBtn={hideActionBtn}
          Styles={{ mr: '30px', mb: '20px'}}
          magnify={() => handleMagnifyProduct(data)}
          showProductActionBtns={showProductActionBtns}
          displayActionBtn={() => displayActionBtn(index)} />)}
        </RC.ShopMainSection>
      </RC.ShopContainer>
      <RC.ShopPagination>
        <Paginator
          previousLabel={"<"}
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
          handleImageToManify={handleImageToManify}
        />
      </Modal>
    </Fragment>
  )
}