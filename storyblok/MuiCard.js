module.exports = {
  name: 'MuiCard',
  display_name: null,
  updated_at: '2020-05-14T16:18:27.026Z',
  schema: {
    rootClass: {
      type: 'options',
      pos: 0,
      min_options: '',
      max_options: '',
      options: [
        {
          value: 'box-shadow: 5px 10px #FFF',
          name: 'box-shadow: 5px 10px;',
        },
        {
          value: 'background-color: #000',
          name: 'background-color black',
        },
        {
          value: 'color: #000',
          name: 'color-black',
        },
        {
          value: 'border-style: solid',
          name: 'border',
        },
        {
          value: '',
          name: '',
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
