import React from 'react';
import LanguageContext from '../contexts/LanguageContext.js';
class Field extends React.Component {
  static contextType = LanguageContext; // connect to Context

  render() {
    const text = this.context === 'english' ? ' Name' : 'Naam';

    return (
      <div className="ui field">
        <label>{text}:</label>
        <input />
      </div>
    );
  }
}

export default Field;
