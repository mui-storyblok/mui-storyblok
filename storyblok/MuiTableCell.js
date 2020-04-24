module.exports = {
  name: 'MuiTableCell',
  display_name: null,
  updated_at: '2020-04-20T17:46:56.399Z',
  schema: {
    content: {
      type: 'bloks',
      restrict_components: true,
      component_whitelist: [
        'MuiTypography',
      ],
      maximum: '1',
      required: true,
    },
    rootClass: {
      type: 'options',
    },
    align: {
      type: 'option',
      use_uuid: true,
      description: "   * mui prop: 'center' | 'inherit' | 'justify' | 'left' | 'right'\n   * Set the text-align on the table cell content",
      options: [
        {
          value: 'center',
          name: 'center',
        },
        {
          value: 'inherit',
          name: 'inherit',
        },
        {
          value: 'justify',
          name: 'justify',
        },
        {
          value: 'left',
          name: 'left',
        },
        {
          value: 'right',
          name: 'right',
        },
      ],
      default_value: 'center',
    },
    padding: {
      type: 'option',
      use_uuid: true,
      options: [
        {
          value: 'checkbox',
          name: 'checkbox',
        },
        {
          value: 'default',
          name: 'default',
        },
        {
          value: 'none',
          name: 'none',
        },
      ],
      description: "   * mui prop: 'checkbox' | 'default' | 'none'\n   * Sets the padding applied to the cell.",
      default_value: 'default',
      required: true,
    },
    size: {
      type: 'option',
      default_value: 'medium',
      description: "   * mui prop: 'small' | 'medium'\n   * Specify the size of the cell",
      use_uuid: true,
      options: [
        {
          value: 'small',
          name: 'small',
        },
        {
          value: 'medium',
          name: 'medium',
        },
      ],
      required: true,
    },
    sortDirection: {
      type: 'option',
      description: "   * mui prop: 'asc' | 'desc' | false\n   * Set aria-sort direction.",
      default_value: 'asc',
      required: true,
      use_uuid: true,
      options: [
        {
          value: 'asc',
          name: 'asc',
        },
        {
          value: 'desc',
          name: 'desc',
        },
        {
          value: 'false',
          name: 'false',
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
  real_name: 'MuiTableCell',
  component_group_uuid: null,
};
