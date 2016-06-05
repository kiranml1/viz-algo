import React, { Component, PropTypes } from 'react'

export default class Article extends Component {

  render() {
    return (
      <article>
        <header>
          <h1>{this.props.title}</h1>
        </header>
        <section>
          {this.props.children}
        </section>
      </article>
    )
  }

}

Article.prototype.propTypes = {
  title: PropTypes.string,
  children: PropTypes.string
};
