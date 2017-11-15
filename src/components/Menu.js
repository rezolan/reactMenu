import React, { Component } from 'react';
import Submenu from './Submenu';

class Menu extends Component{
    constructor(props) {
        super(props);
        this.state = {
            fadeFlag: false,
            className: "list",
        }
    }
    fade = () => {
        this.setState({fadeFlag:!this.state.fadeFlag});
        this.setState({className:this.state.fadeFlag ? 'list' : 'list fade'});
    }

    render(){
        console.log();
        return (
            <div className="menu">
                <div id="collapse" onClick = {this.fade}>|||</div>
                <div  className = {this.state.className}>
                    <div className="closer" onClick = {this.fade}>
                        X
                    </div>
                    {this.props.men.map((item, key)=>{
                        return (
                            <ul className = 'links' key = {key}>
                                <li><a href={item.link}>{item.title}</a></li>
                                <Submenu sublinks = {item.children} >

                                </Submenu>
                            </ul>
                        )
                    })}

                </div>
                <div className="close"></div>
            </div>
        )
    }

}
export default Menu;