import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MuiExpansionPanelSummary from './MuiExpansionPanelSummary';

function setup() {
  const props = {
    component: 'MuiExpansionPanelSummarySummary',
    content: [{
      component: 'MuiIcon',
      iconName: 'android',
    }, {
      component: 'MuiExpansionPanelTypography',
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
  const comp = shallow(<MuiExpansionPanelSummary {...props} />);
  return { comp, props };
}

describe('<MuiExpansionPanelSummary />', () => {
  it('renders MuiExpansionPanelSummary', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();

    const tree = renderer.create((
      <MemoryRouter>
        <MuiExpansionPanelSummary {...props} />
      </MemoryRouter>
    ));
    expect(tree).toMatchSnapshot();
  });
});
