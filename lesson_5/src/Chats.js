import {List, ListItem} from "@mui/material";
import {Link} from "react-router-dom";
import {useState} from "react";

export function Chats() {
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
    return(
        <div className='Chats'>
            <List>
                {
                    chatsList.map(m => <ListItem button component={Link} to={'/chats/'+m.id} key={m.id}> {m.name}</ListItem>)
                }
            </List>
        </div>
    )
}