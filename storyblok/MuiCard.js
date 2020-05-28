module.exports = {
  name: 'MuiCard',
  display_name: null,
  updated_at: '2020-05-28T19:35:55.138Z',
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
          value: 'max-width: 500',
          name: 'maxWidth',
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
        'MuiVideo',
      ],
      pos: 2,
    },
    height: {
      type: 'text',
      default_value: '100%',
      description: 'Height of the card',
    },
    width: {
      type: 'text',
      description: 'Width of card',
      default_value: '100%',
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
