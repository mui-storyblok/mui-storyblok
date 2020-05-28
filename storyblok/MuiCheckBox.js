module.exports = {
  "name": "MuiCheckBox",
  "display_name": null,
  "updated_at": "2020-05-23T18:15:30.955Z",
  "schema": {
    "name": {
      "type": "text",
      "description": "   * The name of your field. Field values may be deeply nested using dot-and-bracket syntax.\n",
      "required": true
    },
    "label": {
      "type": "text",
      "required": true,
      "description": " * The label content.\n"
    },
    "color": {
      "type": "option",
      "description": " * The color of the component. It supports those theme colors that make sense for this component.\n * mui prop: 'default' | 'primary' | 'secondary'",
      "use_uuid": true,
      "options": [
        {
          "value": "default",
          "name": "default"
        },
        {
          "value": "primary",
          "name": "primary"
        },
        {
          "value": "secondary",
          "name": "secondary"
        }
      ],
      "required": true,
      "default_value": "default"
    },
    "disabled": {
      "type": "boolean",
      "description": " * If true, the checkbox will be disabled.\n"
    },
    "disableRipple": {
      "type": "boolean",
      "description": " * If true, the ripple effect will be disabled.\n"
    },
    "indeterminate": {
      "type": "boolean",
      "description": "   * If true, the component appears indeterminate.\n   * This does not set the native input element to indeterminate\n   * due to inconsistent behavior across browsers.\n   * However, we set a data-indeterminate attribute on the input."
    },
    "size": {
      "type": "option",
      "use_uuid": true,
      "options": [
        {
          "value": "medium",
          "name": "medium"
        },
        {
          "value": "small",
          "name": "small"
        },
        {
          "value": "",
          "name": ""
        }
      ],
      "default_value": "medium",
      "description": "     * The size of the checkbox. small is equivalent to the dense checkbox styling.\n     * mui prop: 'medium'| 'small'"
    }
  },
  "image": null,
  "preview_field": null,
  "is_root": false,
  "preview_tmpl": null,
  "is_nestable": true,
  "all_presets": [],
  "preset_id": null,
  "real_name": "MuiCheckBox",
  "component_group_uuid": null
}