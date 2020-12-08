import React, { createElement } from 'react';
import ErrorBoundry from 'lib/utils/ErrorBoundry';

// [{ componentName: 'MyCoolComp', Component: MyCoolComp, props: {} }]
export const customComponents = [];

export const pushToCustomComponents = (components) => {
  if (components.length > 0) components.forEach(component => customComponents.push(component));
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
    return (
      <ErrorBoundry component={component}>
        {createElement(
          customComponent.Component,
          { ...Object.assign(customComponent.props, component, { key }) },
        )}
      </ErrorBoundry>
    );
  }

  return (
    <ErrorBoundry component={component}>
      {createElement(
        components[component.component],
        { ...component, key, ...storyBlokClickableProps(component) },
      )}
    </ErrorBoundry>
  );
};

export const renderComponents = (components, component, key = undefined) => {
  const props = { ...component, components: { ...components, ...customComponents }, key };
  const customComponent = customComponents.find(comp => comp.componentName === component.component);
  if (customComponent) {
    const customProps = Object.assign(customComponent.props, component, { key });
    const CustomComponent = customComponent.Component;
    return <CustomComponent {...customProps} />;
  }

  return createElement(components[component.component], props);
};

export default renderComponents;
