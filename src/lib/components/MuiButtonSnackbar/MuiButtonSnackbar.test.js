import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MuiButtonSnackbar from './MuiButtonSnackbar';

function setup() {
  const props = {
    message: 'a Snackbar message',
    anchorOrigin: ['horizontal: center, vertical: bottom'],
    autoHideDuration: '6000',
    button: [
      {
        buttonText: 'snackBar',
        component: 'MuiButton',
      },
    ],
    closingIcon: [
      {
        component: 'MuiIconButton',
        icon: [
          {
            component: 'MuiIcon',
            iconName: 'close',
          },
        ],
      },
    ],
  };
  const comp = mount(
    <MemoryRouter>
      <MuiButtonSnackbar {...props} />
    </MemoryRouter>,
  );
  return { comp, props };
}

describe('<MuiButtonSnackbar />', () => {
  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(
      <MemoryRouter>
        <MuiButtonSnackbar {...props} />
      </MemoryRouter>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render MuiButtonSnackbar', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  it('should open snackbar when button is clicked and close when closeIcon clicked', () => {
    const { comp } = setup();
    expect(comp.find('WithStyles(ForwardRef(Snackbar))').first().props().open).toEqual(false);
    const btn = comp.find('[data-testid="muiButton"]');
    btn.first().simulate('click');
    expect(comp.find('WithStyles(ForwardRef(Snackbar))').first().props().open).toEqual(true);
    const iconBtn = comp.find('[data-testid="muiIconButton"]');
    iconBtn.first().simulate('click');
    expect(comp.find('WithStyles(ForwardRef(Snackbar))').first().props().open).toEqual(false);
  });
});
