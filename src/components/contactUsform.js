import React, { useState } from 'react';
import * as Cf from '../assets/styles/contact-us';

export const ContactUsForm = () => {

	const [contactus, setContactus] = useState({});

	const handleChange = e => setContactus({ ...contactus, [e.target.name]: e.target.value });

	return (
		<Cf.ContactFormContainer>
			<Cf.Header1>Contact Us</Cf.Header1>
			<Cf.FormWrapper>
				<Cf.Address>
					<Cf.Paragraph>
					<Cf.BoldText>Our Address</Cf.BoldText>
						<br /><br />
							25b Ameen street Abule-Oja yaba Lagos Nigeria.
						<br />
							Email: olorunwalawrence@gmail.com 
						<br />
						Phone Number: +2348182089681
					</Cf.Paragraph>
					<Cf.Paragraph>
						<Cf.BoldText>Opening Hours</Cf.BoldText>
						<br />
						Monday - Friday: 9am - 5pm
					</Cf.Paragraph>
					<Cf.Paragraph>
						<Cf.BoldText>Comment</Cf.BoldText>
						<br />
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit suscipit mi, non
						tempor nulla finibus eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</Cf.Paragraph>
				</Cf.Address>
				<Cf.formContainer>
					<Cf.header4>Leave us a message</Cf.header4>
					<Cf.Form>
						<Cf.Formrow className="form-row">
							<Cf.formGroup className="form-group col-md-6">
								<Cf.formLabel for="Name"> Your Name </Cf.formLabel>
								<Cf.FormInput
									type="text"
									name="name"
									onChange={handleChange}
									className="form-control"
								/>
							</Cf.formGroup>
							<Cf.formGroup className="form-group col-md-6">
								<Cf.formLabel for="Email"> Email </Cf.formLabel>
								<Cf.FormInput
									type="email"
									name="email"
									onChange={handleChange}
									className="form-control"
								/>
							</Cf.formGroup>
						</Cf.Formrow>
						<Cf.Formrow>
							<Cf.formGroup className="form-group">
								<Cf.formLabel for="Subject"> Subject </Cf.formLabel>
								<Cf.FormInput
									type="text"
									name="subject"
									onChange={handleChange}
									className="form-control"
								/>
							</Cf.formGroup>

							<Cf.formGroup>
								<Cf.formLabel for="message"> Message</Cf.formLabel>
								<Cf.TextArea
									onChange={handleChange}
									type="text"
									name="message"
								></Cf.TextArea>
							</Cf.formGroup>
							<Cf.Button type="button" className="btn btn-md button" onClick={() => alert('Hi 👋, you can contact us via email: daniel.adek.k@gmail.com')}>Submit</Cf.Button>
						</Cf.Formrow>
					</Cf.Form>
				</Cf.formContainer>
			</Cf.FormWrapper>
		</Cf.ContactFormContainer>
	);
};
