import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MuiNotificationBanner from './MuiNotificationBanner';

function setup() {
  const props = {
    content: [{
      component: 'MuiTypography',
      content: [{
        component: 'MuiText',
        content: 'Banner text',
      }],
    }],
  };
  const comp = shallow(<MuiNotificationBanner {...props} />);
  return { comp, props };
}

describe('<MuiNotificationBanner />', () => {
  it('renders MuiNotificationBanner', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  it('should setBanner to false when icon is clicked', () => {
    const { comp } = setup();
    expect(comp.exists('WithStyles(ForwardRef(Icon))')).toEqual(true);
    comp.find('WithStyles(ForwardRef(Icon))').at(0).simulate('click');
    expect(comp.exists('WithStyles(ForwardRef(Icon))')).toEqual(false);
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(
      <MemoryRouter>
        <MuiNotificationBanner {...props} />
      </MemoryRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
