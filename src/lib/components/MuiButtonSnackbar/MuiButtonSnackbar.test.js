import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MuiButtonSnackbar from './MuiButtonSnackbar';

const initialClosingIcon = [
  {
    component: 'MuiIconButton',
    icon: [
      {
        component: 'MuiIcon',
        iconName: 'close',
      },
    ],
  },
];

function setup(closingIcon = initialClosingIcon) {
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
    closingIcon,
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

  it('should return if reason is clickaway', () => {
    const { comp } = setup();
    const handleClose = comp.find('ForwardRef(Snackbar)').first().props().onClose;
    handleClose({}, 'clickaway');
    expect(comp.find('WithStyles(ForwardRef(Snackbar))').first().props().open).toEqual(true);
  });

  it('should return null if no action icon is added', () => {
    const { comp } = setup(null);
    expect(comp.find('ForwardRef(Snackbar)').first().props().action).toEqual(null);
  });

  it('should return iconButton if action icon is added', () => {
    const { comp } = setup();
    expect(comp.find('ForwardRef(Snackbar)').first().props().action).toBeDefined();
  });
});
