import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MuiGridItem from './MuiGridItem';

function setup() {
  const props = {
    sizeGrid: jest.fn(),
    content: [{
      component: 'MuiIcon',
      iconName: 'android',
    }, {
      component: 'MuiButtonRedirect',
      redirectRoute: 'page-welcome',
      button: [{
        component: 'MuiButton',
        buttonText: 'buttonText',
      }],
    }, {
      component: 'MuiCard',
      content: [{
        component: 'MuiCardMedia',
        alt: 'alt',
        title: 'title',
        image: 'img.com',
      }],
    }, {
      component: 'MuiTypography',
      content: [{
        component: 'MuiText',
        text: 'text',
      }],
    }, {
      component: 'MuiMenu',
      btnText: 'btnText',
      content: [{
        component: 'MuiMenuItem',
        buttonText: 'buttonText',
        redirectRoute: 'page-welcome',
      }],
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
  };
  const comp = shallow(<MuiGridItem {...props} />);
  return { comp, props };
}

describe('<MuiGridItem />', () => {
  it('renders MuiGridItem', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create((
      <MemoryRouter>
        <MuiGridItem {...props} />
      </MemoryRouter>
    ));
    expect(tree).toMatchSnapshot();
  });
});
