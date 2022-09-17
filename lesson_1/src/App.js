import logo from './logo.svg';
import './App.css';

function App() {
  const message = 'Добро пожаловать на курс по React'
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Message message={message}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

const Message = ({message}) =>{
  return(
      <div className='Message'>
        <h1>Привет! {message}</h1>
      </div>
  )
}