import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu';
import dataMenu from './data/dataMenu'
import Clicker from './components/Clicker';
class App extends Component {
    constructor(props){
        super(props);
        this.name = 0;
    }
    render() {
        return (
            <div className="App">
                <Menu men = {dataMenu}>

                </Menu>
                <div className="content">
                    <Clicker ></Clicker>
                    <Clicker ></Clicker>
                    <Clicker ></Clicker>
                    <Clicker ></Clicker>
                    <Clicker ></Clicker>
                    <Clicker ></Clicker>
                    <Clicker ></Clicker>
                    <Clicker ></Clicker>
                    <Clicker ></Clicker>
                    <Clicker ></Clicker>
                    <Clicker ></Clicker>
                    <Clicker ></Clicker>
                </div>

            </div>
        );
    }
}

export default App;



