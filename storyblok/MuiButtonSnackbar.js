module.exports = {
  name: 'MuiButtonSnackbar',
  display_name: null,
  updated_at: '2020-05-04T23:06:01.079Z',
  schema: {
    message: {
      type: 'text',
      description: '* mui prop: node\n* The message to be displayed.',
      default_value: '',
      pos: 0,
    },
    anchorOrigin: {
      type: 'options',
      description: "* mui prop: {horizontal: 'center' | 'left' | 'right',\n                    vertical: 'bottom' | 'top' }\n* The anchor of the Snackbar.",
      display_name: '',
      options: [
        {
          value: 'horizontal: center, vertical: bottom',
          name: 'horizontal: center; vertical: bottom',
        },
        {
          value: 'horizontal: center, vertical: top',
          name: 'horizontal: center; vertical: top',
        },
        {
          value: 'horizontal: left, vertical: top',
          name: 'horizontal: left; vertical: top',
        },
        {
          value: 'horizontal: left, vertical: bottom',
          name: 'horizontal: left; vertical: bottom',
        },
        {
          value: 'horizontal: right, vertical: bottom',
          name: 'horizontal: right; vertical: bottom',
        },
        {
          value: 'horizontal: right, vertical: top',
          name: 'horizontal: right; vertical: top',
        },
      ],
      default_value: 'vertical: bottom, horizontal: center',
      min_options: '0',
      max_options: '1',
      pos: 1,
    },
    autoHideDuration: {
      type: 'number',
      description: '   * mui prop: number\n   * The number of milliseconds to wait before automatically calling the onClose function.\n   * onClose should then set the state of the open prop to hide the Snackbar.\n   * This behavior is disabled by default with the null value.',
      default_value: '6000',
      pos: 2,
    },
    disableWindowBlurListener: {
      type: 'boolean',
      description: '   * mui prop: true | false\n   * If true, the autoHideDuration timer will expire even if the window is not focused.',
      pos: 3,
    },
    resumeHideDuration: {
      type: 'number',
      description: "   * mui prop: number\n   * The number of milliseconds to wait before dismissing after user interaction.\n   * If autoHideDuration prop isn't specified, it does nothing.\n   * If autoHideDuration prop is specified but resumeHideDuration isn't,\n   * we default to autoHideDuration / 2 ms.",
      default_value: '0',
      pos: 4,
    },
    button: {
      type: 'bloks',
      restrict_components: true,
      component_whitelist: [
        'MuiButton',
      ],
      required: true,
      description: '',
      pos: 5,
    },
    rootClass: {
      type: 'options',
      description: '* storyblok multiselect of css classes\n* Mui Override or extend the styles applied to the component.',
      min_options: '',
      options: [],
      pos: 6,
    },
    closingIcon: {
      type: 'bloks',
      restrict_components: true,
      component_whitelist: [
        'MuiIconButton',
      ],
      pos: 7,
    },
  },
  image: null,
  preview_field: null,
  is_root: false,
  preview_tmpl: null,
  is_nestable: true,
  all_presets: [],
  preset_id: null,
  real_name: 'MuiButtonSnackbar',
  component_group_uuid: null,
};
