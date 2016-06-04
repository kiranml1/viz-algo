import React from 'react';
import ReactDOM from 'react-dom';
import Wrapper from './components/wrapper';
import Header from './components/header';
import NavBar from './components/nav-bar';
import Footer from './components/footer';
import FeatureContent from './components/feature-content';
import Article from './components/article';

ReactDOM.render(
  <Wrapper>
    <Header title="Guides" name="Author" />
    <NavBar />
    <FeatureContent>
      <Article title="Guides">
          Killer Content
      </Article>
    </FeatureContent>
    <Footer name="Author" />
  </Wrapper>,
  document.getElementById('app'));
