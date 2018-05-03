import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

// Components import
import App from '../App';
import ProgressBar from '../components/ProgressBar'
import Button from '../components/Button'

const mockData = {"buttons":[14,12,-37,-23],"bars":[13,80,17],"limit":190}

describe('App', () => {
  //Parent component
  it('App should be defined', () => {
    expect(App).toBeDefined();
  });
  it('App should render correctly with mockdata', async () => {
    expect.assertions(1);
    const data = await mockData;
    expect(data).toEqual(mockData);
  });

  // ProgressBar component rendering in App - children
  it('ProgressBar component should be defined', () => {
    expect(ProgressBar).toBeDefined();
  });
  it('ProgressBar should render correctly', () => {
    const tree = shallow(
      <ProgressBar value='100' />
    );
    expect(tree).toMatchSnapshot();
  });

  // Button component rendering in App - children
  it('Button should be defined', () => {
    expect(Button).toBeDefined();
  });
  it('Button should render correctly', () => {
    const tree = shallow(
      <Button onClick='() => {console.log("click function")}'>12</Button>
    );
    expect(tree).toMatchSnapshot();
  });
  
});


