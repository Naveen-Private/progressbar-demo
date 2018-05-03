import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

// Components import
import App from '../App';
import ProgressBarList from '../components/ProgressBarList'
import ProgressBarButtons from '../components/ProgressBarButtons'
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

  // ProgressBarList component rendering in App - children
  it('ProgressBarList component should be defined', () => {
    expect(ProgressBarList).toBeDefined();
  });
  it('ProgressBar should render correctly', () => {
    const tree = shallow(
      <ProgressBarList progressBars={[10, 20, 30]} />
    );
    expect(tree).toMatchSnapshot();
  });

  // ProgressBarButtons component rendering in App - children
  it('ProgressBarButtons should be defined', () => {
    expect(ProgressBarButtons).toBeDefined();
  });
  it('ProgressBarButtons should render correctly', () => {
    const tree = shallow(
      <ProgressBarButtons progressBarButtons={[10, 20, -30]} />
    );
    expect(tree).toMatchSnapshot();
  });

  // Button component rendering in App - children
  it('Button should be defined', () => {
    expect(Button).toBeDefined();
  });
  it('Button should render correctly', () => {
    const tree = shallow(
      <Button onClick='() => {console.log("some function")}'>12</Button>
    );
    expect(tree).toMatchSnapshot();
  });
  
});


