import React from 'react';
import { shallow } from 'enzyme';
import { renderComponents, pushToCustomComponets, customComponents } from './customComponents';

const N = () => (<p>normal</p>);

const Normal = () => (
  <span>
    {renderComponents({ Normal: N }, { component: 'Normal' }, { 'data-testid': 'normal' })}
  </span>
);

const C = () => (<p>Custom</p>);

const Custom = () => (
  <span>
    {renderComponents({ Custom: C }, { component: 'Custom' }, { 'data-testid': 'Custom' })}
  </span>
);

describe('customComponents', () => {
  it('renders normal componet', () => {
    const customComps = [];
    pushToCustomComponets(customComps);
    expect(customComponents).toEqual([]);
    const normalComponet = shallow(<Normal />);
    const normalComponetLength = normalComponet.find('N').length;
    expect(normalComponetLength).toEqual(1);
  });

  it('renders custom componet', () => {
    const customComps = [{ componentName: 'Custom', Component: Custom, props: {} }];
    pushToCustomComponets(customComps);
    expect(customComponents).toEqual(customComps);
    const customComponet = shallow(<Custom />);
    const customComponetLength = customComponet.find('Custom').length;
    expect(customComponetLength).toEqual(1);
  });
});
