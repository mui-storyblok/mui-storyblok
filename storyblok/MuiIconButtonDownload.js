module.exports = {
  name: 'MuiIconButtonDownload',
  display_name: null,
  updated_at: '2020-04-01T16:44:19.538Z',
  schema: {
    fileName: {
      type: 'text',
      required: true,
    },
    href: {
      type: 'text',
      description: 'url of the file you want to be downloaded',
      required: true,
    },
    iconButton: {
      type: 'bloks',
      required: true,
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
  real_name: 'MuiIconButtonDownload',
  component_group_uuid: null,
};
