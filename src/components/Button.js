import React from 'react';
import LanguageContext from '../contexts/LanguageContext.js';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
  renderSunmit(value) {
    return value === 'english' ? ' Sumit' : 'Voorleggen';
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {(value) => this.renderSunmit(value)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    return (
      <ColorContext.Consumer>
        {(color) => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
