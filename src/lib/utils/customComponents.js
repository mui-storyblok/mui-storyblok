import React, { createElement } from 'react';
// [{ componentName: 'MyCoolComp', Component: MyCoolComp, props: {} }]
export const customComponents = [];

export const pushToCustomComponents = (components) => {
  if (components.length > 0) components.forEach(component => customComponents.push(component));
};

export const StoryBlokClickableItem = (props) => {
  if (process.env.REACT_APP_ENV !== 'production' && props._editable) {
    const cName = `${props.component.component} storyblok--outline`;
    const escapedJSONData = props._editable.substring(props._editable.lastIndexOf('{'), props._editable.lastIndexOf('}') + 1);

    return (
      <div className={cName} data-blok-c={escapedJSONData} data-blok-uid={props._uid} key={props?._uid}>
        {createElement(props.components[props.component.component], props)}
      </div>
    );
  }
  return createElement(props.components[props.component.component], { ...props });
};

export const storyBlokClickableProps = ({ _editable, component, _uid }) => {
  if (process.env.REACT_APP_ENV !== 'production' && _editable) {
    const storyblokClass = `${component} storyblok--outline`;
    const escapedJSONData = _editable.substring(_editable.lastIndexOf('{'), _editable.lastIndexOf('}') + 1);
    return {
      dataBlokC: escapedJSONData,
      dataBlokUid: _uid,
      storyblokClass,
    };
  }
  return {
    dataBlokC: '',
    dataBlokUid: '',
    storyblokClass: '',
  };
};

export const renderComponentsWithBridge = (components, component, key = undefined) => {
  const customComponent = customComponents.find(comp => comp.componentName === component.component);
  if (customComponent) {
    return createElement(
      customComponent.Component,
      { ...Object.assign(customComponent.props, component, { key }) },
    );
  }
  return createElement(
    components[component.component],
    { ...component, key, ...storyBlokClickableProps(component) },
  );
};

export const renderComponents = (components, component, key = undefined) => {
  const props = { ...component, key };
  const customComponent = customComponents.find(comp => comp.componentName === component.component);
  if (customComponent) {
    return (
      <StoryBlokClickableItem
        {...Object.assign(customComponent.props, component, { key })}
        components={components}
        component={customComponent.Component}
      />
    );
  }

  if (process.env.REACT_APP_ENV === 'production') {
    return createElement(components[component.component], props);
  }

  return <StoryBlokClickableItem {...props} components={components} component={component} />;
};

export default renderComponents;
