module.exports = {
  name: 'MuiIconButtonRedirect',
  display_name: null,
  updated_at: '2020-03-31T18:27:04.758Z',
  schema: {
    redirectRoute: {
      type: 'text',
      required: true,
    },
    iconButton: {
      type: 'bloks',
      maximum: '1',
      restrict_components: true,
      component_whitelist: [
        'MuiIconButton',
      ],
    },
  },
  image: null,
  preview_field: null,
  is_root: false,
  preview_tmpl: null,
  is_nestable: true,
  all_presets: [],
  preset_id: null,
  real_name: 'MuiIconButtonRedirect',
  component_group_uuid: null,
};
