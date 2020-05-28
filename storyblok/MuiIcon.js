module.exports = {
  "name": "MuiIcon",
  "display_name": null,
  "updated_at": "2020-03-31T18:27:02.209Z",
  "schema": {
    "iconName": {
      "type": "text",
      "required": true,
      "description": "any icon from https://material.io/resources/icons/?style=baseline"
    },
    "color": {
      "type": "option",
      "use_uuid": true,
      "options": [
        {
          "value": "inherit",
          "name": "inherit"
        },
        {
          "value": "primary",
          "name": "primary"
        },
        {
          "value": "secondary",
          "name": "secondary"
        },
        {
          "value": "action",
          "name": "action"
        },
        {
          "value": "error",
          "name": "error"
        },
        {
          "value": "disabled",
          "name": "disabled"
        }
      ],
      "default_value": "secondary",
      "required": true
    },
    "fontSize": {
      "type": "option",
      "use_uuid": true,
      "options": [
        {
          "value": "default",
          "name": "default"
        },
        {
          "value": "small",
          "name": "small"
        },
        {
          "value": "inherit",
          "name": "inherit"
        },
        {
          "value": "large",
          "name": "large"
        }
      ],
      "default_value": "default"
    },
    "rootClass": {
      "type": "options",
      "min_options": "",
      "options": [
        {
          "value": "color: white",
          "name": "color white"
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
  "real_name": "MuiIcon",
  "component_group_uuid": null
}