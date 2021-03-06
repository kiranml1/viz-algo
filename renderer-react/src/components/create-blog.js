import React from 'react';
import CreateInputButton from '../form-helpers/create-input-button';

export default class CreateBlog extends CreateInputButton {

  constructor(props) {
    super(props);
    this.onAction = this.onAction.bind(this);
  }

  onAction() {
    this.props.nextStep();
  }

  render() {
    return (
      <CreateInputButton
        placeholderValue={this.props.placeholderValue}
        buttonText={this.props.buttonText}
        onAction={this.onAction}
      />
    );
  }

}
