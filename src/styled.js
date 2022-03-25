import styled from 'styled-components'


export const AppContainer = styled.div`
  display:flex;
  flex-direction: column;

  width: 850px;
  height: 95vh;

  margin: 15px auto;
  padding: 10px;

  box-sizing: border-box;
  border: 1px solid #222;
  border-radius: 2px;

  background-color: #ffff ;
`

export const MessagemContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;

  flex-grow: 1;
  padding: 5px;

  overflow-y: scroll;

`

export const Card = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 600px;

    p {
      color: #222;
      background-color: #C8F7C9;

      margin-left: 10px;
      margin-bottom: 30px;

      padding: 0px 10px;

      border-radius: 2px;
    }  

    h3 {
      color: #1A1D23;

      margin-left: 5px;
      margin-bottom: 30px;
    }
`
export const InputContainer = styled.div`
  display: flex;
  height: 50px;

    button {
      height: 40px;
      width: 100px;
      margin-top: 5px;

      background-color: green;
        
      border-radius: 2px;
      border: 1px solid green;

      color: white;
    }

    button:hover {
      background-color: #222;
      border: 1px solid #222;
      cursor: pointer;
    }
`
export const InputUsuario = styled.input`
  width: 100px;

  margin: 5px;
  padding: 10px;

  border: 1px solid green;
  border-radius: 2px;
`

export const InputMensagem = styled.input`
  flex-grow: 1;

  margin: 5px;
  padding: 10px;

  border: 1px solid green;
  border-radius: 2px;
`