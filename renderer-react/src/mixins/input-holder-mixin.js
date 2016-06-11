import React from 'react';

let FormEnhanceTextInput; // eslint-disable-line no-unused-vars

export default FormEnhanceTextInput = InputHolderComponent => class extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
    this.setInput = this.setInput.bind(this);
    this.removeInput = this.removeInput.bind(this);
  }

  setInput(e) {
    this.setState({
      input: e.target.value,
    });
  }

  removeInput() {
    this.setState({
      input: '',
    });
  }

  render() {
    return (
      <InputHolderComponent
        setInput={this.setInput}
        removeInput={this.removeInput}
        {...this.props}
        {...this.state}
      />
    );
  }

};
