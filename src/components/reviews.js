import React, { Fragment, useState, useEffect } from 'react';
import * as Rview from '../assets/styles/review';
import { ReviewForm } from './reviewForm';
import { ReviewersData } from '../assets/UserData';

export const Reviews = () => {
	const [userReview, setUserReview] = useState(null);

	useEffect(() => {
		setUserReview(ReviewersData);
	}, []);
	console.log(userReview);
	return (
		<Fragment>
			<Rview.ReviewTitle>Customer Reviews</Rview.ReviewTitle>
			{userReview &&
				userReview.map(data => (
					<Rview.ReviewContainer>
						<Rview.imageContainer>
							<Rview.UserImage src={data.avatar} />
						</Rview.imageContainer>

						<Rview.UserReviewcontent>
							<Rview.userName>{data.username}</Rview.userName>
							<Rview.userReviewParagraph>{data.review}</Rview.userReviewParagraph>
							<Rview.ReviewDate>{data.createdAt}</Rview.ReviewDate>
						</Rview.UserReviewcontent>
					</Rview.ReviewContainer>
				))}
			<ReviewForm />
		</Fragment>
	);
};
