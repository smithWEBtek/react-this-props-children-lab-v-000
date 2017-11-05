import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Invitation extends Component {
  render(){
    return(
      <div className='invitations'>
        <h1>You've been invited!</h1>
        {this.props.children}
      </div>
    )
  }
}

export default Invitation;
