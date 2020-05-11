import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Form } from 'form-my-simple-validation';
import { Alias } from '../importer';
import * as RC from '../assets/styles/myaccount';
import FormSchema from '../utils/validationSchema';

const { LoremIpsum } = Alias.pathToAssets('map.v');
const { Modal } = Alias.pathToComponents('modal');
const { retreiveOrders } = Alias.pathToActions('Orders');
const { editProfile } = Alias.pathToActions('EditProfile');
const { DualRingLoadScreen } = Alias.pathToComponents('spiners');
const { handleProductCreate } = Alias.pathToActions('ProductCRUD');
const { formatDate, truncate, ImageToBase64, generateCode, Alert } = Alias.pathToUtils('helpers');

const TableRows = orders => {
	return (
		orders &&
		orders.map((data, index) => (
			<RC.DashboardTableRow key={index} bgColorOnHover="#f2f2f2">
				<RC.DashboardTableData>{data._id}</RC.DashboardTableData>
				<RC.DashboardTableData>{formatDate(data.createdAt)}</RC.DashboardTableData>
				<RC.DashboardTableData>{data.orderStatus}</RC.DashboardTableData>
				<RC.DashboardTableData>${data.sumTotalOrdersPrice}</RC.DashboardTableData>
			</RC.DashboardTableRow>
		))
	);
};

const OrderHistoryTableRows = orders => {
	return orders.map((data, index) => (
		<RC.OrderHistoryTableRow key={index} bgColorOnHover="#f2f2f2">
			<RC.OrderHistoryTableData>{data._id}</RC.OrderHistoryTableData>
			<RC.OrderHistoryTableData>{formatDate(data.createdAt)}</RC.OrderHistoryTableData>
			<RC.OrderHistoryTableData>{data.orderStatus}</RC.OrderHistoryTableData>
			<RC.OrderHistoryTableData>
				${data.sumTotalOrdersPrice} for {data.productId.length} Items
			</RC.OrderHistoryTableData>
		</RC.OrderHistoryTableRow>
	));
};

const PreviewProduct = props => {
	return (
		<RC.Body>
			<RC.CloseBtn onClick={props.closeModal}>X</RC.CloseBtn>
			<RC.ContentBody>
				<RC.ProductMagnifiedImageCont>
					<RC.ProductMagnifiedImage src={props.currentImage.src} alt="product" />
				</RC.ProductMagnifiedImageCont>
			</RC.ContentBody>
			<RC.ContentBody>
				<RC.ProductRightSide>
					<RC.ProductName>{props.product.productName}</RC.ProductName>
					<RC.ProductHeading>{props.product.productCaptionHeading}!</RC.ProductHeading>
					<RC.ProductDetails>{props.product.productDescription}</RC.ProductDetails>
					<hr />
					<RC.ProductStatus>
						<RC.ProductStatText>Brand: {props.product.productBrand}</RC.ProductStatText>
						<RC.ProductStatText>Category: {props.product.productCategory}</RC.ProductStatText>
						<RC.ProductStatText>Code: {props.product.productCode}</RC.ProductStatText>
					</RC.ProductStatus>
					<RC.ProductPrice>${props.product.productPrice}</RC.ProductPrice>
					<RC.ProductActionButtonSec>
						<RC.ProductActionButton
							onClick={props.createProduct}
							className="btn btn-md"
							bgColor="#ffd333"
							hClr="#9b9b9b"
						>
							Upload
						</RC.ProductActionButton>
						<RC.ProductActionButton
							onClick={props.closeModal}
							className="btn btn-md btn-secondary"
							bgColor="#3d464d"
							hClr="#9b9b9b"
						>
							Return
						</RC.ProductActionButton>
					</RC.ProductActionButtonSec>
				</RC.ProductRightSide>
				<RC.ProductImagesContainer>
					{props.product.productImages &&
						props.product.productImages.map((dat, i) => (
							<RC.ProductImages
								key={i}
								onClick={props.handleImageToManify.bind(this, dat)}
								src={dat.uri}
								alt="product image"
							/>
						))}
				</RC.ProductImagesContainer>
			</RC.ContentBody>
		</RC.Body>
	);
};

export const DashBoard = () => {
	//Redux Hooks
	const dispatch = useDispatch();
	const orders = useSelector(state => state.Orders.orders);
	const user = useSelector(state => state.Authenticate.user);

	useEffect(() => {
    dispatch(retreiveOrders(true));
	}, [dispatch]);

	return (
		<RC.DashboardContainer>
			<RC.DashboardCardContainer>
				<RC.DashboardCardBody className="card">
					<RC.DashboardAvatar>
						<RC.DashboardImageAvatar src={user && user.avatar} />
					</RC.DashboardAvatar>
					<RC.DashboardUserName className="mt-3">{user && (user.username || 'Daniel Adek')}</RC.DashboardUserName>
					<RC.DashboardUserEmail>{user && (user.email || 'maildaniel.me1@gmail.com')}</RC.DashboardUserEmail>
				</RC.DashboardCardBody>
			</RC.DashboardCardContainer>
			<RC.DashboardCardContainer>
				<RC.DashboardCardBody className="card" align="flex-start">
					<RC.DashboardContact>Contact</RC.DashboardContact>
					<RC.DashboardAddrLabel>Address</RC.DashboardAddrLabel>
					<RC.DashboardAddr>{user && (user.userAddress || 'Plot 225, Freedom Way Lekki, Lagos, Nigeria.')}</RC.DashboardAddr>
					<RC.DashboardPhoneLabel>Phone Number</RC.DashboardPhoneLabel>
					<RC.DashboardPhoneNo>{user && (user.phoneNumber || '(+234) 8182089681')}</RC.DashboardPhoneNo>
					<RC.DashboardEmailLabel>Email Address</RC.DashboardEmailLabel>
					<RC.DashboardEmail>{user && (user.email || 'maildaniel.me1@gmail.com')}</RC.DashboardEmail>
				</RC.DashboardCardBody>
			</RC.DashboardCardContainer>
			<RC.DashboardCardContainer w="100%" mt="20px">
				<RC.DashboardRecentOrderTitle>Recent Orders</RC.DashboardRecentOrderTitle>
				<RC.DashboardTable>
					<RC.DashboardTbody>
						<RC.DashboardTableRow>
							<RC.DashboardTableHeader>Order</RC.DashboardTableHeader>
							<RC.DashboardTableHeader>Date</RC.DashboardTableHeader>
							<RC.DashboardTableHeader>Status</RC.DashboardTableHeader>
							<RC.DashboardTableHeader>Total</RC.DashboardTableHeader>
						</RC.DashboardTableRow>
						{TableRows(orders)}
					</RC.DashboardTbody>
				</RC.DashboardTable>
			</RC.DashboardCardContainer>
		</RC.DashboardContainer>
	);
};

export const EditProfile = () => {
  //React Hooks
  const [userProfile, setUserProfile] = useState({ uploadLabel:'choose file...' });

	//Redux Hooks
	const dispatch = useDispatch();
	const processing = useSelector(state => state.Loading.loading);

	const handlechange = e => {
		setUserProfile({ ...userProfile, [e.target.name]: e.target.value });
  };
  
  const handleImageChange = event => {
		const { target } = event;
		let uri = null;

		ImageToBase64(target.files[0], base64 => {
			uri = base64;

			// Set states for uploaded files
			setUserProfile({ ...userProfile, [target.name]: target.files[0], uploadLabel: target.files[0].name, avatarBase64: uri });
		});
		setUserProfile({ ...userProfile, [target.name]: target.files[0], uploadLabel: target.files[0].name, avatarBase64: uri });
	};


	const handleUpdate = () => {
		const { username, email, phoneNumber, userAddress, avatar } = userProfile;
		const formData = new FormData();
		formData.append('avatar', avatar);
		formData.append('username', username);
		formData.append('email', email);
		formData.append('phoneNumber', phoneNumber);
		formData.append('userAddress', userAddress);
    dispatch(editProfile(formData));
    // setUserProfile({});
  }


	return (
		<RC.EditProfileContainer>
			{processing && <DualRingLoadScreen />}
			<RC.EditProfileHeading>Edit Profile</RC.EditProfileHeading>
      <RC.EditProfilePicture>{ userProfile.avatarBase64 ?
        <RC.EditProfileImage src={userProfile.avatarBase64} alt="Uploaded Profile" /> : 'Upload Picture' }
      </RC.EditProfilePicture>
      <RC.FormGroup 
        className="custom-file mb-3"
        style={{ width: '23%', margin: '0px 38%'}}
        >
        <RC.FormInput
          type="file"
          name="avatar"
					id="customFile"
					accept="image/*"
          onChange={handleImageChange}
          className="custom-file-input"
        />
        <RC.FormInputLabel className="custom-file-label" htmlFor="customFile">
          {truncate(userProfile.uploadLabel, 14)}
        </RC.FormInputLabel>
				</RC.FormGroup>
			<RC.Form className="mt-5">
				<RC.FormGrid className="form-row">
					<RC.FormGroup className="form-group col-md-6">
						<RC.FormInputLabel htmlFor="inputEmail4">Username</RC.FormInputLabel>
						<RC.FormInput
							type="text"
							className="form-control"
							id="inputEmail4"
							line={true}
							name="username"
							onChange={handlechange}
						/>
					</RC.FormGroup>
					<RC.FormGroup className="form-group col-md-6">
						<RC.FormInputLabel htmlFor="inputEmail4">Email Address</RC.FormInputLabel>
						<RC.FormInput
							type="email"
							onChange={handlechange}
							class="form-control"
							id="inputEmail4"
							line={true}
							name="email"
						/>
					</RC.FormGroup>
					<RC.FormGroup className="form-group col-md-6">
						<RC.FormInputLabel htmlFor="inputEmail4">Phone Number</RC.FormInputLabel>
						<RC.FormInput
							type="text"
							onChange={handlechange}
							className="form-control"
							id="inputEmail4"
							line={true}
							name="phoneNumber"
						/>
					</RC.FormGroup>
					<RC.FormGroup className="form-group col-md-6">
						<RC.FormInputLabel htmlFor="inputEmail4">Contact Address</RC.FormInputLabel>
						<RC.FormInput
							onChange={handlechange}
							type="text"
							className="form-control"
							id="inputEmail4"
							line={true}
							name="userAddress"
						/>
					</RC.FormGroup>
					<RC.FormButton
						onClick={handleUpdate}
						type="button"
						bgColor="#ffd333"
						color="#3d464d"
						className="btn"
					>
						Update
					</RC.FormButton>
				</RC.FormGrid>
			</RC.Form>
		</RC.EditProfileContainer>
	);
};

export const OrderHistory = () => {
	//Redux Hooks
	const dispatch = useDispatch();
	const ordersHistory = useSelector(state => state.Orders.orders);

	useEffect(() => {
		dispatch(retreiveOrders());
	}, [dispatch]);

	return (
		<RC.OrderHistoryContainer>
			<RC.OrderHistoryTitle>Order History</RC.OrderHistoryTitle>
			<RC.OrderHistoryTable>
				<RC.OrderHistoryTbody>
					<RC.OrderHistoryTableRow>
						<RC.OrderHistoryTableHeader>Order</RC.OrderHistoryTableHeader>
						<RC.OrderHistoryTableHeader>Date</RC.OrderHistoryTableHeader>
						<RC.OrderHistoryTableHeader>Status</RC.OrderHistoryTableHeader>
						<RC.OrderHistoryTableHeader>Total</RC.OrderHistoryTableHeader>
					</RC.OrderHistoryTableRow>
					{OrderHistoryTableRows(ordersHistory)}
				</RC.OrderHistoryTbody>
			</RC.OrderHistoryTable>
		</RC.OrderHistoryContainer>
	);
};

export const CreateProduct = () => {
	const productData = {
		productName: '',
		productPrice: 1,
		productDescription: '',
		productBrand: '',
		productCategory: '',
		productCaptionHeading: '',
		productColor: '',
		productTag: '',
		productCode: '',
		productImages: [],
	};
	const labels = [
		'Upload product image',
		'Upload secondary image',
		'Upload secondary image2',
	];

	// React Hooks
	const [preview, setPreview] = useState(false);
	const [product, setProduct] = useState(productData);
	const [currentImage, setCurrentImage] = useState({});
	const [choosenImages, setChoosenImages] = useState(labels);

	// Redux Hooks
	const dispatch = useDispatch();
	const history = useHistory();
	const processing = useSelector(state => state.Loading.loading);

	const handleInputChange = event => {
		setProduct({ ...product, [event.target.name]: event.target.value });
	};

	const handleImageToManify = data => setCurrentImage({ src: data.uri, id: data.id });

	const handleImageChange = (event, id) => {
		const { target } = event;

		// ensure image is not too large
		if(target.files[0].size > 1300000){
			return Alert.error("Image too large");
	 	};

		// Copies from state
		const productImages = product.productImages.slice();
		const initialLabels = choosenImages.slice();

		let result = null;
		ImageToBase64(target.files[0], base64 => {
			result = base64;

			// Set states for labels
			initialLabels.forEach((_, index) => {
				if (index === id - 1) {
					initialLabels.splice(index, 1, target.files[0].name);
				}
			});
			setChoosenImages(initialLabels);

			// Set states for uploaded files
			if (productImages.length) {
				const filtered = productImages.filter(data => data.id === id);
				if (filtered.length) {
					filtered[0].image = target.files;
				} else {
					productImages.push({ [target.name]: target.files[0], id, uri: result });
				}
			} else {
				productImages.push({ [target.name]: target.files[0], id, uri: result });
			}
			setProduct({ ...product, productImages });
			setCurrentImage({ src: result, id });
		});
	};

	const handlePreview = event => {
		event.preventDefault();

		if (product.productPrice < 1 || product.productPrice > 5000) {
			return Alert.info('Product price should not be less than 1 or greater than 5000');
		}
		const ValidationError = Form.validateFields('create_product', FormSchema, product);
		if (ValidationError.error) {
			return Alert.info(ValidationError.error.message);
		}
		if (product.productImages[0] && product.productImages[0].image) {
			setProduct({ ...product, productCode: generateCode(7) });
			return setPreview(true);
		}
		Alert.info('Please Upload First Image');
	};
	
	const handleCreateProduct = event => {
		event.preventDefault();
		closeModal();
		const {
			productBrand, productCaptionHeading,
			productTag, productCategory, productCode,
			productColor, productDescription, productImages,
			productName, productPrice
		} = product;
		const formData = new FormData();
		formData.append("productName", productName);
		formData.append("productPrice", productPrice);
		formData.append("productDescription", productDescription);
		formData.append("productBrand", productBrand);
		formData.append("productCategory", productCategory);
		formData.append("productCaptionHeading", productCaptionHeading);
		formData.append("productColor", productColor);
		formData.append("productTag", productTag);
		formData.append("productCode", productCode);
		for(let i=0; i < productImages.length; i++) {
			formData.append("productImages", productImages[i].image);
		}
		dispatch(handleProductCreate(formData, history));
	};

	const closeModal = () => setPreview(false);

	return (
		<RC.CreateProductContainer>
			{processing && <DualRingLoadScreen />}
			<RC.CreateProductTitle>Create Product</RC.CreateProductTitle>
			<RC.Form>
				<RC.FormGrid className="form-row">
					<RC.FormGroup className="form-group col-md-6">
						<RC.FormInputLabel htmlFor="inputEmail4">Product Name</RC.FormInputLabel>
						<RC.FormInput
							type="text"
							className="form-control"
							id="inputEmail4"
							name="productName"
							onChange={handleInputChange}
						/>
					</RC.FormGroup>
					<RC.FormGroup className="form-group col-md-4">
						<RC.FormInputLabel htmlFor="inputEmail4">Product Brand</RC.FormInputLabel>
						<RC.FormInput
							type="text"
							name="productBrand"
							className="form-control"
							id="inputEmail4"
							placeholder="Versarce"
							onChange={handleInputChange}
						/>
					</RC.FormGroup>
					<RC.FormGroup className="form-group col-md-2">
						<RC.FormInputLabel htmlFor="inputEmail4">Product Price</RC.FormInputLabel>
						<RC.FormInput
							type="number"
							min={1}
							max={5000}
							name="productPrice"
							className="form-control"
							id="inputEmail4"
							placeholder="$2000"
							onChange={handleInputChange}
						/>
					</RC.FormGroup>
				</RC.FormGrid>
				<RC.FormGrid className="form-row">
					<RC.FormGroup className="form-group col-md-5">
						<RC.FormInputLabel htmlFor="inputEmail4">Product Caption Heading</RC.FormInputLabel>
						<RC.FormInput
							type="text"
							className="form-control"
							id="inputEmail4"
							name="productCaptionHeading"
							onChange={handleInputChange}
						/>
					</RC.FormGroup>
					<RC.FormGroup className="form-group col-md-3">
						<RC.FormInputLabel htmlFor="inputEmail4">Product Category</RC.FormInputLabel>
						<RC.Select
							name="productCategory"
							className="custom-select custom-select-md"
							onChange={handleInputChange}
						>
							<RC.SelectOption selected>Choose...</RC.SelectOption>
							<RC.SelectOption value="accessories">Accessories</RC.SelectOption>
							<RC.SelectOption value="camera">Camera</RC.SelectOption>
							<RC.SelectOption value="fashion">Fashion</RC.SelectOption>
							<RC.SelectOption value="gamepad">Gamepad</RC.SelectOption>
							<RC.SelectOption value="headphone">Headphone</RC.SelectOption>
							<RC.SelectOption value="laptop">Laptop</RC.SelectOption>
							<RC.SelectOption value="mobile">Mobile</RC.SelectOption>
						</RC.Select>
					</RC.FormGroup>
					<RC.FormGroup className="form-group col-md-2">
						<RC.FormInputLabel htmlFor="inputEmail4">Product Tag</RC.FormInputLabel>
						<RC.Select
							name="productTag"
							className="custom-select custom-select-md"
							onChange={handleInputChange}>
							<RC.SelectOption selected>Choose...</RC.SelectOption>
							<RC.SelectOption value="None">None</RC.SelectOption>
							<RC.SelectOption value="Hot">Hot</RC.SelectOption>
							<RC.SelectOption value="Sale">Sale</RC.SelectOption>
							<RC.SelectOption value="New">New</RC.SelectOption>
						</RC.Select>
					</RC.FormGroup>
					<RC.FormGroup className="form-group col-md-2">
						<RC.FormInputLabel htmlFor="inputEmail4">Product Color</RC.FormInputLabel>
						<RC.FormInput
							type="color"
							name="productColor"
							className="form-control"
							id="inputEmail4"
							placeholder="$2000"
							onChange={handleInputChange}
						/>
					</RC.FormGroup>
				</RC.FormGrid>
				<RC.FormGroup className="form-group mb-4">
					<RC.FormInputLabel htmlFor="exampleFormControlTextarea1">Description</RC.FormInputLabel>
					<RC.FormTextArea
						type="text"
						name="productDescription"
						className="form-control"
						rows="5"
						id="inputAddress"
						placeholder={LoremIpsum}
						onChange={handleInputChange}
					></RC.FormTextArea>
				</RC.FormGroup>
				<RC.FormGroup className="custom-file mb-3">
					<RC.FormInput
						name="image"
						onChange={event => handleImageChange(event, 1)}
						type="file"
						className="custom-file-input"
						id="customFile"
						accept="image/*"
					/>
					<RC.FormInputLabel className="custom-file-label" htmlFor="customFile">
						{choosenImages[0]}
					</RC.FormInputLabel>
				</RC.FormGroup>
				<RC.FormGroup className="custom-file mb-3">
					<RC.FormInput
						name="image"
						accept="image/*"
						onChange={event => handleImageChange(event, 2)}
						type="file"
						className="custom-file-input"
						id="customFile1"
					/>
					<RC.FormInputLabel className="custom-file-label" htmlFor="customFile1">
						{choosenImages[1]}
					</RC.FormInputLabel>
				</RC.FormGroup>
				<RC.FormGroup className="custom-file mb-1">
					<RC.FormInput
						name="image"
						accept="image/*"
						onChange={event => handleImageChange(event, 3)}
						type="file"
						className="custom-file-input"
						id="customFile2"
					/>
					<RC.FormInputLabel className="custom-file-label" htmlFor="customFile2">
						{choosenImages[2]}
					</RC.FormInputLabel>
				</RC.FormGroup>
				<RC.FormButton onClick={handlePreview} type="button" color="#fff" className="btn btn-secondary">
					Preview
				</RC.FormButton>
			</RC.Form>
			<Modal visible={preview}>
				{product.productName && (
					<PreviewProduct
						product={product}
						closeModal={closeModal}
						currentImage={currentImage}
						createProduct={handleCreateProduct}
						handleImageToManify={handleImageToManify}
					/>
				)}
			</Modal>
		</RC.CreateProductContainer>
	);
};
