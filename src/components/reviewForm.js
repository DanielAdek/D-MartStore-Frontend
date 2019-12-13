import React from 'react';
import * as RF from '../assets/styles/reviewForm';

export const ReviewForm = () => {
	return (
		<RF.FormContainer>
			<hr />

			<RF.HeaderTest>Write A Review</RF.HeaderTest>
			<RF.Form>
				<RF.FormRow className="form-row">
					<RF.FormGroup className="form-group col-md-4">
						<RF.Label for="InoutRating">Rating</RF.Label>
						<RF.Select className="form-control">
							<RF.Option selected> Choose Rating</RF.Option>
							<RF.Option>5 Star Rating</RF.Option>
							<RF.Option>4 Star Rating</RF.Option>
							<RF.Option>3 Star Rating</RF.Option>
							<RF.Option>2 Star Rating</RF.Option>
							<RF.Option>1 Star Rating</RF.Option>
						</RF.Select>
					</RF.FormGroup>

					<RF.FormGroup className="form-group col-md-4">
						<RF.Label for="inputEmail4">Email</RF.Label>
						<RF.Input type="email" className="form-control" placeholder="Email" />
					</RF.FormGroup>

					<RF.FormGroup className="form-group col-md-4">
						<RF.Label for="Name">Name</RF.Label>
						<RF.Input type="test" className="form-control" placeholder="Your Name" />
					</RF.FormGroup>

					<RF.FormGroup className="form-gropup">
						<RF.TextArea class="form-control" rows="5" placeholder=" your Reviews"></RF.TextArea>
					</RF.FormGroup>
				</RF.FormRow>

				<RF.Button type="button" className="btn btn-warning">
					Post Your Review
				</RF.Button>
			</RF.Form>
		</RF.FormContainer>
	);
};
