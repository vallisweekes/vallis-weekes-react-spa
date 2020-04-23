import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Layout from './Layout';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
configure({ adapter: new Adapter() });

describe('<Layout/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Layout />);
  });

  it('should render header component', () => {
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('shoud render main component', () => {
    expect(wrapper.find(Main)).toHaveLength(1);
  });

  it('shoud render main component', () => {
    expect(wrapper.find(Footer)).toHaveLength(1);
  });
});
