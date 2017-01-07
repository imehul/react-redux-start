import React from 'react';
import ReactDom from 'react-dom';
import AppNav from '../nav/nav';

class App extends React.Component{
  render(){
    return(
      <div>
        <AppNav />
        {this.props.children}
      </div>
    );
  }
}

export default App;
