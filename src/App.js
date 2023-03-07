import {Component} from 'react'

import {Route, Switch, Redirect} from 'react-router-dom'

import './App.css'

import RegisterContext from './Context/RegisterContext'
import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'
// These are the lists used in the application. You can move them to any component needed.
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

// Replace your code here
class App extends Component {
  state = {
    isRegistered: false,
    nameInput: '',
    optionId: topicsList[0].id,
    showError: false,
  }

  onClickRegister = () => {
    this.setState({isRegistered: true})
  }

  updateNameInput = event => {
    this.setState({nameInput: event.target.value})
  }

  updateOptionId = event => {
    this.setState({optionId: event.target.value})
  }

  updateError = () => {
    this.setState({showError: true})
  }

  render() {
    const {isRegistered, nameInput, optionId, showError} = this.state
    const text = topicsList.filter(each => each.id === optionId)
    console.log(text)
    return (
      <RegisterContext.Provider
        value={{
          isRegistered,
          onClickRegister: this.onClickRegister,
          nameInput,
          updateNameInput: this.updateNameInput,
          optionId,
          updateOptionId: this.updateOptionId,
          showError,
          updateError: this.updateError,
          text,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App
