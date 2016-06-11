import React from 'react';
import CreateBlog from './create-blog';
import CreatePost from './create-post';

export default class BlogRegistration extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      step: 1,
    };
    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);
  }

  nextStep() {
    this.setState({
      step: this.state.step + 1,
    });
  }

  prevStep() {
    this.setState({
      step: this.state.step - 1,
    });
  }

  render() {
    switch (this.state.step) {
      case 1:
        return (
          <CreateBlog
            placeholderValue="Blog Title"
            buttonText="Create Blog"
            nextStep={this.nextStep}
            prevStep={this.prevStep}
          />
        );
      case 2:
        return (
          <CreatePost
            placeholderValue="Post Title"
            buttonText="Create Post"
            nextStep={this.nextStep}
            prevStep={this.prevStep}
          />
        );
      default:
        return null;
    }
  }

}
