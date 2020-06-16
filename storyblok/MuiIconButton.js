module.exports = {
  "name": "MuiIconButton",
  "display_name": null,
  "updated_at": "2020-05-06T14:54:02.937Z",
  "schema": {
    "rootClass": {
      "type": "options"
    },
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
      "default_value": "default",
      "description": "The color of the component. It supports those theme colors that make sense for this component."
    },
    "disableFocusRipple": {
      "type": "boolean",
      "description": "If true, the keyboard focus ripple will be disabled. disableRipple must also be true."
    },
    "disableRipple": {
      "type": "boolean",
      "description": "If true, the ripple effect will be disabled."
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
      ],
      "default_value": "false",
      "description": "If given, uses a negative margin to counteract the padding on one side (this is often helpful for aligning the left or right side of the icon with content above or below, without ruining the border size and shape)."
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
      ],
      "default_value": "medium"
    },
    "icon": {
      "type": "bloks",
      "required": true,
      "maximum": "1",
      "restrict_components": true,
      "component_whitelist": [
        "MuiIcon"
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
  "real_name": "MuiIconButton",
  "component_group_uuid": null
}