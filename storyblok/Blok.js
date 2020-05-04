module.exports = {
  name: 'Blok',
  display_name: null,
  updated_at: '2020-05-01T19:50:15.318Z',
  schema: {
    only: {
      type: 'options',
      options: [
        {
          value: 'xs',
          name: 'xs',
        },
        {
          value: 'sm',
          name: 'sm',
        },
        {
          value: 'md',
          name: 'md',
        },
        {
          value: 'lg',
          name: 'lg',
        },
        {
          value: 'xl',
          name: 'xl',
        },
      ],
      default_value: ' xs sm md  lg xl',
    },
    content: {
      type: 'bloks',
      maximum: '',
      restrict_components: true,
      component_whitelist: [
        'MuiGrid',
        'MuiHeroHeader',
        'MuiAppBar',
        'MuiBottomNavigation',
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
  real_name: 'Blok',
  component_group_uuid: null,
};
