/* eslint-disable no-undef */
/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import {
  nestedComponentsProps,
  validComponents,
  muiStringProp,
} from 'lib/utils/customProps';
import {
  Form as RffForm,
  MuiInput,
  MuiSelect,
  MuiSubmit,
  MuiCheckbox,
  MuiRadio,
} from 'rff-wrapper';

import Grid from 'lib/components/PageGrid/templates/Grid/Grid';
import GridItem from 'lib/components/PageGrid/templates/GridItem/GridItem';
import GoogleRecaptcha from './components/GoogleRecaptcha/GoogleRecaptcha';

const components = {
  MuiInput,
  MuiSelect,
  MuiSubmit,
  MuiCheckbox,
  MuiRadio,
  FormGrid: Grid,
  FormGridItem: GridItem,
};

const Form = ({
  content,
  submitButton,
  googleRecaptcha,
  baseUrl,
  successResponseText,
  errorResponseText,
  method,
  storyblokClass,
  dataBlokC,
  dataBlokUid,
}) => {
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
    <RffForm
      onSubmit={onSubmit}
      className={storyblokClass}
      data-blok-c={dataBlokC}
      data-blok-uid={dataBlokUid}
    >
      <>
        {content.map((item, index) => (
          <Grid {...item} key={index} components={components} />
        ))}
        {googleRecaptcha.length
          ? (
            <>
              <GoogleRecaptcha {...googleRecaptcha[0]} isABot={state.isABot} setIsABot={setState} />
              <div style={state.isABot ? { display: 'none' } : null}>
                <MuiSubmit {...submitButton[0]} />
              </div>
            </>
          )
          : <MuiSubmit {...submitButton[0]} />}
        {state.successResponse && <Typography data-testid="successResponseTestID">{state.successResponse}</Typography>}
        {state.errorResponse && <Typography color="error" data-testid="errorResponseTestID">{state.errorResponse}</Typography>}
      </>
    </RffForm>
  );
};

export default Form;

Form.propTypes = {
  content(props, propName, componentName) {
    const comps = [
      'MuiInput',
      'MuiSelect',
      'MuiCheckbox',
      'MuiRadio',
    ];
    return nestedComponentsProps(props, propName, componentName, comps);
  },
  submitButton(props, propName, componentName) {
    const comps = ['MuiSubmit'];
    return validComponents(props, propName, componentName, comps, 1);
  },
  googleRecaptcha(props, propName, componentName) {
    const comps = ['GoogleRecaptcha'];
    return validComponents(props, propName, componentName, comps, 1);
  },
  method(props, propName, componentName) {
    const validProps = ['POST', 'GET'];
    return muiStringProp(props, propName, componentName, validProps);
  },
  baseUrl: PropTypes.string.isRequired,
  successResponseText: PropTypes.string.isRequired,
  errorResponseText: PropTypes.string.isRequired,
};

Form.defaultProps = {
  method: 'POST',
  content: [],
  submitButton: [],
  googleRecaptcha: [],
};
