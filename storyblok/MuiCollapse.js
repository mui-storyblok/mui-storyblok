module.exports = {
  name: 'MuiCollapse',
  display_name: null,
  updated_at: '2020-05-13T01:27:06.730Z',
  schema: {
    rootClass: {
      type: 'options',
      description: '* stroyblok multiselect of css classes\n* Mui Override or extend the styles applied to the component.',
    },
    collapsedHeight: {
      type: 'text',
      description: '* mui props: number | string\n* The height of the container when collapsed.',
      default_value: '0px',
    },
    content: {
      type: 'bloks',
      maximum: '',
      restrict_components: true,
      component_whitelist: [
        'Blok',
      ],
      required: true,
      description: '',
    },
    transitionIn: {
      type: 'number',
      description: 'Number of milliseconds for component to transition in.',
      default_value: '300',
    },
    enter: {
      type: 'number',
      description: '* Duration in milliseconds to enter the screen.\n* Set to 0 to automatically calculate transition time based on height.',
      display_name: '',
      default_value: '1500',
    },
  },
  image: null,
  preview_field: null,
  is_root: false,
  preview_tmpl: null,
  is_nestable: true,
  all_presets: [],
  preset_id: null,
  real_name: 'MuiCollapse',
  component_group_uuid: null,
};
