module.exports = {
  name: 'MuiButtonDrawer',
  display_name: null,
  updated_at: '2020-04-24T22:08:33.421Z',
  schema: {
    button: {
      type: 'bloks',
      restrict_components: true,
      component_whitelist: [
        'MuiButton',
      ],
      required: true,
      maximum: '1',
    },
    anchor: {
      type: 'option',
      use_uuid: true,
      options: [
        {
          value: 'left',
          name: 'left',
        },
        {
          value: 'top',
          name: 'top',
        },
        {
          value: 'bottom',
          name: 'bottom',
        },
        {
          value: 'right',
          name: 'right',
        },
      ],
      required: true,
      description: "* mui props: 'bottom' | 'left' | 'right' | 'top'\n* Side from which the drawer will appear.",
      default_value: 'left',
    },
    elevation: {
      type: 'number',
      description: '* number\n* The elevation of the drawer.',
      default_value: '16',
    },
    variant: {
      type: 'option',
      use_uuid: true,
      options: [
        {
          value: 'permanent',
          name: 'permanent',
        },
        {
          value: 'persistent',
          name: 'persistent',
        },
        {
          value: 'temporary',
          name: 'temporary',
        },
      ],
      description: "* mui props: 'permanent' | 'persistent' | 'temporary'\n* The variant to use.",
      default_value: 'temporary',
    },
    content: {
      type: 'bloks',
      restrict_components: true,
      component_whitelist: [
        'MuiList',
      ],
      required: true,
    },
    rootClass: {
      type: 'options',
      options: [
        {
          value: 'padding-right: 100px;',
          name: 'paddingRight',
        },
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
  real_name: 'MuiButtonDrawer',
  component_group_uuid: null,
};
