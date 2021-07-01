import React from 'react';
import {shallow} from 'enzyme';
import App from '../App';

describe('App test', () => {
    test('initial test', () => {
        expect(true).toEqual(true);
    })

    test('render App component', () => {
       let wrapper = shallow(<App />);
       expect(wrapper.find('h1').exists()).toBe(true)
    })
})