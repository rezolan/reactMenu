import React, { Component } from 'react';

class Submenu extends Component{

    render(){
        return (
            <ul className = 'sublinks'>

                {this.props.sublinks.map((item, key, array)=>{
                    return (
                        <li key = {key}>
                            <a href={item.link}>{item.title}</a>
                            {(Array.isArray(item.children) && item.children.length > 0) ? <Submenu sublinks = {item.children}></Submenu> : ''}
                        </li>
                    )
                })}
            </ul>
        )
    }
}
export default Submenu;