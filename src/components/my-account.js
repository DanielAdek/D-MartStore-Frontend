import React, { useState } from 'react';
import { Form } from 'form-my-simple-validation';
import * as RC from '../assets/styles/myaccount';
import FormSchema from '../utils/validationSchema';
import { Orders, LoremIpsum } from '../assets/map.v';
import { Modal } from '../components/modal';
import { ImageToBase64 } from '../utils/helpers';

export const formatDate = dateObject => {
  const [day, month, date, year] = new Date(dateObject).toDateString().split(" ");
  console.log(day);
  return `${date} ${month}, ${year}`;
};

const TableRows = orders => {
  return orders.map((data, index) => (
    <RC.DashboardTableRow key={index} bgColorOnHover="#f2f2f2">
      <RC.DashboardTableData>{data._id}</RC.DashboardTableData>
      <RC.DashboardTableData>{formatDate(data.createdAt)}</RC.DashboardTableData>
      <RC.DashboardTableData>{data.orderStatus}</RC.DashboardTableData>
      <RC.DashboardTableData>${data.sumTotalOrdersPrice}</RC.DashboardTableData>
    </RC.DashboardTableRow>
  ))
};

const OrderHistoryTableRows = orders => {
  return orders.map((data, index) => (
    <RC.OrderHistoryTableRow key={index} bgColorOnHover="#f2f2f2">
      <RC.OrderHistoryTableData>{data._id}</RC.OrderHistoryTableData>
      <RC.OrderHistoryTableData>{formatDate(data.createdAt)}</RC.OrderHistoryTableData>
      <RC.OrderHistoryTableData>{data.orderStatus}</RC.OrderHistoryTableData>
      <RC.OrderHistoryTableData>${data.sumTotalOrdersPrice} for {data.productId.length} Items</RC.OrderHistoryTableData>
    </RC.OrderHistoryTableRow>
  ))
};

const PreviewProduct = props => {
  return (
    <RC.Body>
        <RC.CloseBtn onClick={props.closeModal}>X</RC.CloseBtn>
        <RC.ContentBody>
          <RC.ProductMagnifiedImageCont>
            <RC.ProductMagnifiedImage src={props.currentImage.src} alt="product"/>
          </RC.ProductMagnifiedImageCont>
        </RC.ContentBody>
        <RC.ContentBody>
          <RC.ProductRightSide>
            <RC.ProductHeading>{props.product.productName}</RC.ProductHeading>
            <RC.ProductDetails>{props.product.productDescription}</RC.ProductDetails>
            <hr />
            <RC.ProductStatus>
              <RC.ProductStatText>Brand: {props.product.productBrand}</RC.ProductStatText>
              <RC.ProductStatText>Code: 5cc3ef258fd50dce345</RC.ProductStatText>
            </RC.ProductStatus>
            <RC.ProductPrice>${props.product.productPrice}</RC.ProductPrice>
            <RC.ProductActionButtonSec>
              <RC.ProductActionButton onClick={props.createProduct} className="btn btn-md" bgColor="#ffd333" hClr="#9b9b9b">Upload</RC.ProductActionButton>
              <RC.ProductActionButton onClick={props.closeModal} className="btn btn-md btn-secondary" bgColor="#3d464d" hClr="#9b9b9b">Return</RC.ProductActionButton>
            </RC.ProductActionButtonSec>
          </RC.ProductRightSide>
          <RC.ProductImagesContainer>
            { props.product.productImages && props.product.productImages.map((dat, i) => (<RC.ProductImages key={i} onClick={() => props.handleImageToManify(dat)} src={dat.image} alt="product-image"/>))}
          </RC.ProductImagesContainer>
        </RC.ContentBody>
      </RC.Body>
  )
}

export const DashBoard = props => {
  return (
      <RC.DashboardContainer>
      <RC.DashboardCardContainer>
        <RC.DashboardCardBody className="card">
          <RC.DashboardAvatar>
            <RC.DashboardImageAvatar src={props.avatar}/>
          </RC.DashboardAvatar>
          <RC.DashboardUserName className="mt-3">{props.username || "Daniel Adek"}</RC.DashboardUserName>
          <RC.DashboardUserEmail>{props.email || "maildaniel.me1@gmail.com"}</RC.DashboardUserEmail>
          <RC.DashboardEditButton className="btn btn-sm mt-3">Edit Profile</RC.DashboardEditButton>
        </RC.DashboardCardBody>
      </RC.DashboardCardContainer>
      <RC.DashboardCardContainer>
        <RC.DashboardCardBody className="card" align="flex-start">
          <RC.DashboardContact>Contact</RC.DashboardContact>
          <RC.DashboardAddrLabel>Address</RC.DashboardAddrLabel>
          <RC.DashboardAddr>{props.addr || "Plot 225, Freedom Way Lekki, Lagos, Nigeria."}</RC.DashboardAddr>
          <RC.DashboardPhoneLabel>Phone Number</RC.DashboardPhoneLabel>
          <RC.DashboardPhoneNo>{props.phone || "(+234) 8182089681"}</RC.DashboardPhoneNo>
          <RC.DashboardEmailLabel>Email Address</RC.DashboardEmailLabel>
          <RC.DashboardEmail>{props.email || "maildaniel.me1@gmail.com"}</RC.DashboardEmail>
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
            {TableRows(Orders)}
          </RC.DashboardTbody>
        </RC.DashboardTable>
      </RC.DashboardCardContainer>
      </RC.DashboardContainer>
  )
}

export const EditProfile = () => {
  return (
    <RC.EditProfileContainer>
      <RC.EditProfileHeading>Edit Profile</RC.EditProfileHeading>
      <RC.EditProfilePicture>Upload Picture</RC.EditProfilePicture>
      <RC.Form>
        <RC.FormGrid className="form-row">
          <RC.FormGroup className="form-group col-md-6">
            <RC.FormInputLabel htmlFor="inputEmail4">Username</RC.FormInputLabel>
            <RC.FormInput type="text" class="form-control" id="inputEmail4" line={true}/>
          </RC.FormGroup>
          <RC.FormGroup className="form-group col-md-6">
            <RC.FormInputLabel htmlFor="inputEmail4">Email Address</RC.FormInputLabel>
            <RC.FormInput type="email" class="form-control" id="inputEmail4" line={true}/>
          </RC.FormGroup>
          <RC.FormGroup className="form-group col-md-6">
            <RC.FormInputLabel htmlFor="inputEmail4">Phone Number</RC.FormInputLabel>
            <RC.FormInput type="text" class="form-control" id="inputEmail4" line={true}/>
          </RC.FormGroup>
          <RC.FormGroup className="form-group col-md-6">
            <RC.FormInputLabel htmlFor="inputEmail4">Address</RC.FormInputLabel>
            <RC.FormInput type="text" class="form-control" id="inputEmail4" line={true}/>
          </RC.FormGroup>
          <RC.FormGroup className="form-group col-md-6">
            <RC.FormInputLabel htmlFor="inputEmail4">Password</RC.FormInputLabel>
            <RC.FormInput type="password" class="form-control" id="inputEmail4" line={true}/>
          </RC.FormGroup>
          <RC.FormGroup className="form-group col-md-6">
            <RC.FormInputLabel htmlFor="inputEmail4">Confirm Password</RC.FormInputLabel>
            <RC.FormInput type="password" class="form-control" id="inputEmail4"line={true} />
          </RC.FormGroup>
          <RC.FormButton bgColor="#ffd333" color="#3d464d" className="btn">Update</RC.FormButton>
        </RC.FormGrid>
      </RC.Form>
    </RC.EditProfileContainer>
  )
}

export const OrderHistory = () => {
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
            {OrderHistoryTableRows(Orders)}
          </RC.OrderHistoryTbody>
        </RC.OrderHistoryTable>
    </RC.OrderHistoryContainer>
  )
}

export const CreateProduct = () => {
  const productData = { productName: '', productPrice: '', productDescription: '', productBrand: '', productImages: [] };
  const [preview, setPreview] = useState(false);
  const [product, setProduct] = useState(productData);
  const [currentImage, setCurrentImage] = useState({});

  const handleInputChange = event => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  }

  const handleImageToManify = data => setCurrentImage({ src: data.image, id: data.id });

  const handleImageChange = (event, id) => {
    const { name } = event.target;
    const productImages = product.productImages.slice();
    let result = null;
    ImageToBase64(event.target.files[0],  (base64) => {
      result = base64;
      if (productImages.length) {
        const filtered = productImages.filter(data => data.id === id);
        if (filtered.length) {
          filtered[0].image = result;
        } else {
          productImages.push({ [name]: result, id });
        }
      } else {
        productImages.push({ [name]: result, id });
      }
      setProduct({ ...product, productImages });
      setCurrentImage({ src: productImages[0] ? productImages[0].image : result, id: 1 })
    });
  }


  const handlePreview = event => {
    event.preventDefault();
    const ValidationError = Form.validateFields('create_product', FormSchema, product);
    if (ValidationError.error) {
      return alert("please fill form");
    }
    if (product.productImages[0] && product.productImages[0].image) {
      return setPreview(true);
    }
    alert("Please Upload First Image");
  }
  
  const handleCreateProduct = event => {
    event.preventDefault();
    closeModal();
    console.log(product);
  }

  const closeModal = () => setPreview(false)

  return (
    <RC.CreateProductContainer>
      <RC.CreateProductTitle>Create Product</RC.CreateProductTitle>
      <RC.Form>
        <RC.FormGrid className="form-row">
          <RC.FormGroup className="form-group col-md-6">
            <RC.FormInputLabel htmlFor="inputEmail4">Product Name</RC.FormInputLabel>
            <RC.FormInput type="text" className="form-control" id="inputEmail4" name="productName" onChange={handleInputChange} />
          </RC.FormGroup>
          <RC.FormGroup className="form-group col-md-4">
            <RC.FormInputLabel htmlFor="inputEmail4">Product Brand</RC.FormInputLabel>
            <RC.FormInput type="text" name="productBrand" className="form-control" id="inputEmail4" placeholder="Versarce" onChange={handleInputChange} />
          </RC.FormGroup>
          <RC.FormGroup className="form-group col-md-2">
            <RC.FormInputLabel htmlFor="inputEmail4">Product Price</RC.FormInputLabel>
            <RC.FormInput type="number" name="productPrice" className="form-control" id="inputEmail4" placeholder="$2000" onChange={handleInputChange} />
          </RC.FormGroup>
         </RC.FormGrid>
          <RC.FormGroup className="form-group mb-4">
            <RC.FormInputLabel htmlFor="exampleFormControlTextarea1">Description</RC.FormInputLabel>
            <RC.FormTextArea type="text" name="productDescription" className="form-control" rows="5" id="inputAddress" placeholder={LoremIpsum} onChange={handleInputChange} ></RC.FormTextArea>
          </RC.FormGroup>
          <RC.FormGroup className="custom-file mb-3">
            <RC.FormInput name="image" onChange={event => handleImageChange(event, 1)} type="file" className="custom-file-input" id="customFile"/>
            <RC.FormInputLabel className="custom-file-label" for="customFile">Choose Product Image</RC.FormInputLabel>
          </RC.FormGroup>
          <RC.FormGroup className="custom-file mb-3">
            <RC.FormInput name="image" onChange={event => handleImageChange(event, 2)} type="file" className="custom-file-input" id="customFile"/>
            <RC.FormInputLabel className="custom-file-label" for="customFile">Choose support image for product</RC.FormInputLabel>
          </RC.FormGroup>
          <RC.FormGroup className="custom-file mb-3">
            <RC.FormInput name="image" onChange={event => handleImageChange(event, 3)} type="file" className="custom-file-input" id="customFile"/>
            <RC.FormInputLabel className="custom-file-label" for="customFile">Choose support image for product</RC.FormInputLabel>
          </RC.FormGroup>
          <RC.FormGroup className="custom-file mb-3">
            <RC.FormInput name="image" onChange={event => handleImageChange(event, 4)} type="file" className="custom-file-input" id="customFile"/>
            <RC.FormInputLabel className="custom-file-label" for="customFile">Choose support image for product</RC.FormInputLabel>
          </RC.FormGroup>
          <RC.FormGroup className="custom-file mb-3">
            <RC.FormInput name="image" onChange={event => handleImageChange(event, 5)} type="file" className="custom-file-input" id="customFile"/>
            <RC.FormInputLabel className="custom-file-label" for="customFile">Choose support image for product</RC.FormInputLabel>
          </RC.FormGroup>
          <RC.FormButton onClick={handlePreview} type="button" color="#fff" className="btn btn-secondary">Preview</RC.FormButton>
      </RC.Form>
      <Modal visible={preview}>
        { product.productName && <PreviewProduct 
          product={product}
          closeModal={closeModal}
          currentImage={currentImage}
          createProduct={handleCreateProduct}
          handleImageToManify={handleImageToManify}
          />}
      </Modal>
    </RC.CreateProductContainer>
  )
}