import React from 'react'

const RegisterContext = React.createContext({
  isRegistered: false,
  onClickRegister: () => {},
  nameInput: '',
  updateNameInput: () => {},
  optionId: '',
  updateOptionId: () => {},
  showError: false,
  updateError: () => {},
  text: '',
})

export default RegisterContext
