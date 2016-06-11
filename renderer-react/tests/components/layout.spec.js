import React, { PropTypes } from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import Wrapper from '../../src/components/layout';
import Blog from '../../src/components/blog-component';

describe('<Wrapper />', () => {

  describe('<Wrapper /> without children - shallow rendering in enzyme', () => {

    it("Wrapper component should match with the class and tag", () => {
      const wrapper = shallow(<Wrapper />);
      expect(wrapper.find('div')).to.have.length(1);
      expect(wrapper.find('.layout-wrapper')).to.have.length(1);
    });

    it('Wrapper should render children', () => {
      const wrapper = shallow(
        <Wrapper></Wrapper>
      );
      expect(wrapper.find('div')).to.have.length(1);
      expect(wrapper.find('.layout-wrapper')).to.have.length(1);
    });

  });

  describe('<Wrapper /> without children', () => {

    let renderer = TestUtils.createRenderer();
    let wrapperDiv;

    beforeEach(() => {
      renderer.render(<Wrapper />);
      wrapperDiv = renderer.getRenderOutput();
    });

    it('Wrapper testing props', () => {
      expect(wrapperDiv.type).to.equal('div');
      expect(wrapperDiv.props.className).to.equal('layout-wrapper');
    });

  });

  describe('<Wrapper /> with children', () => {

    let renderer = TestUtils.createRenderer();
    let wrapperDiv;

    beforeEach(() => {
      renderer.render(
        <Wrapper>
          <div className="test-content"></div>
        </Wrapper>
      );
      wrapperDiv = renderer.getRenderOutput();
    });

    it('Wrapper testing props', () => {
      expect(wrapperDiv.type).to.equal('div');
      expect(wrapperDiv.props.className).to.equal('layout-wrapper');
    });

    it('Wrapper tests with children', () => {
      const innerContent = wrapperDiv.props.children;
      expect(innerContent.type).to.equal('div');
      expect(innerContent.props.className).to.equal('test-content');
    });

  });

});
