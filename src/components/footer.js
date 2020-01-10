import React, { Fragment } from 'react'
import * as RC from '../assets/styles/footer'

export const FooterMinor = () => {
  return (
    <RC.FooterMinorWrapper>
      <RC.FooterMinorContainer>
        <RC.FooterMinorText>Powered by <RC.FooterMinorLink href="https://facebook.github.io">React</RC.FooterMinorLink>. Developed by <RC.FooterMinorLink href="https://github.com/DanielAdek">Daniel Adek</RC.FooterMinorLink> &copy; 2019.</RC.FooterMinorText>
      </RC.FooterMinorContainer>
    </RC.FooterMinorWrapper>
  )
}

export const Footer = () => {
  return (
    <Fragment>
      <RC.Wrapper>
        <RC.Container>
          <RC.Contact>
            <RC.FooterHeadings>Contact Us</RC.FooterHeadings>
            <RC.ContactText>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
              laborum deleniti nesciunt doloribus harum voluptates possimus,
              perferendis enim magni praesentium sit accusantium mollitia
              voluptate, labore, blanditiis dolor ullam voluptatem dolores!
            </RC.ContactText>
            <RC.ContactOptions>
              <RC.ContactOptionsList>
              <RC.ContactOptionsListIcon src={require('../assets/images/phone-Icon.png')}/>
                +2348182089681
              </RC.ContactOptionsList>
              <RC.ContactOptionsList>
                <RC.ContactOptionsListIcon src={require('../assets/images/location.png')}/>
                Lagos, Nigeria
              </RC.ContactOptionsList>
              <RC.ContactOptionsList>
              <RC.ContactOptionsListIcon src={require('../assets/images/envelope.png')}/>
                maildaniel.me1@gmail.com
              </RC.ContactOptionsList>
            </RC.ContactOptions>
          </RC.Contact>

          <RC.Information>
            <RC.FooterHeadings>Information</RC.FooterHeadings>
            <RC.InfoLists>
              <RC.InfoList>About Us</RC.InfoList>
              <RC.InfoList>Delivery Information</RC.InfoList>
              <RC.InfoList>Privacy Policy</RC.InfoList>
              <RC.InfoList>Brands</RC.InfoList>
              <RC.InfoList>Contact Us</RC.InfoList>
            </RC.InfoLists>
          </RC.Information>

          <RC.NewsLetter>
            <RC.FooterHeadings>News Letter</RC.FooterHeadings>
            <RC.NewsLetterText>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
              laborum deleniti nesciunt doloribus harum voluptates possimus,
              perferendis enim magni praesentium sit accusantium mollitia
              voluptate, labore, blanditiis dolor ullam voluptatem dolores!
            </RC.NewsLetterText>
            <RC.NewsLetterInputCont>
              <RC.NewsLetterInput placeholder="sample@mail.com"/>
              <RC.NewsLetterButton>Subscribe</RC.NewsLetterButton>
            </RC.NewsLetterInputCont>
          </RC.NewsLetter>
        </RC.Container>
      </RC.Wrapper>
      <FooterMinor />
    </Fragment>
  )
}