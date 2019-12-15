
import 'jsdom-global/register'; 
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import React from 'react';
import { mount } from 'enzyme';

import Boxplot from '../src/boxplot';

var expect = require('chai').expect;

it('Various boxplot render', () => {
  let m = mount(<Boxplot />);
  // console.log(m.props());
  // null is returned without data
  expect(m.contains(<div />)).equal(false);
  expect(m.contains('div')).equal(false);
  m = mount(<Boxplot data={[1,3,4,80,20,2]} />);
  expect(m.find('div')).to.have.lengthOf(2);
  m = mount(<Boxplot data={['a','lla','blah','foo']} />);
  //not numeric
  expect(m.contains(<div />)).equal(false);
  // large digits
  m = mount(<Boxplot 
    plotStyle={{fillColor: 'red'}}
    data={[1200,30888,4,80,20,2]} />);
  expect(m.find('div')).to.have.lengthOf(2);
  //3 ticks + 1 general g
  expect(m.find('g')).to.have.lengthOf(3+1);
  // filter % to be 1
  m = mount(<Boxplot data={[1,3,4,80,20]} />);
  // negative
  m = mount(<Boxplot data={[1,3,4,80,-20]} />);
})