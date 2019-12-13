import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Nav from '../assets/styles/nav-p';
import { ProductData } from '../assets/map.v';

export const NavigationPanel = props => {
  const [ catArrClicked, setCatArrClicked] = useState(props.initialCatGrowState);
  const toggledCatArr = () => setCatArrClicked(!catArrClicked);
  return (
    <Nav.PanelCover>
      <Nav.PanelContainer>
        <Nav.PanelFlex>
          <Nav.PanelCatCover grow={catArrClicked}>
            <Nav.PanelCatHeading>
              <Nav.PanelSVGCat>
                <Nav.PanelSVGPath d={Nav.categoryAttrSVG}></Nav.PanelSVGPath>
              </Nav.PanelSVGCat>
              Shop By Category
              <Nav.PanelSVGCatArr click={catArrClicked} onClick={toggledCatArr}>
                <Nav.PanelSVGPath d={Nav.categoryArrowAttrSVG}></Nav.PanelSVGPath>
              </Nav.PanelSVGCatArr>
            </Nav.PanelCatHeading>
            <Nav.PanelCatListContainer show={catArrClicked}>
              <Nav.PanelCatListItem>Accessories</Nav.PanelCatListItem>
              <Nav.PanelCatListItem>Laptops</Nav.PanelCatListItem>
              <Nav.PanelCatListItem>Fashion</Nav.PanelCatListItem>
              <Nav.PanelCatListItem>Camera</Nav.PanelCatListItem>
              <Nav.PanelCatListItem>Gamepad</Nav.PanelCatListItem>
              <Nav.PanelCatListItem>Mobile</Nav.PanelCatListItem>
              <Nav.PanelCatListItem>Shop</Nav.PanelCatListItem>
              <Nav.PanelCatListItem>HeadPhone</Nav.PanelCatListItem>
            </Nav.PanelCatListContainer>
          </Nav.PanelCatCover>
          <Nav.PanelLinksCover>
            <Nav.PanelLinkUl>
              <Nav.PanelLinKLi>
                <Link to="/">Home</Link>
              </Nav.PanelLinKLi>
              <Nav.PanelLinKLi>
                <Link to="/shop">Shop</Link>
              </Nav.PanelLinKLi>
              <Nav.PanelLinKLi className="nav-item">
                <Link to="/dashboard" className="nav-link" id="navbarDropdown">Dashboard</Link>
              </Nav.PanelLinKLi>
              <Nav.PanelLinKLi className="nav-item dropdown">
                <Link to="/information" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Information</Link>
                <Nav.PanelDropdownMenu className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/contact-us">Contact Us</Link>
                  <Link className="dropdown-item" to="/about">About Us</Link>
                  <Link className="dropdown-item" to="/Delivery-info">Delivery Information</Link>
                  <Nav.PanelDropdownDiver className="dropdown-divider"/>
                  <Link className="dropdown-item" to="/privacy-policy">Privacy Policy</Link>
                </Nav.PanelDropdownMenu>
              </Nav.PanelLinKLi>
              <Nav.PanelLinKLi>
                <Link to="/gallery">Gallery</Link>
              </Nav.PanelLinKLi>
            </Nav.PanelLinkUl>
          </Nav.PanelLinksCover>
          <Nav.PanelIndicatorCover>

            <Nav.PanelWLCountainer>
              <Link to="/wishlist">
                <Nav.PanelSVGKW>
                  <Nav.PanelSVGPath d={Nav.wishListSVGAttr}></Nav.PanelSVGPath>
                </Nav.PanelSVGKW>
                <Nav.PanelWLKCount>{ProductData.length}</Nav.PanelWLKCount>
              </Link>
            </Nav.PanelWLCountainer>

            <Nav.PanelKartCountainer>
              <Link to="/kart">
                <Nav.PanelSVGKW>
                  <Nav.PanelKartSVGCircl cx="7" cy="17" r="2"></Nav.PanelKartSVGCircl>
                  <Nav.PanelKartSVGCircl cx="15" cy="17" r="2"></Nav.PanelKartSVGCircl>
                  <Nav.PanelSVGPath d={Nav.kartSVGAttr}></Nav.PanelSVGPath>
                </Nav.PanelSVGKW>
                <Nav.PanelWLKCount>{ProductData.length}</Nav.PanelWLKCount>
              </Link>
            </Nav.PanelKartCountainer>

          </Nav.PanelIndicatorCover>
        </Nav.PanelFlex>
      </Nav.PanelContainer>
    </Nav.PanelCover>
  );
}