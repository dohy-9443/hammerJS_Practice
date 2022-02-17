import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Switch ,Link, useHistory} from "react-router-dom";

/* page */
import MainPage from './views/main/MainPage';
import SubPage from './views/sub/SubPage';


export default function App(){

  return (
        <Router>
            <Route exact path="/" component={MainPage}/>
            <Route exact path="/sub" component={SubPage}/>
        </Router>
    );
}