/**
 * Architecture Notes:
 * ===================
 * Component - React View Renderer, which must be reusable - this section is intended to go in blogging framework after a stable
 * version with tests, so this should not be intended to be built in process of mix and match, this should be reusable components
 * which can be isolated and can be adapted with style, semantics with SEO and accessibility.
 *
 * Stores / Services - this section should be already prebuilt with api like getAll, createAll and we just call them here from blogging
 * framework and use them for our blog development, but this mostly should be reusable and not a part of renderer in
 * architecture point of view
 *
 * modern patterns for app development like Flux, Redux - should be used and they can also be re-usable if it is possbile but later this
 * content will be separated in a blog prototype
 */

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
