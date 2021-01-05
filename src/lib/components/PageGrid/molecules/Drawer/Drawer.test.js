import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import Drawer from './Drawer';

function setup(open = false) {
  const props = {
    open,
    toggleDrawer: jest.fn(),
    _editable: '<!--#storyblok#{"name": "Drawer", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
    elevation: 16,
    variant: 'temporary',
    content: [
      {
        _editable: '<!--#storyblok#{"name": "List", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
        component: 'List',
        content: [
          {
            _editable: '<!--#storyblok#{"name": "ListItem", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
            component: 'ListItem',
            listItemText: [
              {
                _editable: '<!--#storyblok#{"name": "ListItemText", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
                primary: 'apples',
                component: 'ListItemText',
              },
            ],
          },
        ],
      },
    ],
  };
  const comp = mount(<Drawer {...props} />);
  return { comp, props };
}

describe('<Drawer />', () => {
  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<Drawer {...props} />);
    expect(tree).toMatchSnapshot();
  });

  it('should render Drawer', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });


  it('should handleClose and toggle drawer', () => {
    const { comp } = setup(true);

    expect(comp.find('WithStyles(ForwardRef(Drawer))').first().prop('open')).toEqual(true);
    const closeModal = comp.find('ForwardRef(Modal)').first().prop('onClose');
    act(() => {
      closeModal({ type: 'keydown', key: 'Tab' });
    });
    expect(comp.find('WithStyles(ForwardRef(Drawer))').first().props().open).toEqual(true);
    act(() => {
      closeModal({ type: 'keydown', key: 'Shift' });
    });
    expect(comp.find('WithStyles(ForwardRef(Drawer))').first().props().open).toEqual(true);
    act(() => {
      closeModal({ target: {} });
    });
    setTimeout(() => {
      expect(comp.find('WithStyles(ForwardRef(Drawer))').first().props().open).toEqual(false);
    }, 800);
  });
});
