import React from 'react';
import { shallow, mount } from 'enzyme';
import { renderComponents, pushToCustomComponents, customComponents } from './customComponents';

const N = () => (<p>normal</p>);

const Normal = props => (
  <span>
    {renderComponents({ Normal: N }, { component: 'Normal' }, { ...props, 'data-testid': 'normal' })}
  </span>
);

const C = () => (<p>Custom</p>);

const Custom = props => (
  <span>
    {renderComponents({ Custom: C }, { component: 'Custom' }, { ...props, 'data-testid': 'Custom' })}
  </span>
);

function setup() {
  const props = {
    components: [{ componentName: 'MyCoolComp', Component: <p>cool</p>, props: {} }],
    component: {
      component: 'MyCoolComp',
    },
    _uid: '1243qrfqawtyq3',
    _editable: '<!--#storyblok#{"name": "markdown", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->'
  };
  return { props };
}

describe('customComponents', () => {
  it.skip('renders normal component', () => {
    const { props } = setup();
    const customComps = [];
    pushToCustomComponents(customComps);
    expect(customComponents).toEqual([]);
    const normalComponet = shallow(<Normal {...props} />);
    const normalComponetLength = normalComponet.find('StoryBlokClickableItem').length;
    expect(normalComponetLength).toEqual(1);
  });

  it.skip('renders custom component', () => {
    const { props } = setup();
    const customComps = [{ componentName: 'Custom', Component: Custom, props: {} }];
    pushToCustomComponents(customComps);
    expect(customComponents).toEqual(customComps);
    const customComponet = mount(<Custom {...props} />);
    const customComponetLength = customComponet.find('Custom').length;
    expect(customComponetLength).toEqual(1);
  });
});
