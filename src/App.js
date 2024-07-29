import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/pessoa';


function App() {
  const nome= 'Augusto'
  return (
    <div className="App">
      <HelloWorld />
      <SayMyName nome="Davi"/>
      <SayMyName nome="Felipe"/>
      <SayMyName nome={nome}/>
      <Pessoa nome="Davi" idade="20" profissao="Programador" foto="https://via.placeholder.com/150" />
    </div>
  )
}




export default App;
