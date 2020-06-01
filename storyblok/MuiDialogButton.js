module.exports = {
  "name": "MuiDialogButton",
  "display_name": null,
  "updated_at": "2020-03-31T18:27:06.185Z",
  "schema": {
    "color": {
      "type": "option",
      "use_uuid": true,
      "options": [
        {
          "value": "default",
          "name": "default"
        },
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
        }
      ],
      "default_value": "secondary"
    },
    "size": {
      "type": "option",
      "use_uuid": true,
      "options": [
        {
          "value": "small",
          "name": "small"
        },
        {
          "value": "medium",
          "name": "medium"
        },
        {
          "value": "large",
          "name": "large"
        }
      ],
      "default_value": "medium"
    },
    "variant": {
      "type": "option",
      "use_uuid": true,
      "options": [
        {
          "value": "text",
          "name": "text"
        },
        {
          "value": "outlined",
          "name": "outlined"
        },
        {
          "value": "contained",
          "name": "contained"
        }
      ],
      "default_value": "text"
    },
    "startIcon": {
      "type": "text",
      "default_value": "",
      "description": "https://material.io/resources/icons/?icon=backup&style=baseline"
    },
    "endIcon": {
      "type": "text",
      "default_value": "",
      "description": "https://material.io/resources/icons/?icon=backup&style=baseline"
    },
    "buttonText": {
      "type": "text",
      "required": true
    },
    "btnRootClass": {
      "type": "options"
    },
    "dialogRootClass": {
      "type": "options",
      "options": [
        {
          "value": "color: blue",
          "name": "color: blue"
        }
      ]
    },
    "dialogContent": {
      "type": "bloks",
      "restrict_components": true,
      "maximum": "1",
      "component_whitelist": [
        "MuiDialogContent"
      ],
      "required": true
    },
    "dialogTitle": {
      "type": "bloks",
      "restrict_components": true,
      "maximum": "1",
      "component_whitelist": [
        "MuiDialogTitle"
      ],
      "required": true
    },
    "dialogActions": {
      "type": "bloks",
      "maximum": "1",
      "restrict_components": true,
      "component_whitelist": [
        "MuiDialogActions"
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
  "real_name": "MuiDialogButton",
  "component_group_uuid": null
}