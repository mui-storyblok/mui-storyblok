module.exports = {
  name: 'MuiLink',
  display_name: null,
  updated_at: '2020-04-01T16:44:21.042Z',
  schema: {
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
      ],
      required: true,
      default_value: 'primary',
    },
    underline: {
      type: 'option',
      required: true,
      restrict_components: true,
      use_uuid: true,
      options: [
        {
          value: 'none',
          name: 'none',
        },
        {
          value: 'hover',
          name: 'hover',
        },
        {
          value: 'always',
          name: 'always',
        },
      ],
      default_value: 'hover',
    },
    text: {
      type: 'text',
      required: true,
      description: 'text to display',
    },
    href: {
      type: 'text',
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
  real_name: 'MuiLink',
  component_group_uuid: null,
};
