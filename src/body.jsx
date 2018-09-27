import React from 'react';
class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: props.title };
    }
    click(){
        console.log("sending")
        ipcRenderer.sendSync("sync", "Hello There");
    }
    
    render() {
        const height = window.innerHeight - 140;
        return (<div className="body" style={{height: height}}>
            body
        </div>);
    }
}

export {Body};