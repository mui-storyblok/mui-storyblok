module.exports = {
  "name": "MuiDownloadIconButton",
  "display_name": null,
  "updated_at": "2020-05-06T14:53:57.804Z",
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
      "required": true,
      "default_value": "default"
    },
    "disableFocusRipple": {
      "type": "boolean"
    },
    "disableRipple": {
      "type": "boolean"
    },
    "edge": {
      "type": "option",
      "use_uuid": true,
      "options": [
        {
          "value": "start",
          "name": "start"
        },
        {
          "value": "end",
          "name": "end"
        },
        {
          "value": "false",
          "name": "false"
        }
      ]
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
        }
      ]
    },
    "content": {
      "type": "bloks",
      "maximum": "1",
      "restrict_components": true,
      "component_whitelist": [
        "MuiIcon"
      ],
      "required": true
    }
  },
  "image": null,
  "preview_field": null,
  "is_root": false,
  "preview_tmpl": null,
  "is_nestable": true,
  "all_presets": [],
  "preset_id": null,
  "real_name": "MuiDownloadIconButton",
  "component_group_uuid": null
}