module.exports = {
  "name": "MuiRadio",
  "display_name": null,
  "updated_at": "2020-06-01T20:26:17.706Z",
  "schema": {
    "name": {
      "type": "text",
      "required": true,
      "description": "   * Name attribute of the input element.\n"
    },
    "color": {
      "type": "option",
      "use_uuid": true,
      "description": "   * Mui Props: 'default' | 'primary' | 'secondary'\n   * The color of the component. It supports those theme colors that make sense for this component.\n   */",
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
      "default_value": "secondary"
    },
    "disabled": {
      "type": "boolean",
      "description": "   * If true, the radio will be disabled.\n"
    },
    "disableRipple": {
      "type": "boolean",
      "description": "   * If true, the ripple effect will be disabled.\n"
    },
    "size": {
      "type": "option",
      "use_uuid": true,
      "description": "   * Mui Props: 'small' | 'medium'\n   * The size of the radio. small is equivalent to the dense radio styling.",
      "options": [
        {
          "value": "small",
          "name": "small"
        },
        {
          "value": "medium",
          "name": "medium"
        }
      ],
      "required": true,
      "default_value": "medium"
    },
    "value": {
      "type": "text",
      "required": true,
      "description": "   * The value of the component. The DOM API casts this to a string.\n"
    },
    "label": {
      "type": "text",
      "required": true,
      "description": "  /** The label content.\n"
    }
  },
  "image": null,
  "preview_field": null,
  "is_root": false,
  "preview_tmpl": null,
  "is_nestable": true,
  "all_presets": [],
  "preset_id": null,
  "real_name": "MuiRadio",
  "component_group_uuid": null
}