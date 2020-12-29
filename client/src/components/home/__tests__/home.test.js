import React from 'react';
import { shallow } from 'enzyme';
import Home from '../homeComponent';

describe('Home component tests:', () => {
  const props = {
    user: { firstName: 'David' },
  };

  it('should show the form when add league button clicked', () => {
    const wrap = shallow(<Home {...props} />);
    wrap.find('button').first().simulate('click');
    expect(wrap).toMatchSnapshot();
  });

  it('should show the name you type in to the input', () => {
    const wrap = shallow(<Home {...props} />);
    wrap.find('button').first().simulate('click');

    expect(wrap.find('input').prop('value')).toEqual('');

    wrap.find('input').simulate('change', {
      target: { value: 'league1' },
    });

    expect(wrap.find('input').prop('value')).toEqual('league1');
  });
});
