module.exports = {
  "name": "MuiCircularProgress",
  "display_name": null,
  "updated_at": "2020-04-17T22:15:04.013Z",
  "schema": {
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
        },
        {
          "value": "inherit",
          "name": "inherit"
        }
      ],
      "default_value": "primary",
      "required": true,
      "description": "The color of the component. It supports those theme colors that make sense for this component."
    },
    "disableShrink": {
      "type": "boolean",
      "description": "If true, the shrink animation is disabled. This only works if variant is indeterminate."
    },
    "size": {
      "type": "number",
      "required": true,
      "description": "The size of the circle. If using a number, the pixel unit is assumed. If using a string, you need to provide the CSS unit, e.g '3rem'.",
      "display_name": "",
      "default_value": "40"
    },
    "thickness": {
      "type": "text",
      "description": "The thickness of the circle.",
      "default_value": "3.6",
      "required": true
    },
    "variant": {
      "type": "option",
      "use_uuid": true,
      "options": [
        {
          "value": "static",
          "name": "static"
        },
        {
          "value": "determinate",
          "name": "determinate"
        },
        {
          "value": "indeterminate",
          "name": "indeterminate"
        }
      ],
      "default_value": "indeterminate",
      "required": true
    },
    "rootClass": {
      "type": "options"
    }
  },
  "image": null,
  "preview_field": null,
  "is_root": false,
  "preview_tmpl": null,
  "is_nestable": true,
  "all_presets": [],
  "preset_id": null,
  "real_name": "MuiCircularProgress",
  "component_group_uuid": null
}