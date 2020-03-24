import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MuiExpansionPanelDetails from './MuiExpansionPanelDetails';

function setup() {
  const props = {
    content: [{
      component: 'MuiTypography',
      content: [{
        component: 'MuiText',
        text: 'text',
      }],
    }],
  };
  const comp = shallow(<MuiExpansionPanelDetails {...props} />);
  return { comp, props };
}

describe('<MuiExpansionPanelDetails />', () => {
  it('renders MuiExpansionPanelDetails', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();

    const tree = renderer.create((
      <MemoryRouter>
        <MuiExpansionPanelDetails {...props} />
      </MemoryRouter>
    ));
    expect(tree).toMatchSnapshot();
  });
});
