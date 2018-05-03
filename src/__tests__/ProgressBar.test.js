import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import ProgressBar from '../components/ProgressBar'

describe('ProgressBar', () => {
    it('should be defined', () => {
      expect(ProgressBar).toBeDefined();
    });
    it('should render correctly', () => {
      const tree = shallow(
        <ProgressBar value='100' />
      );
      expect(tree).toMatchSnapshot();
    });
});

