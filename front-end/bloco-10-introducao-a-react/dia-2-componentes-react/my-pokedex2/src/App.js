import React from 'react';
import './App.css'
import DadJoke from './chamada1';
import teste from './teste'
 
class App extends React.Component {
constructor (props) {
  super ()
  this.state = {
    numeroDeCliques: 0
  }
  this.botãozinho = this.botãozinho.bind(this) //essa sintaxe dá à funcão "botãozinho" a capacidade de enxergar o this e a estrutura de classe. Isso é importante para quando eu for utilizar as props puder utilizar o "this.props" em vez dez chamar pelo parâmetro e também para quando formos trabalhar com estados.
}

getButtonColor (num) {

  return num % 2 === 0 && num > 0 ? 'green' : 'white';
 }

botãozinho () {
  this.setState(({ numeroDeCliques }) => ({
    numeroDeCliques: numeroDeCliques + 1,
  }),() => {
    console.log(`A cor do elemento é: ${this.getButtonColor(this.state.numeroDeCliques)}`);
  }
  );
}


render () {
  return (
    <>
   <teste />
   </>

  );
}
}


export default App;
