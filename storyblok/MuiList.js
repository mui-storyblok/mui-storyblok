module.exports = {
  name: 'MuiList',
  display_name: null,
  updated_at: '2020-03-31T18:27:04.949Z',
  schema: {
    rootClass: {
      type: 'options',
    },
    disablePadding: {
      type: 'boolean',
    },
    dense: {
      type: 'boolean',
    },
    content: {
      type: 'bloks',
      restrict_components: true,
      component_whitelist: [
        'MuiListItem',
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
  real_name: 'MuiList',
  component_group_uuid: null,
};
