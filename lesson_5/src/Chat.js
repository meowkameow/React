import {useParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {Button, TextField} from "@mui/material";
export default function Chat(){
    const [messageList, setMessageList] = useState([
        {
            text: 'Текст 1',
            chatId: 1,
            author: 'Vi',
            id: '1'
        },
        {
            text: 'Текст 2',
            chatId: 1,
            author: 'Vi',
            id: '2'
        },
]);


    const params= useParams();
    const chatId = params.chatId;

    useEffect(()=>{
            let lastAuthor = messageList[messageList.length - 1].author;
            if(messageList.length>2 && lastAuthor !== 'robot'){
                console.dir(messageList);
                setTimeout(() =>{
                    setMessageList(prevState => ([...prevState,{text: "I think it's true", chatId: chatId, author: "robot", id: "id"+(new Date()).getTime() }]));
                }, 1500)

            }
        }, [messageList]
    )

    if(Number(chatId) > 3 || Number.isNaN(Number(chatId))){
    return (
        <div>Chat not found</div>
    )
    }

    return(
        <div className='Message'>
            <p>chat id: {chatId}</p>
            {

                messageList.filter(f => f.chatId == chatId).map(m => <div key={m.id}>{m.author}: {m.text} </div>)
            }
            <Form propSetMessageList = {setMessageList} chatId={chatId}/>
        </div>
    )
}

    const Form = ({propSetMessageList, chatId}) =>{
    const [textBox, setTextBox] = useState("");
    const [authorName, setAuthorName]= useState('Vi');
    const textFieldBoxRef = useRef();
    function submitForm(ev){
        ev.preventDefault();
        propSetMessageList(prevState => ([...prevState,{text: textBox, chatId: chatId, author: authorName, id: "id"+(new Date()).getTime()}]));
        textFieldBoxRef.current?.focus();
        console.log(textBox);
        console.log(authorName);
    }
    return(
        <div>
            <form onSubmit={submitForm}>
                <h4>Message text</h4>
                <TextField inputRef={textFieldBoxRef} type={"text"} name={"textbox"} autoFocus={true} onChange={event =>
                    setTextBox(event.target.value)
                }/>
                {/*<h4>Введите Ваше имя</h4>
                <TextField type={"text"} name={"authorname"} onChange={event =>
                    setAuthorName(event.target.value)
                }/>*/}
                <div>
                    <Button type={"submit"} variant="contained" color="primary">Send</Button>
                </div>
            </form>
        </div>
    )
}