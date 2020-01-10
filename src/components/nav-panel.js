import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Alias } from '../importer';

const Nav = Alias.pathToSyles('nav-p');

const { retrieveUserData } = Alias.pathToActions('Authentication');
const { retreiveProducts, retreiveProductsByFilter, resetProductsByFilter } = Alias.pathToActions('ProductCRUD');
const { retreiveKartList, retreiveWishLists } = Alias.pathToActions('WishAndKartCRUD');

export const NavigationPanel = props => {
	// Redux Hooks
	const history = useHistory();
	const dispatch = useDispatch();
	const user = useSelector(state => state.Authenticate.user);
	const products = useSelector(state => state.ProductCRUD.products)
	const kartList = useSelector(state => state.WishAndKartCRUD.karts);
	const wishList = useSelector(state => state.WishAndKartCRUD.wishLists);
	const processing = useSelector(state => state.Loading.loading);

	// React Hooks
	const [catArrClicked, setCatArrClicked] = useState(props.initialCatGrowState);

	const token = localStorage.getItem('x-auth-t');

	useEffect(() => {
		if (!user && token) {
			dispatch(retrieveUserData());
		}
		if (!products) {
			dispatch(retreiveWishLists());
			dispatch(retreiveKartList());
		}
	}, [dispatch, user, products, token]);


	const toggledCatArr = () => setCatArrClicked(!catArrClicked);

	const handleShowAll = searchWord => {
		setCatArrClicked(false);
		dispatch(retreiveProductsByFilter(searchWord));
		history.push('/shop');
	}

	const handleRefresh = req => {
		if (req === 1) {
			dispatch(retreiveWishLists());
			dispatch(retreiveKartList());
			dispatch(retreiveProducts());
			dispatch(resetProductsByFilter())
		} else {
			window.location.reload();
		}
	}
	
	return (
		<Nav.PanelCover>
			<Nav.PanelContainer>
				<Nav.PanelFlex>
					<Nav.PanelCatCover grow={catArrClicked}>
						<Nav.PanelCatHeading onClick={toggledCatArr}>
							<Nav.PanelSVGCat>
								<Nav.PanelSVGPath d={Nav.categoryAttrSVG}></Nav.PanelSVGPath>
							</Nav.PanelSVGCat>
								Shop By Category
							<Nav.PanelSVGCatArr click={catArrClicked}>
								<Nav.PanelSVGPath d={Nav.categoryArrowAttrSVG}></Nav.PanelSVGPath>
							</Nav.PanelSVGCatArr>
						</Nav.PanelCatHeading>
						<Nav.PanelCatListContainer show={catArrClicked}>
							<Nav.PanelCatListItem onClick={() => handleShowAll('accessories')}>Accessories</Nav.PanelCatListItem>
							<Nav.PanelCatListItem onClick={() => handleShowAll('laptop')}>Laptops</Nav.PanelCatListItem>
							<Nav.PanelCatListItem onClick={() => handleShowAll('fashion')}>Fashion</Nav.PanelCatListItem>
							<Nav.PanelCatListItem onClick={() => handleShowAll('camera')}>Camera</Nav.PanelCatListItem>
							<Nav.PanelCatListItem onClick={() => handleShowAll('gamepad')}>Gamepad</Nav.PanelCatListItem>
							<Nav.PanelCatListItem onClick={() => handleShowAll('mobile')}>Mobile</Nav.PanelCatListItem>
							<Nav.PanelCatListItem onClick={() => handleShowAll('shop')}>Shop</Nav.PanelCatListItem>
							<Nav.PanelCatListItem onClick={() => handleShowAll('headphone')}>HeadPhone</Nav.PanelCatListItem>
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
								{!token ? (
									<Link to="/login">Login</Link>
								) : (
									<Link to="/dashboard" className="nav-link" id="navbarDropdown">
										Dashboard
									</Link>
								)}
							</Nav.PanelLinKLi>
							<Nav.PanelLinKLi className="nav-item dropdown">
								<Link
									to="#"
									className="nav-link dropdown-toggle"
									id="navbarDropdown"
									role="button"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									Information
								</Link>
								<Nav.PanelDropdownMenu className="dropdown-menu" aria-labelledby="navbarDropdown">
									<Link className="dropdown-item" to="/contact-us">
										Contact Us
									</Link>
									<Link className="dropdown-item" to="/about">
										About Us
									</Link>
									<Link className="dropdown-item" to="#">
										Delivery Information
									</Link>
									<Nav.PanelDropdownDiver className="dropdown-divider" />
									<Link className="dropdown-item" to="#">
										Privacy Policy
									</Link>
								</Nav.PanelDropdownMenu>
							</Nav.PanelLinKLi>
							<Nav.PanelLinKLi>
								<Link to="/shop">Gallery</Link>
							</Nav.PanelLinKLi>
						</Nav.PanelLinkUl>
					</Nav.PanelLinksCover>
					<Nav.PanelIndicatorCover>
					<Nav.PanelRefreshContainer className="nav-item dropdown">
							<Nav.PanelDropdownLink
								to="#"
								className="nav-link dropdown-toggle"
								id="navbarDropdown"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
								>
								<Nav.PanelRefreshImage animate={processing} src={require('../assets/images/refresh.png')} alt="refresh" title="Refresh Page"/>
							</Nav.PanelDropdownLink>
							<Nav.PanelDropdownMenu className="dropdown-menu" aria-labelledby="navbarDropdown">
									<Link onClick={() => handleRefresh(1)} className="dropdown-item" to="#">
										Referesh Page
									</Link>
									<Nav.PanelDropdownDiver className="dropdown-divider" />
									<Link onClick={() => handleRefresh(2)} className="dropdown-item" to="#">
										Deep Refresh Page
									</Link>
								</Nav.PanelDropdownMenu>
						</Nav.PanelRefreshContainer>
						{/* <Nav.PanelRefreshContainer onClick={handleRefresh}> */}
							{/* <Nav.PanelRefreshContainer> */}
								{/* <Nav.PanelRefreshImage animate={processing} src={require('../assets/images/refresh.png')} alt="refresh" title="Refresh Page"/> */}
							{/* </Nav.PanelRefreshContainer> */}
						{/* </Nav.PanelRefreshContainer> */}
						<Nav.PanelWKContainer>
							<Nav.PanelWLCountainer>
								<Link to="/wishlist">
									<Nav.PanelSVGKW>
										<Nav.PanelSVGPath d={Nav.wishListSVGAttr}></Nav.PanelSVGPath>
									</Nav.PanelSVGKW>
									<Nav.PanelWLKCount>{(wishList && wishList.length) || 0}</Nav.PanelWLKCount>
								</Link>
							</Nav.PanelWLCountainer>

							<Nav.PanelKartCountainer>
								<Link to="/kart">
									<Nav.PanelSVGKW>
										<Nav.PanelKartSVGCircl cx="7" cy="17" r="2"></Nav.PanelKartSVGCircl>
										<Nav.PanelKartSVGCircl cx="15" cy="17" r="2"></Nav.PanelKartSVGCircl>
										<Nav.PanelSVGPath d={Nav.kartSVGAttr}></Nav.PanelSVGPath>
									</Nav.PanelSVGKW>
									<Nav.PanelWLKCount>{(kartList && kartList.length) || 0}</Nav.PanelWLKCount>
								</Link>
							</Nav.PanelKartCountainer>
						</Nav.PanelWKContainer>
					</Nav.PanelIndicatorCover>
				</Nav.PanelFlex>
			</Nav.PanelContainer>
		</Nav.PanelCover>
	);
};
