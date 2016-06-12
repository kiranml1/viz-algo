import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Blog from '../../src/components/blog-component';

describe('<Blog />', () => {
  it('contains spec with an expectation', () => {
    const wrapper = shallow(<Blog title="Guides" name="Author" />);
    expect(wrapper.find('header')).to.have.length(1);
  });
});
