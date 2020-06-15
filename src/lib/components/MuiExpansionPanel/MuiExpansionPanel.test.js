import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MuiExpansionPanel from './MuiExpansionPanel';

function setup() {
  const props = {
    expansionPanelSummary: [{
      component: 'MuiExpansionPanelSummary',
      content: [{
        component: 'MuiIcon',
        iconName: 'android',
      }],
      expandIcon: [{
        component: 'MuiIcon',
        iconName: 'android',
      }],
    }],

    expansionPanelDetails: [{
      component: 'MuiExpansionPanelDetails',
      content: [{
        component: 'MuiExpansionPanelTypography',
        content: [{
          component: 'MuiText',
          text: 'text',
        }],
      }],
    }],
  };
  const comp = shallow(<MuiExpansionPanel {...props} />);
  return { comp, props };
}

describe('<MuiExpansionPanel />', () => {
  it('renders MuiExpansionPanel', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create((
      <MemoryRouter>
        <MuiExpansionPanel {...props} />
      </MemoryRouter>
    ));
    expect(tree).toMatchSnapshot();
  });

  it('should handle change and toggle the expansion panel', () => {
    const { comp } = setup();
    const { expanded } = comp.find('WithStyles(ForwardRef(ExpansionPanel))').first().props();
    expect(expanded).toEqual(false);
    comp.find('WithStyles(ForwardRef(ExpansionPanel))').first().prop('onChange')();
    expect(comp.find('WithStyles(ForwardRef(ExpansionPanel))').first().props().expanded).toEqual(true);
  });
});
