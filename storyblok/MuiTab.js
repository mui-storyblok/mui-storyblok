module.exports = {
  name: 'MuiTab',
  display_name: null,
  updated_at: '2020-05-28T00:17:08.685Z',
  schema: {
    label: {
      type: 'text',
      required: true,
      description: 'mui prop sting for tab lable',
    },
    rootClass: {
      type: 'options',
      options: [],
      min_options: '',
    },
    disableFocusRipple: {
      type: 'boolean',
      description: 'If true, the keyboard focus ripple will be disabled. disableRipple must also be true.',
    },
    disableRipple: {
      type: 'boolean',
      description: 'If true, the ripple effect will be disabled.',
    },
    icon: {
      type: 'bloks',
      required: false,
      maximum: '1',
      restrict_components: true,
      component_whitelist: [
        'MuiIcon',
      ],
    },
    wrapped: {
      type: 'boolean',
    },
    content: {
      type: 'bloks',
      restrict_components: true,
      component_whitelist: [
        'MuiGrid',
        'MuiIcon',
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
  real_name: 'MuiTab',
  component_group_uuid: null,
};
