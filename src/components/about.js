import React, { Fragment } from 'react';
import * as ABt from '../assets/styles/about';

export const Aboutus = () => {
	const Card = [
		{
			img: require('../assets/images/Akdan.png'),
			Name: 'Daniel Adekunle ',
			proffession: 'SoftWare Engineer (MERN Stack)',
		},
		{
			img: require('../assets/images/long.png'),
			Name: 'Olorunwa lawrence',
			proffession: 'Software Engineer (ReactJs)',
		},
		{
			img: require('../assets/images/red-head-phone.png'),
			Name: 'Boluwatife Adekunle',
			proffession: 'Software engineer (NodeJs)',
		},
	];
	return (
		<Fragment>
			<ABt.BackGround />
			<ABt.About>
				<ABt.About_us_title>About US</ABt.About_us_title>
				<ABt.Para>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacus metus, convallis ut leo nec,
					tincidunt eleifend justo. Ut felis orci, hendrerit a pulvinar et, gravida ac lorem. Sed vitae
					molestie sapien, at sollicitudin tortor.
				</ABt.Para>
				<ABt.Para>
					Duis id volutpat libero, id vestibulum purus.Donec euismod accumsan felis,egestas lobortis velit
					tempor vitae. Integer eget velit fermentum, dignissim odio non, bibendum velit.
				</ABt.Para>
			</ABt.About>

			<ABt.Section>
				<ABt.TeamHeading> Meet Our Team</ABt.TeamHeading>
				<ABt.Para>Want to work in our friendly team? Contact us and we will consider your candidacy.</ABt.Para>

				<ABt.CardWrapper>
					{Card.map((data, i) => (
						<ABt.Card className="card" key={i}>
							<ABt.Image src={data.img} className="card-img-top" alt="" />

							<ABt.CardBody className="card-body">
								<ABt.Header5 className="card-title">{data.Name}</ABt.Header5>

								<ABt.paragraph className="card-text">{data.proffession}</ABt.paragraph>
							</ABt.CardBody>
						</ABt.Card>
					))}
				</ABt.CardWrapper>
			</ABt.Section>
		</Fragment>
	);
};
