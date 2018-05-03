import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import ProgressBarList from '../components/ProgressBarList'

describe('ProgressBarList', () => {
    it('should be defined', () => {
      expect(ProgressBarList).toBeDefined();
    });
    it('should render correctly', () => {
      const tree = shallow(
        <ProgressBarList progressBars={[10, 20, 30]} />
      );
      expect(tree).toMatchSnapshot();
    });
});