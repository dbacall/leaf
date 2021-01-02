import React from 'react';
import { shallow } from 'enzyme';
import Login from '../loginComponent';

describe('Login component tests:', () => {
  const props = {
    errors: {},
  };

  it('should render correctly', () => {
    const wrap = shallow(<Login {...props} />);
    expect(wrap).toMatchSnapshot();
  });
});
