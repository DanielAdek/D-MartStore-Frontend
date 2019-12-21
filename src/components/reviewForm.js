import React, { useState, useEffect } from 'react';
import * as RF from '../assets/styles/reviewForm';
import { useDispatch, useSelector } from 'react-redux';
import { Alias } from '../importer';
const { CreateReview } = Alias.pathToActions('CreateReview');
export const ReviewForm = () => {
	const [userReview, setUsereview] = useState({});

	useEffect(() => {
		dispatchEvent(CreateReview());
	});

	const handleChange = e => {
		setUsereview({ ...userReview, [e.target.name]: e.target.value });
	};
	const handleSubmit = e => {
		e.preventDefault();
	};
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
							<RF.Option value="5">5 Star Rating</RF.Option>
							<RF.Option value="4">4 Star Rating</RF.Option>
							<RF.Option value="3">3 Star Rating</RF.Option>
							<RF.Option value="2">2 Star Rating</RF.Option>
							<RF.Option value="1">1 Star Rating</RF.Option>
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
						<RF.Label htmlFor="Name">Name</RF.Label>
						<RF.Input
							type="test"
							name="name"
							onChange={handleChange}
							className="form-control"
							placeholder="Your Name"
						/>
					</RF.FormGroup>

					<RF.FormGroup className="form-gropup">
						<RF.TextArea
							className="form-control"
							rows="5"
							name="message"
							onChange={handleChange}
							placeholder=" your Reviews"
						></RF.TextArea>
					</RF.FormGroup>
				</RF.FormRow>

				<RF.Button type="button" onClick={handleSubmit} className="btn btn-warning">
					Post Your Review
				</RF.Button>
			</RF.Form>
		</RF.FormContainer>
	);
};
