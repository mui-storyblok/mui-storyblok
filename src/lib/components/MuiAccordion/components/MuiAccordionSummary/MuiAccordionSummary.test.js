import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiAccordionSummary from './MuiAccordionSummary';

function setup() {
  const props = {
    component: 'MuiAccordionSummary',
    content: [{
      component: 'MuiIcon',
      iconName: 'android',
    }, {
      component: 'MuiAccordionTypography',
      content: [{
        component: 'MuiText',
        text: 'text',
      }],
    }],
    expandIcon: [{
      component: 'MuiIcon',
      iconName: 'android',
    }],
  };
  const comp = shallow(<MuiAccordionSummary {...props} />);
  return { comp, props };
}

describe('<MuiAccordionSummary />', () => {
  it('renders MuiAccordionSummary', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();

    const tree = renderer.create(<MuiAccordionSummary {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
