module.exports = {
  name: 'MuiCard',
  display_name: null,
  updated_at: '2020-03-31T18:27:08.357Z',
  schema: {
    rootClass: {
      type: 'options',
      pos: 0,
      min_options: '',
      max_options: '',
      options: [
        {
          value: 'box-shadow: 5px 10px',
          name: 'box-shadow: 5px 10px;',
        },
      ],
    },
    raised: {
      type: 'boolean',
      description: 'If true, the card will use raised styling.',
      pos: 1,
    },
    content: {
      type: 'bloks',
      restrict_components: true,
      component_whitelist: [
        'MuiCardMedia',
        'MuiCardHeader',
        'MuiCardContent',
        'MuiCardActions',
      ],
      pos: 2,
    },
  },
  image: null,
  preview_field: null,
  is_root: false,
  preview_tmpl: null,
  is_nestable: true,
  all_presets: [],
  preset_id: null,
  real_name: 'MuiCard',
  component_group_uuid: null,
};
