module.exports = {
  "name": "MuiInput",
  "display_name": null,
  "updated_at": "2020-05-28T17:15:49.172Z",
  "schema": {
    "name": {
      "type": "text",
      "required": true,
      "description": "   * The name of your field. Field values may be deeply nested using dot-and-bracket syntax.\n"
    },
    "label": {
      "type": "text",
      "required": true,
      "description": " * The label content.\n"
    },
    "type": {
      "type": "option",
      "use_uuid": true,
      "options": [
        {
          "value": "text",
          "name": "text"
        },
        {
          "value": "number",
          "name": "number"
        },
        {
          "value": "date",
          "name": "date"
        }
      ],
      "default_value": "text",
      "required": true
    },
    "autoFocus": {
      "type": "boolean",
      "description": " * If true, the input element will be focused during the first mount.\n"
    },
    "color": {
      "type": "option",
      "use_uuid": true,
      "options": [
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
      "description": " * The color of the component. It supports those theme colors that make sense for this component.\n * mui prop: 'primary' | 'secondary'",
      "default_value": "primary"
    },
    "disabled": {
      "type": "boolean",
      "description": " * If true, the input element will be disabled.\n"
    },
    "fullWidth": {
      "type": "boolean",
      "description": " * If true, the input will take up the full width of its container.\n"
    },
    "helperText": {
      "type": "text",
      "description": " * The helper text content.\n"
    },
    "margin": {
      "type": "option",
      "default_value": "normal",
      "description": " *  If dense or normal, will adjust vertical spacing of this and contained components.\n * ex 'dense' | 'none' | 'normal'",
      "use_uuid": true,
      "options": [
        {
          "value": "dense",
          "name": "dense"
        },
        {
          "value": "none",
          "name": "none"
        },
        {
          "value": "normal",
          "name": "normal"
        }
      ],
      "required": true
    },
    "multiline": {
      "type": "boolean",
      "description": " * If true, a textarea element will be rendered instead of an input.\n"
    },
    "placeholder": {
      "type": "text",
      "description": " * The short hint displayed in the input before the user enters a value.\n"
    },
    "rows": {
      "type": "number",
      "description": " * Number of rows to display when multiline option is set to true.\n"
    },
    "rowsMax": {
      "type": "number",
      "description": " * Maximum number of rows to display when multiline option is set to true.\n"
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
        }
      ],
      "description": " * The size of the text field.\n * ex: 'medium'| 'small'",
      "required": true,
      "default_value": "medium"
    },
    "variant": {
      "type": "option",
      "description": " * The variant to use\n * mui prop: 'filled'| 'outlined'| 'standard'",
      "use_uuid": true,
      "options": [
        {
          "value": "filled",
          "name": "filled"
        },
        {
          "value": "outlined",
          "name": "outlined"
        },
        {
          "value": "standard",
          "name": "standard"
        }
      ],
      "required": true,
      "default_value": "standard"
    }
  },
  "image": null,
  "preview_field": null,
  "is_root": false,
  "preview_tmpl": null,
  "is_nestable": true,
  "all_presets": [],
  "preset_id": null,
  "real_name": "MuiInput",
  "component_group_uuid": null
}