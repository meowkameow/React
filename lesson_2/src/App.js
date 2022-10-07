import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {
  const [messageList, setMessageList] = useState([
      {
          text: 'Текст 1',
          author: 'Vi'
      },
      {
          text: 'Текст 2',
          author: 'Vika'
      },
      {
          text: 'Текст 3',
          author: 'Viktoria'
      }
  ]);

  useEffect(()=>{
      let lastAuthor = messageList[messageList.length - 1].author;
      if(messageList.length>3 && lastAuthor !== 'robot'){
          console.dir(messageList);
          setTimeout(() =>{
              setMessageList(prevState => ([...prevState,{text: "Сообщение отправлено", author: "robot"}]));
          }, 1500)

      }
      }, [messageList]
  )
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Form setMessageList = {setMessageList}/>
        <Message messages={messageList}/>
      </header>
    </div>
  );
}

export default App;

const Message = ({messages}) =>{
  return(
      <div className='Message'>
          {
              messages.map(m => <div>{m.text}: {m.author}</div>)
          }
      </div>
  )
}

const Form = ({setMessageList}) =>{
    const [textBox, setTextBox] = useState("");
    const [authorName, setAuthorName]= useState('');
    function submitForm(ev){
        ev.preventDefault();
        setMessageList(prevState => ([...prevState,{text: textBox, author: authorName}]));
        console.log(textBox);
        console.log(authorName);
    }
    return(
        <div>
            <form onSubmit={submitForm}>
                <h4>Введите сообшение</h4>
            <input type={"text"} name={"textbox"} onChange={event =>
                setTextBox(event.target.value)
            }/>
                <h4>Введите Ваше имя</h4>
                <input type={"text"} name={"authorname"} onChange={event =>
                setAuthorName(event.target.value)
                }/>
                <div>
            <button type={"submit"}>Отправить</button></div>
            </form>
        </div>
    )
}

