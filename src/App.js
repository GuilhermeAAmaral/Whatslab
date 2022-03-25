import React from 'react'

import {
  AppContainer,
  MessagemContainer,
  Card,
  InputContainer,
  InputUsuario,
  InputMensagem
} from './styled'

class App extends React.Component {

  state = {

    mensagens: [
      {
        user: 'Alice',
        text: 'Olá'
      },
      {
        user: 'Bob',
        text: 'Oiii'
      }
    ],

    userValue: '',
    messagensValue: ''

  }

  onChangeUserValue = (event) => {
    this.setState({ userValue: event.target.value })
  }

  onChangeMessagensValue = (event) => {
    this.setState({ messagensValue: event.target.value })
  }

  sendMessage = () => {

    const newMessagens = {
      user: this.state.userValue,
      text: this.state.messagensValue
    }

    const newListMessagens = [newMessagens, ...this.state.mensagens]
    this.setState({ mensagens: newListMessagens })

    this.setState({ messagensValue: "" })
    this.setState({ userValue: "" })
  }

  render() {

    return (

      <AppContainer>

        <MessagemContainer>

          {this.state.mensagens.map((mensagens) => {
            return (
              <Card>
                <h3>{mensagens.user}</h3>
                <p>{mensagens.text}</p>
              </Card>
            )
          })}

        </MessagemContainer>

        <InputContainer>

          <InputUsuario
            onChange={this.onChangeUserValue}
            value={this.state.userValue}
            placeholder='Usuario'
          />

          <InputMensagem
            onChange={this.onChangeMessagensValue}
            value={this.state.messagensValue}
            placeholder='Mensagem'
          />

          <button onClick={this.sendMessage}>Enviar</button>

        </InputContainer>

      </AppContainer>

    )
  }
}

export default App;
