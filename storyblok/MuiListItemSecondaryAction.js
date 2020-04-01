module.exports = {
  name: 'MuiListItemSecondaryAction',
  display_name: null,
  updated_at: '2020-03-31T18:27:05.649Z',
  schema: {
    rootClass: {
      type: 'options',
    },
    content: {
      type: 'bloks',
      required: true,
      maximum: '1',
      restrict_components: true,
      component_whitelist: [
        'MuiIconButtonRedirect',
        'MuiIconButtonHref',
        'MuiIconButtonDownload',
        'MuiIconButtonDialog',
        'MuiTooltip',
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
  real_name: 'MuiListItemSecondaryAction',
  component_group_uuid: null,
};
