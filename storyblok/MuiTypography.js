module.exports = {
  name: 'MuiTypography',
  display_name: null,
  updated_at: '2020-04-01T16:44:27.858Z',
  schema: {
    align: {
      type: 'option',
      use_uuid: true,
      options: [
        {
          value: 'inherit',
          name: 'inherit',
        },
        {
          value: 'left',
          name: 'left',
        },
        {
          value: 'center',
          name: 'center',
        },
        {
          value: 'right',
          name: 'right',
        },
        {
          value: 'justify',
          name: 'justify',
        },
      ],
      default_value: 'inherit',
      required: true,
    },
    color: {
      type: 'option',
      use_uuid: true,
      options: [
        {
          value: 'initial',
          name: 'initial',
        },
        {
          value: 'inherit',
          name: 'inherit',
        },
        {
          value: 'primary',
          name: 'primary',
        },
        {
          value: 'secondary',
          name: 'secondary',
        },
        {
          value: 'textPrimary',
          name: 'textPrimary',
        },
        {
          value: 'textSecondary',
          name: 'textSecondary',
        },
        {
          value: 'error',
          name: 'error',
        },
      ],
      default_value: 'initial',
      required: true,
    },
    variant: {
      type: 'option',
      use_uuid: true,
      options: [
        {
          value: 'h1',
          name: 'h1',
        },
        {
          value: 'h2',
          name: 'h2',
        },
        {
          value: 'h3',
          name: 'h3',
        },
        {
          value: 'h4',
          name: 'h4',
        },
        {
          value: 'h5',
          name: 'h5',
        },
        {
          value: 'h6',
          name: 'h6',
        },
        {
          value: 'subtitle1',
          name: 'subtitle1',
        },
        {
          value: 'subtitle2',
          name: 'subtitle2',
        },
        {
          value: 'body1',
          name: 'body1',
        },
        {
          value: 'body2',
          name: 'body2',
        },
        {
          value: 'caption',
          name: 'caption',
        },
        {
          value: 'button',
          name: 'button',
        },
        {
          value: 'overline',
          name: 'overline',
        },
        {
          value: 'srOnly',
          name: 'srOnly',
        },
        {
          value: 'inherit',
          name: 'inherit',
        },
      ],
      default_value: 'body1',
      required: true,
    },
    rootClass: {
      type: 'options',
      options: [
        {
          value: 'color: white',
          name: 'color white',
        },
      ],
      folder_slug: '',
      description: '',
      display_name: '',
      translatable: false,
      required: false,
      external_datasource: '',
    },
    width: {
      type: 'text',
      required: true,
      default_value: '100%',
    },
    height: {
      type: 'text',
      required: true,
      default_value: '100%',
    },
    content: {
      type: 'bloks',
      maximum: '',
      restrict_components: true,
      component_whitelist: [
        'MuiText',
        'MuiLink',
        'MuiIcon',
        'MuiIconButtonRedirect',
        'MuiIconButtonHref',
        'MuiIconButtonDownload',
        'MuiIconButtonDialog',
        'MuiButtonRedirect',
        'MuiButtonDownload',
        'MuiButtonDialog',
        'MuiTooltip',
        'MuiButtonHref',
      ],
      required: true,
    },
  },
  image: null,
  preview_field: null,
  is_root: false,
  preview_tmpl: null,
  is_nestable: true,
  all_presets: [],
  preset_id: null,
  real_name: 'MuiTypography',
  component_group_uuid: null,
};
