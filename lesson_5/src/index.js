import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Chat from './Chat';
import {Profile} from "./Profile";
import {Chats} from "./Chats";
import { Provider } from "react-redux";
import { store } from '././store/index';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "chats",
                element: <Chats/>
            },
            {
                path: "chats/:chatId",
                element: <Chat/>,
            },
            {
                path: "profile",
                element: <Profile/>
            }
        ],
    }
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
        <RouterProvider router={router}/>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
