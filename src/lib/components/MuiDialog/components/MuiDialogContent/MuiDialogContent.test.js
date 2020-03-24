import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MuiDialogContent from './MuiDialogContent';

function setup() {
  const props = {
    content: [{
      component: 'MuiTypography',
      content: [{
        component: 'MuiText',
        text: 'text',
      }, {
        component: 'MuiExpansionPanel',
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
            component: 'MuiTypography',
            content: [{
              component: 'MuiText',
              text: 'text',
            }],
          }],
        }],
      }],
    }],
  };
  const comp = shallow(<MuiDialogContent {...props} />);

  return { comp, props };
}

describe('<MuiDialogContent />', () => {
  it('renders MuiDialogContent', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });


  test('snapshot', () => {
    const { props } = setup();

    const tree = renderer.create((
      <MemoryRouter>
        <MuiDialogContent {...props} />
      </MemoryRouter>
    ));
    expect(tree).toMatchSnapshot();
  });
});
