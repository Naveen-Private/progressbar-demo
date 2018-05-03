import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import ProgressBarButtons from '../components/ProgressBarButtons'

describe('ProgressBarButtons', () => {
    it('should be defined', () => {
      expect(ProgressBarButtons).toBeDefined();
    });
    it('should render correctly', () => {
      const tree = shallow(
        <ProgressBarButtons progressBarButtons={[10, 20, -30]} />
      );
      expect(tree).toMatchSnapshot();
    });
});