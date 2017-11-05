import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ThemedParty extends Component {
  render() {
    const childrenWithExtraProp = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme
      });
    });
 
    return (
      <div>
        {childrenWithExtraProp}
      </div>      
    );
  }
};

export default ThemedParty;
