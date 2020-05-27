module.exports = {
  name: 'MuiTabs',
  display_name: null,
  updated_at: '2020-05-22T16:05:57.086Z',
  schema: {
    rootClass: {
      type: 'options',
      description: 'Override or extend the styles applied to the component',
    },
    indicatorColor: {
      type: 'option',
      use_uuid: true,
      options: [
        {
          value: 'secondary',
          name: 'secondary',
        },
        {
          value: 'primary',
          name: 'primary',
        },
      ],
      required: true,
      description: 'secondary',
      default_value: 'secondary',
    },
    orientation: {
      type: 'option',
      required: true,
      use_uuid: true,
      options: [
        {
          value: 'horizontal',
          name: 'horizontal',
        },
        {
          value: 'vertical',
          name: 'vertical',
        },
      ],
      description: 'The tabs orientation (layout flow direction).',
      default_value: 'horizontal',
    },
    scrollButtons: {
      type: 'option',
      use_uuid: true,
      options: [
        {
          value: 'auto',
          name: 'auto',
        },
        {
          value: 'desktop',
          name: 'desktop',
        },
        {
          value: 'on',
          name: 'on',
        },
        {
          value: 'off',
          name: 'off',
        },
      ],
      required: true,
      description: 'Determine behavior of scroll buttons when tabs are set to scroll: - auto will only present them when not all the items are visible. - desktop will only present them on medium and larger viewports. - on will always present them. - off will never present them.',
      default_value: 'auto',
    },
    textColor: {
      type: 'option',
      use_uuid: true,
      options: [
        {
          value: 'secondary',
          name: 'secondary',
        },
        {
          value: 'primary',
          name: 'primary',
        },
        {
          value: 'inherit',
          name: 'inherit',
        },
      ],
      required: true,
      default_value: 'inherit',
      description: 'Determines the color of the Tab.',
    },
    variant: {
      type: 'option',
      use_uuid: true,
      options: [
        {
          value: 'standard',
          name: 'standard',
        },
        {
          value: 'scrollable',
          name: 'scrollable',
        },
        {
          value: 'fullWidth',
          name: 'fullWidth',
        },
      ],
      description: 'Determines additional display behavior of the tabs: - scrollable will invoke scrolling properties and allow for horizontally scrolling (or swiping) of the tab bar. -fullWidth will make the tabs grow to use all the available space, which should be used for small views, like on mobile. - standard will render the default state.',
      default_value: 'standard',
      required: true,
    },
    tabs: {
      type: 'bloks',
      restrict_components: true,
      component_whitelist: [
        'MuiGrid',
        'MuiIcon',
        'MuiTab',
      ],
      required: true,
    },
    autoplay: {
      type: 'boolean',
    },
    interval: {
      type: 'text',
      translatable: false,
      required: true,
      default_value: '3000',
    },
  },
  image: null,
  preview_field: null,
  is_root: false,
  preview_tmpl: null,
  is_nestable: true,
  all_presets: [],
  preset_id: null,
  real_name: 'MuiTabs',
  component_group_uuid: null,
};
