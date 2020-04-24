module.exports = {
  name: 'MuiCardContent',
  display_name: null,
  updated_at: '2020-03-31T18:27:08.178Z',
  schema: {
    rootClass: {
      type: 'options',
      description: 'Mui Override or extend the styles applied to the component.',
    },
    content: {
      type: 'bloks',
      restrict_components: true,
      component_whitelist: [
        'MuiTypography',
        'MuiExpansionPanel',
        'MuiList',
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
  real_name: 'MuiCardContent',
  component_group_uuid: null,
};
