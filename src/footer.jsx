import React from 'react';
class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: props.title };
    }
    render() {
        return (<div className="footer">
            {window.version}
        </div>);
    }
}

export {Footer};