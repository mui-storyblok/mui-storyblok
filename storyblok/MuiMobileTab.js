module.exports = {
  name: 'MuiMobileTab',
  display_name: null,
  updated_at: '2020-04-01T16:44:25.313Z',
  schema: {
    tab: {
      type: 'bloks',
      required: true,
      maximum: '1',
      restrict_components: true,
      component_whitelist: [
        'MuiHeroHeader',
      ],
    },
    geocodeState: {
      type: 'text',
      description: 'State you would like to show if user is in this state need to have MuiTabs geocode true    * this prop is used in parent component',
    },
  },
  image: null,
  preview_field: null,
  is_root: false,
  preview_tmpl: null,
  is_nestable: true,
  all_presets: [],
  preset_id: null,
  real_name: 'MuiMobileTab',
  component_group_uuid: null,
};
