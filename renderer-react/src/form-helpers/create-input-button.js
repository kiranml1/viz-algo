import React, { PropTypes } from 'react';
import formEnhanceInputMixin from '../mixins/input-holder-mixin';

class CreateInputButton extends React.Component {

  static propTypes = {
    buttonText: PropTypes.string,
    input: PropTypes.string,
    placeholderValue: PropTypes.string,
    setInput: PropTypes.func,
    removeInput: PropTypes.func,
    onAction: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
    this.doAction = this.doAction.bind(this);
  }

  doAction() {
    this.setState({
      name: this.props.input,
    });
    this.props.onAction(this.props.input);
    this.props.removeInput();
  }

  render() {
    return (
      <div>
        <input
          type="text"
          ref="name"
          placeholder={this.props.placeholderValue}
          value={this.props.input}
          onChange={this.props.setInput}
        />
        <button onClick={this.doAction}>{this.props.buttonText}</button>
      </div>
    );
  }

}

export default formEnhanceInputMixin(CreateInputButton);
