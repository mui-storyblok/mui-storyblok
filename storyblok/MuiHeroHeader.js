module.exports = {
  name: 'MuiHeroHeader',
  display_name: null,
  updated_at: '2020-03-31T18:27:03.157Z',
  schema: {
    backgroundImageUrl: {
      type: 'text',
      pos: 0,
      required: true,
      description: 'url for background img',
    },
    alignContent: {
      type: 'option',
      pos: 1,
      use_uuid: true,
      options: [
        {
          value: 'stretch',
          name: 'stretch',
        },
        {
          value: 'center',
          name: 'center',
        },
        {
          value: 'flex-start',
          name: 'flex-start',
        },
        {
          value: 'flex-end',
          name: 'flex-end',
        },
        {
          value: 'space-between',
          name: 'space-between',
        },
        {
          value: 'space-around',
          name: 'space-around',
        },
      ],
      required: true,
      default_value: 'stretch',
      description: "   * mui prop: 'stretch'| 'center'| 'flex-start'| 'flex-end'| 'space-between'| 'space-around'    * Defines the align-content style property. It's applied for all screen sizes.",
    },
    alignItems: {
      type: 'option',
      use_uuid: true,
      options: [
        {
          value: 'flex-start',
          name: 'flex-start',
        },
        {
          value: 'center',
          name: 'center',
        },
        {
          value: 'flex-end',
          name: 'flex-end',
        },
        {
          value: 'stretch',
          name: 'stretch',
        },
        {
          value: 'baseline',
          name: 'baseline',
        },
      ],
      default_value: 'center',
      required: true,
      pos: 2,
      description: "   * mui prop: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline'    * Defines the align-items style property. It's applied for all screen sizes.",
    },
    rootClass: {
      type: 'options',
      options: [
        {
          value: 'background-color: black',
          name: 'backgroundColor',
        },
        {
          value: 'color: white',
          name: 'color',
        },
      ],
      pos: 3,
    },
    direction: {
      type: 'option',
      use_uuid: true,
      options: [
        {
          value: 'row',
          name: 'row',
        },
        {
          value: 'row-reverse',
          name: 'row-reverse',
        },
        {
          value: 'column',
          name: 'column',
        },
        {
          value: 'column-reverse',
          name: 'column-reverse',
        },
      ],
      default_value: 'row',
      required: true,
      description: "   * mui prop: 'stretch'| 'center'| 'flex-start'| 'flex-end'| 'space-between'| 'space-around'    * Defines the align-content style property. It's applied for all screen sizes.",
      pos: 4,
    },
    justify: {
      type: 'option',
      use_uuid: true,
      options: [
        {
          value: 'flex-start',
          name: 'flex-start',
        },
        {
          value: 'center',
          name: 'center',
        },
        {
          value: 'flex-end',
          name: 'flex-end',
        },
        {
          value: 'space-between',
          name: 'space-between',
        },
        {
          value: 'space-around',
          name: 'space-around',
        },
        {
          value: 'space-evenly',
          name: 'space-evenly',
        },
      ],
      default_value: 'center',
      required: true,
      pos: 5,
      description: "   * mui prop: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'    * Defines the justify-content style property. It is applied for all screen sizes.",
    },
    spacing: {
      type: 'option',
      use_uuid: true,
      options: [
        {
          value: '0',
          name: '0',
        },
        {
          value: '1',
          name: '1',
        },
        {
          value: '2',
          name: '2',
        },
        {
          value: '3',
          name: '3',
        },
        {
          value: '4',
          name: '4',
        },
        {
          value: '5',
          name: '5',
        },
        {
          value: '6',
          name: '6',
        },
        {
          value: '7',
          name: '7',
        },
        {
          value: '8',
          name: '8',
        },
        {
          value: '9',
          name: '9',
        },
        {
          value: '10',
          name: '10',
        },
      ],
      default_value: '2',
      required: true,
      pos: 6,
    },
    wrap: {
      type: 'option',
      use_uuid: true,
      options: [
        {
          value: 'nowrap',
          name: 'nowrap',
        },
        {
          value: 'wrap',
          name: 'wrap',
        },
        {
          value: 'wrap-reverse',
          name: 'wrap-reverse',
        },
      ],
      required: true,
      default_value: 'wrap',
      description: "Defines the flex-wrap style property. It's applied for all screen sizes.",
      pos: 7,
    },
    content: {
      type: 'bloks',
      maximum: '',
      restrict_components: true,
      component_whitelist: [
        'MuiGrid',
      ],
      pos: 8,
      required: true,
    },
    height: {
      type: 'text',
      required: true,
      default_value: '100%',
      pos: 9,
    },
  },
  image: null,
  preview_field: null,
  is_root: false,
  preview_tmpl: null,
  is_nestable: true,
  all_presets: [],
  preset_id: null,
  real_name: 'MuiHeroHeader',
  component_group_uuid: null,
};
