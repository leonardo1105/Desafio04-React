import React,{Component} from 'react' 

export default class App extends Component{
  mensagem=() => {
    return <h1>Estou fazendo uma Arrow Function</h1>
  }
  dobro=(num) => {
    return num*2
  }
  render(){
    return(
      <>
      {this.mensagem()}
      <h2>{this.dobro(5)}</h2>
      </>
    )
  }
}