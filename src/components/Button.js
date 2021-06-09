import React from 'react';
import LanguageContext from '../contexts/LanguageContext.js';

class Button extends React.Component {
  static contextType = LanguageContext; // connect to Context

  render() {
    console.log(this.context); // use this.context to get value from context
    return <button className="ui button primary">Submit</button>;
  }
}

export default Button;
