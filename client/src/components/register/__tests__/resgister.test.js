import React from 'react';
import { shallow } from 'enzyme';
import Register from '../registerComponent';

describe('Register component tests:', () => {
  const props = {
    errors: {},
  };

  it('should render correctly', () => {
    const wrap = shallow(<Register {...props} />);
    expect(wrap).toMatchSnapshot();
  });
});
