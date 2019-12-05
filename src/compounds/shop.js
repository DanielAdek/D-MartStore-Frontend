import React, { Fragment, useState }from 'react';
import Paginator from 'react-paginate';
import * as RC from '../assets/styles/shop';
import { ShopFilter } from '../components/shopFilter';
import { Product } from '../components/product';
import { ProductData } from '../assets/map.v';

export const Shop = () => {
  const [showProductActionBtns, setShowProductActionBtns] = useState(false);
  const displayActionBtn = index => setShowProductActionBtns(index);

  const hideActionBtn = () => setShowProductActionBtns(false);
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
    </Fragment>
  )
}