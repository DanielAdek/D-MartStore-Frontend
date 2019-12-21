import React, { useState } from 'react';
import * as RF from '../assets/styles/reviewForm';
import { useDispatch, useSelector } from 'react-redux';
import { Alias } from '../importer';

const { createOrUpdateReview } = Alias.pathToActions('Review');

export const ReviewForm = () => {
	// Redux Hooks
	const dispatch = useDispatch();
	const product = useSelector(state => state.ProductCRUD.product);

	// React Hooks
	const [userReview, setUsereview] = useState({ rating: '', email: '', review: '', username: '' });

	const handleChange = e => {
		setUsereview({ ...userReview, [e.target.name]: e.target.value });
	};

	const handleSubmit = productId => {
		const data = { ...userReview, productId };
		dispatch(createOrUpdateReview(data));
	}

	return (
		<RF.FormContainer>
			<hr />
			<RF.HeaderTest>Write A Review</RF.HeaderTest>
			<RF.Form>
				<RF.FormRow className="form-row">
					<RF.FormGroup className="form-group col-md-4">
						<RF.Label htmlFor="InoutRating">Rating</RF.Label>
						<RF.Select className="form-control" name="rating" onChange={handleChange}>
							<RF.Option defaultValue="Choose Rating"> Choose Rating</RF.Option>
							<RF.Option value="5">5 Star</RF.Option>
							<RF.Option value="4">4 Star</RF.Option>
							<RF.Option value="3">3 Star</RF.Option>
							<RF.Option value="2">2 Star</RF.Option>
							<RF.Option value="1">1 Star</RF.Option>
						</RF.Select>
					</RF.FormGroup>

					<RF.FormGroup className="form-group col-md-4">
						<RF.Label htmlFor="inputEmail4">Email</RF.Label>
						<RF.Input
							type="email"
							name="email"
							onChange={handleChange}
							className="form-control"
							placeholder="Email"
						/>
					</RF.FormGroup>

					<RF.FormGroup className="form-group col-md-4">
						<RF.Label htmlFor="Name">username</RF.Label>
						<RF.Input
							type="text"
							name="username"
							onChange={handleChange}
							className="form-control"
							placeholder="Your Name"
						/>
					</RF.FormGroup>

					<RF.FormGroup className="form-gropup">
						<RF.TextArea
							className="form-control"
							rows="5"
							name="review"
							onChange={handleChange}
							placeholder=" your Reviews"
						></RF.TextArea>
					</RF.FormGroup>
				</RF.FormRow>

				<RF.Button type="button" onClick={() => handleSubmit(product.product._id)} className="btn btn-warning">
					Post Your Review
				</RF.Button>
			</RF.Form>
		</RF.FormContainer>
	);
};
