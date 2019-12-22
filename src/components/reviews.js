import React, { Fragment, useState, useEffect } from 'react';
import { Alias } from '../importer';

const { ReviewForm } = Alias.pathToComponents('reviewForm')
const { ReviewersData } = Alias.pathToAssets('UserData');
const { formatDate } = Alias.pathToUtils('helpers');
const Rview = Alias.pathToSyles('review');

export const Reviews = props => {
	const [userReview, setUserReview] = useState(null);

	useEffect(() => {
		setUserReview(ReviewersData);
	}, []);

	return (
		<Fragment>
			<Rview.ReviewTitle>Customers Review</Rview.ReviewTitle>
			{props.product &&
				(props.product.reviews || userReview).map((data, index) => (
					<Rview.ReviewContainer key={index}>
						<Rview.imageContainer>
							<Rview.UserImage src={data.avatar} />
						</Rview.imageContainer>

						<Rview.UserReviewcontent>
							<Rview.userName>{data.username}</Rview.userName>
							<Rview.userReviewParagraph>{data.review}</Rview.userReviewParagraph>
							<Rview.ReviewDate>{formatDate(data.createdAt)}</Rview.ReviewDate>
						</Rview.UserReviewcontent>
					</Rview.ReviewContainer>
				))}
			<ReviewForm />
		</Fragment>
	);
};
