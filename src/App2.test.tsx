import { shallow } from 'enzyme';
import React from 'react';
import App from './App2';

describe('Test', () => {
    it('renders three <Foo /> components', () => {
        const wrapper = shallow(<App message="test" />);
        expect(wrapper.text()).toBe('Hello ' + 'test');
      });
});
