import React, { createElement } from 'react';
// [{ componentName: 'MyCoolComp', Component: MyCoolComp, props: {} }]
export const customComponents = [];

export const pushToCustomComponents = (components) => {
  if (components.length > 0) components.forEach(component => customComponents.push(component));
};

export const StoryBlokClickableItem = (props) => {
  const cName = `${props.component.component} storyblok--outline`;
  const escapedJSONData = props._editable.substring(props._editable.lastIndexOf('{'), props._editable.lastIndexOf('}') + 1 );

  return (
    <div className={cName} data-blok-c={escapedJSONData} data-blok-uid={props._uid}>
      {createElement(props.components[props.component.component], props)}
    </div>
  );
};

export const renderComponents = (components, component, key = undefined) => {
  let props = { ...component, key };

  const customComponent = customComponents.find(comp => comp.componentName === component.component);
  if (customComponent) {
    props = Object.assign(customComponent.props, component, { key });
    const CustomComponent = customComponent.Component;
    return <CustomComponent {...props} />;
  }

  if (process.env.REACT_APP_ENV === 'production') {
    return createElement(components[component.component], props);
  }

  return <StoryBlokClickableItem {...props} components={components} component={component} />;
};

export default renderComponents;
