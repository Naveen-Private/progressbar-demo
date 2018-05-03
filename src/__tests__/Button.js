import React from 'react';
import { shallow } from 'enzyme';
import Button from '../components/Button';

describe('Button', () => {
 it('should be defined', () => {
   expect(Button).toBeDefined();
 });
 it('should render correctly', () => {
   const tree = shallow(
     <Button onClick='() => {console.log("some function")}'>12</Button>
   );
   expect(tree).toMatchSnapshot();
 });
});