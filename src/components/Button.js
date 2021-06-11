import React from 'react';
import LanguageContext from '../contexts/LanguageContext.js';

class Button extends React.Component {
  static contextType = LanguageContext;

  renderSunmit(value) {
    return value === 'english' ? ' Sumit' : 'Voorleggen'
  }

  render() {
    // const text = this.context === 'english' ? ' Sumit' : 'Voorleggen';
    return <button className="ui button primary">
      <LanguageContext.Consumer>
        {(value) => this.renderSunmit(value)}
      </LanguageContext.Consumer>
    </button>;
  }
}

export default Button;
