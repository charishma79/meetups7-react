import {Component} from 'react'

import {Link} from 'react-router-dom'

import RegisterContext from '../../Context/RegisterContext'

import {
  MainContainer,
  Img,
  RegistrationContainer,
  Heading,
  Paragraph,
  RegisterButton,
  MeetImage,
  NameHeading,
  Topic,
} from './styledComponents'

class Home extends Component {
  render() {
    return (
      <RegisterContext.Consumer>
        {value => {
          const {isRegistered, nameInput, text} = value
          console.log(isRegistered)
          return (
            <>
              {isRegistered ? (
                <MainContainer>
                  <Img
                    src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                    alt="website logo"
                  />
                  <RegistrationContainer>
                    <NameHeading>Hello {nameInput}</NameHeading>
                    <Topic>Welcome to {text[0].displayText}</Topic>

                    <MeetImage
                      src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                      alt="meetup"
                    />
                  </RegistrationContainer>
                </MainContainer>
              ) : (
                <MainContainer>
                  <Img
                    src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                    alt="website logo"
                  />
                  <RegistrationContainer>
                    <Heading>Welcome to Meetup</Heading>
                    <Paragraph>Please register for the topic</Paragraph>
                    <Link to="/register">
                      <RegisterButton type="button">Register</RegisterButton>
                    </Link>

                    <MeetImage
                      src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                      alt="meetup"
                    />
                  </RegistrationContainer>
                </MainContainer>
              )}
            </>
          )
        }}
      </RegisterContext.Consumer>
    )
  }
}

export default Home
