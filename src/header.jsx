import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: props.title };
    }
    render() {
        const style = {
            textAlign: 'left'
        }
        return (<div className="header">
            <img className="logo" src="images/logo-white.png"></img>
            <h2 className="title" style={style}>{this.state.title}</h2>
        </div>);
    }
}
export {Header}