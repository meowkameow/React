import logo from './logo.svg';
import './App.css';
import {useEffect, useRef, useState} from "react";
import { Button, TextField, List, ListItem } from '@mui/material';


function App() {
  const [messageList, setMessageList] = useState([
      {
          text: 'Текст 1',
          author: 'Vi',
          id: '1'
      },
      {
          text: 'Текст 2',
          author: 'Vika',
          id:'2'
      },
      {
          text: 'Текст 3',
          author: 'Viktoria',
          id:'3'
      }
  ]);

    const [chatsList, setChatsList] = useState([
        {
            name: 'live in Bali',
            id: '1'
        },
        {
            name: 'GB learn chat',
            id:'2'
        },
        {
            name: 'work',
            id:'3'
        }
    ]);
  useEffect(()=>{
      let lastAuthor = messageList[messageList.length - 1].author;
      if(messageList.length>3 && lastAuthor !== 'robot'){
          console.dir(messageList);
          setTimeout(() =>{
              setMessageList(prevState => ([...prevState,{text: "Сообщение отправлено", author: "robot", id: "id"+(new Date()).getTime() }]));
          }, 1500)

      }
      }, [messageList]
  )


  return (
    <div className="App">
      <header className="App-header">
          <Chats propChatsList={chatsList}/>
          <Form propSetMessageList = {setMessageList}/>
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
              messages.map(m => <div key={m.id}>{m.text}: {m.author}</div>)
          }
      </div>
  )
}

const Form = ({propSetMessageList}) =>{
    const [textBox, setTextBox] = useState("");
    const [authorName, setAuthorName]= useState('');
    const textFieldBoxRef = useRef();
    function submitForm(ev){
        ev.preventDefault();
        propSetMessageList(prevState => ([...prevState,{text: textBox, author: authorName, id: "id"+(new Date()).getTime()}]));
        textFieldBoxRef.current?.focus();
        console.log(textBox);
        console.log(authorName);
    }
    return(
        <div>
            <form onSubmit={submitForm}>
                <h4>Введите сообшение</h4>
            <TextField inputRef={textFieldBoxRef} type={"text"} name={"textbox"} autoFocus={true} onChange={event =>
                setTextBox(event.target.value)
            }/>
                <h4>Введите Ваше имя</h4>
                <TextField type={"text"} name={"authorname"} onChange={event =>
                setAuthorName(event.target.value)
                }/>
                <div>
                    <Button type={"submit"} variant="contained" color="primary">Отправить</Button>
                </div>
            </form>
        </div>
    )
}

    const Chats =({propChatsList}) =>{
        return(
            <div className='Chats'>
                <List>
                {
                    propChatsList.map(m => <ListItem key={m.id}> {m.name}</ListItem>)
                }
                </List>
            </div>
        )
    }