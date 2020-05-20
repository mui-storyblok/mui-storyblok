module.exports = {
  name: 'MuiContactButton',
  display_name: null,
  updated_at: '2020-05-20T19:20:30.061Z',
  schema: {
    button: {
      type: 'bloks',
      restrict_components: true,
      component_whitelist: [
        'MuiButton',
      ],
      required: true,
      maximum: '1',
    },
    email: {
      type: 'text',
      default_value: '',
      display_name: '',
      description: '/** Email address provided to email to */',
      regex: '',
    },
    phone: {
      type: 'number',
      description: '/** Telephone number provided to call */',
      default_value: '',
    },
  },
  image: null,
  preview_field: null,
  is_root: false,
  preview_tmpl: null,
  is_nestable: true,
  all_presets: [],
  preset_id: null,
  real_name: 'MuiContactButton',
  component_group_uuid: null,
};
