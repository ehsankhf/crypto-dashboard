import React, {Component} from 'react';
import {
    BrowserRouter as Router,
} from 'react-router-dom';
import {Container} from "reactstrap";

import Header from "./Header/Header";
import Main from "./Main/Main";

export default class App extends Component {
    render() {
        return (
            <Container>
                <Router>
                    <div>
                        <Header/>
                        <Main />
                    </div>
                </Router>
            </Container>
        );
    }
}
