module.exports = {
  name: 'MuiBottomNavigation',
  display_name: null,
  updated_at: '2020-05-04T16:03:34.135Z',
  schema: {
    rootClass: {
      type: 'options',
      description: '* storyblok multiselect of css classes\n* Mui Override or extend the styles applied to the component.',
    },
    showLabels: {
      type: 'boolean',
      description: '* mui prop: boolean\n* If true, all BottomNavigationActions will show their labels.\n* By default, only the selected BottomNavigationAction will show its label.',
    },
    navActions: {
      type: 'bloks',
      restrict_components: true,
      component_whitelist: [
        'MuiBottomNavigationAction',
      ],
    },
    width: {
      type: 'number',
      description: 'Width of the bottom navigation bar',
      default_value: '500',
    },
  },
  image: null,
  preview_field: null,
  is_root: false,
  preview_tmpl: null,
  is_nestable: true,
  all_presets: [],
  preset_id: null,
  real_name: 'MuiBottomNavigation',
  component_group_uuid: null,
};
