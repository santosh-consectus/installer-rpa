import { Header } from "./header";
import { Footer } from "./footer";
import { Body } from "./body";
var {ipcRenderer, remote} = require('electron');  
var main = remote.require("./main.js");

import React from 'react';
const title= "Consectus RPA Installation";
window.version = "1.0.0";

class App extends React.Component {
  render() {
    return (
      <div className="flex-container" style={{height:window.innerHeight}}>
      <Header title={title} />
      <Body /> 
      <Footer />
    </div>);
  }
}
export {App};