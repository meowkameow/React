
import './App.css';
import {useEffect, useRef, useState} from "react";
import { Button, TextField, List, ListItem} from '@mui/material';
import {Link, Outlet} from "react-router-dom";
import {Chats} from "./Chats";
import {Profile} from "./Profile";


export default function App() {





  return (
    <div className="App">
      <header className="App-header">
          <div className="Navigation">
              <List>
                  <ListItem button component={Link} to={'/profile'}> {"Profile"}</ListItem>
                  <ListItem button component={Link} to={'/chats'}>{"Chats"}</ListItem>
              </List>
          </div>
         {/* <Chats propChatsList={chatsList}/>*/}
          <Outlet />
       {/*<Form propSetMessageList = {setMessageList}/>
        <Message messages={messageList}/>*/}
      </header>
    </div>
  );

}


