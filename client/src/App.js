import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";

function App(props) {
    return (
        <BrowserRouter>
            <Route exact path={'/'} component={Join}/>
            <Route path={'/chat'} component={Chat}/>
        </BrowserRouter>
    )
}

export default App;