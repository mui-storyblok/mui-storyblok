module.exports = {
  name: 'MuiTooltip',
  display_name: null,
  updated_at: '2020-04-01T16:44:27.428Z',
  schema: {
    rootClass: {
      type: 'options',
    },
    title: {
      type: 'text',
      required: true,
    },
    arrow: {
      type: 'boolean',
      description: 'f true, adds an arrow to the tooltip.',
    },
    placement: {
      type: 'option',
      use_uuid: true,
      options: [
        {
          value: 'bottom-end',
          name: 'bottom-end',
        },
        {
          value: 'bottom-start',
          name: 'bottom-start',
        },
        {
          value: 'bottom',
          name: 'bottom',
        },
        {
          value: 'left-end',
          name: 'left-end',
        },
        {
          value: 'left-start',
          name: 'left-start',
        },
        {
          value: 'left',
          name: 'left',
        },
        {
          value: 'right-end',
          name: 'right-end',
        },
        {
          value: 'right-start',
          name: 'right-start',
        },
        {
          value: 'right',
          name: 'right',
        },
        {
          value: 'top-end',
          name: 'top-end',
        },
        {
          value: 'top-start',
          name: 'top-start',
        },
        {
          value: 'top',
          name: 'top',
        },
      ],
      required: true,
      default_value: 'bottom',
    },
    content: {
      type: 'bloks',
      restrict_components: true,
      component_whitelist: [
        'MuiIconButtonRedirect',
        'MuiIconButtonHref',
        'MuiIconButtonDownload',
        'MuiIconButtonDialog',
        'MuiButtonRedirect',
      ],
      required: true,
      maximum: '1',
    },
  },
  image: null,
  preview_field: null,
  is_root: false,
  preview_tmpl: null,
  is_nestable: true,
  all_presets: [],
  preset_id: null,
  real_name: 'MuiTooltip',
  component_group_uuid: null,
};
