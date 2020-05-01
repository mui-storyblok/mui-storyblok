module.exports = {
  name: 'MuiAppBar',
  display_name: null,
  updated_at: '2020-04-27T15:56:53.446Z',
  schema: {
    rootClass: {
      type: 'options',
      use_uuid: true,
      description: 'Override or extend the styles applied to the component.',
    },
    color: {
      type: 'option',
      use_uuid: true,
      options: [
        {
          value: 'default',
          name: 'default',
        },
        {
          value: 'inherit',
          name: 'inherit',
        },
        {
          value: 'primary',
          name: 'primary',
        },
        {
          value: 'secondary',
          name: 'secondary',
        },
        {
          value: 'transparent',
          name: 'transparent',
        },
      ],
      required: true,
      default_value: 'primary',
      description: 'AppBar: The color of the component. It supports those theme colors that make sense for this component.',
    },
    position: {
      type: 'option',
      use_uuid: true,
      options: [
        {
          value: 'absolute',
          name: 'absolute',
        },
        {
          value: 'fixed',
          name: 'fixed',
        },
        {
          value: 'relative',
          name: 'relative',
        },
        {
          value: 'static',
          name: 'static',
        },
        {
          value: 'sticky',
          name: 'sticky',
        },
      ],
      default_value: 'fixed',
      required: true,
      description: 'AppBar: The positioning type. The behavior of the different options is described in the MDN web docs.    * Note: sticky is not universally supported and will fall back to static when unavailable.',
    },
    variant: {
      type: 'option',
      use_uuid: true,
      options: [
        {
          value: 'regular',
          name: 'regular',
        },
        {
          value: 'dense',
          name: 'dense',
        },
      ],
      required: true,
      default_value: 'regular',
      description: 'ToolBar: The variant to use.',
    },
    disableGutters: {
      type: 'boolean',
      description: 'Toolbar: If true, disables gutter padding.',
    },
    content: {
      type: 'bloks',
      restrict_components: true,
      component_whitelist: [
        'MuiButtonRedirect',
        'MuiButtonHref',
        'MuiIconButtonRedirect',
        'MuiIconButtonHref',
        'MuiMenu',
        'MuiButtonDrawer',
        'MuiIconButton',
        'MuiIconButtonDrawer',
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
  real_name: 'MuiAppBar',
  component_group_uuid: null,
};
