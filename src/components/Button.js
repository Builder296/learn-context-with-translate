import React from 'react';
import LanguageContext from '../contexts/LanguageContext.js';

class Button extends React.Component {
  static contextType = LanguageContext; // connect to Context

  render() {
    const text = this.context === 'english' ? ' Sumit' : 'Voorleggen';
    return <button className="ui button primary">{text}</button>;
  }
}

export default Button;
