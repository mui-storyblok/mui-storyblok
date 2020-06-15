module.exports = {
  "name": "MuiSelect",
  "display_name": null,
  "updated_at": "2020-05-28T17:15:54.918Z",
  "schema": {
    "name": {
      "type": "text",
      "required": true,
      "description": "The name of your field. no spaces in the name ",
      "default_value": ""
    },
    "label": {
      "type": "text",
      "required": true,
      "description": "lable for the input field"
    },
    "autoFocus": {
      "type": "boolean"
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
      "description": " * If true, the input element will be disabled."
    },
    "fullWidth": {
      "type": "boolean",
      "description": " * If true, the input will take up the full width of its container.\n"
    },
    "helperText": {
      "type": "text",
      "default_value": "",
      "description": " * The helper text content."
    },
    "margin": {
      "type": "option",
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
      "default_value": "normal",
      "description": " *  If dense or normal, will adjust vertical spacing of this and contained components.\n * ex 'dense' | 'none' | 'normal'",
      "required": true
    },
    "placeholder": {
      "type": "text",
      "description": " * The short hint displayed in the input before the user enters a value.\n"
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
      "required": true,
      "default_value": "medium"
    },
    "variant": {
      "type": "option",
      "use_uuid": true,
      "options": [
        {
          "value": "filled",
          "name": "filled"
        },
        {
          "value": "standard",
          "name": "standard"
        },
        {
          "value": "outlined",
          "name": "outlined"
        }
      ],
      "required": true,
      "default_value": "standard"
    },
    "options": {
      "type": "options",
      "required": true,
      "options": [
        {
          "value": "one",
          "name": "one"
        },
        {
          "value": "two",
          "name": "two"
        }
      ]
    }
  },
  "image": null,
  "preview_field": null,
  "is_root": false,
  "preview_tmpl": null,
  "is_nestable": true,
  "all_presets": [],
  "preset_id": null,
  "real_name": "MuiSelect",
  "component_group_uuid": null
}