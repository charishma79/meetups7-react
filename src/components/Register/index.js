import {Component} from 'react'

import RegisterContext from '../../Context/RegisterContext'

import {
  RegisterContainer,
  Image,
  LoginContainer,
  ImageContainer,
  RegisterImage,
  JoinHeading,
  FormContainer,
  Label,
  LoginCard,
  Input,
  Select,
  Option,
  Button,
  Error,
} from './styledComponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  render() {
    return (
      <RegisterContext.Consumer>
        {value => {
          const {
            nameInput,
            updateNameInput,
            updateOptionId,
            onClickRegister,
            showError,
            updateError,
            optionId,
          } = value

          const onEnterName = event => {
            updateNameInput(event)
          }

          const onChangeOption = event => {
            updateOptionId(event)
          }

          const onSubmitRegister = event => {
            event.preventDefault()
            if (nameInput === '') {
              updateError()
            } else {
              const {history} = this.props
              onClickRegister()
              history.replace('/')
            }
          }
          return (
            <RegisterContainer>
              <Image
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                alt="website logo"
              />
              <LoginContainer>
                <ImageContainer>
                  <RegisterImage
                    src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                    alt="website register"
                  />
                </ImageContainer>
                <LoginCard>
                  <JoinHeading>Let us join</JoinHeading>
                  <FormContainer onSubmit={onSubmitRegister}>
                    <Label htmlFor="name-label">NAME</Label>
                    <Input
                      type="text"
                      placeholder="Your name"
                      value={nameInput}
                      id="name-label"
                      onChange={onEnterName}
                    />
                    <Label htmlFor="topic-label">TOPICS</Label>
                    <Select
                      value={optionId}
                      id="topic-label"
                      onChange={onChangeOption}
                    >
                      {topicsList.map(eachTopic => (
                        <Option key={eachTopic.id} value={eachTopic.id}>
                          {eachTopic.displayText}
                        </Option>
                      ))}
                    </Select>
                    <Button type="submit" onClick={this.onClickBtn}>
                      Register Now
                    </Button>
                  </FormContainer>
                  {showError ? <Error>Please enter your name</Error> : ''}
                </LoginCard>
              </LoginContainer>
            </RegisterContainer>
          )
        }}
      </RegisterContext.Consumer>
    )
  }
}

export default Register
