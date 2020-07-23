/* eslint-disable no-undef */
/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import {
  Form,
  MuiInput,
  MuiSelect,
  MuiSubmit,
  MuiCheckbox,
  MuiRadio,
} from 'rff-wrapper';
import GoogleRecaptcha from './sharedComponents/GoogleRecaptcha/GoogleRecaptcha';
import {
  nestedComponentsProps,
  validComponents,
  muiStringProp,
} from '../../utils/customProps';
import Grid from '../Grid/Grid';

const BlokForm = ({
  content,
  submitButton,
  googleRecaptcha,
  baseUrl,
  successResponseText,
  errorResponseText,
  method,
}) => {
  const components = {
    MuiInput,
    MuiSelect,
    MuiSubmit,
    MuiCheckbox,
    MuiRadio,
  };

  const [state, setState] = useState({
    successResponse: '',
    errorResponse: '',
    isABot: true,
  });

  const onSubmit = async (values) => {
    setState({
      successResponse: successResponseText,
      errorResponse: '',
    });
    const queryString = Object.keys(values).map(key => `${key}=${values[key]}`).join('&');
    const options = {
      method,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: queryString,
    };

    fetch(baseUrl, options)
      .then((response) => {
        if (response.ok) {
          setState({
            successResponse: successResponseText,
            errorResponse: '',
          });
          return state;
        }
      }).catch(() => setState({ successResponse: '', errorResponse: errorResponseText }));
  };

  return (
    <Form
      onSubmit={onSubmit}
    >
      <>
        {content.map((item, index) => (
          <Grid {...item} key={index} components={components} />
        ))}
        {googleRecaptcha.length
          ? (
            <>
              <GoogleRecaptcha {...googleRecaptcha[0]} isABot={state.isABot} setIsABot={setState.isABot} />
              <div style={isABot ? { display: none } : null}>
                <MuiSubmit {...submitButton[0]} />
              </div>
            </>
          )
          : <MuiSubmit {...submitButton[0]} />}
        {state.successResponse && <Typography data-testid="successResponseTestID">{state.successResponse}</Typography>}
        {state.errorResponse && <Typography color="error" data-testid="errorResponseTestID">{state.errorResponse}</Typography>}
      </>
    </Form>
  );
};

export default BlokForm;

BlokForm.propTypes = {
  content(props, propName, componentName) {
    const components = [
      'MuiInput',
      'MuiSelect',
      'MuiCheckbox',
      'MuiRadio',
    ];
    return nestedComponentsProps(props, propName, componentName, components);
  },
  submitButton(props, propName, componentName) {
    const components = ['MuiSubmit'];
    return validComponents(props, propName, componentName, components, 1);
  },
  googleRecaptcha(props, propName, componentName) {
    const components = ['GoogleRecaptcha'];
    return validComponents(props, propName, componentName, components, 1);
  },
  method(props, propName, componentName) {
    const validProps = ['POST', 'GET'];
    return muiStringProp(props, propName, componentName, validProps);
  },
  baseUrl: PropTypes.string.isRequired,
  successResponseText: PropTypes.string.isRequired,
  errorResponseText: PropTypes.string.isRequired,
};

BlokForm.defaultProps = {
  method: 'POST',
  content: [],
  submitButton: [],
  googleRecaptcha: [],
};
