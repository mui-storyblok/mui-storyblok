module.exports = {
  "name": "MuiMenu",
  "display_name": null,
  "updated_at": "2020-06-04T17:47:56.031Z",
  "schema": {
    "btnText": {
      "type": "text"
    },
    "content": {
      "type": "bloks",
      "restrict_components": true,
      "component_whitelist": [
        "MuiMenuItem"
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
        },
        {
          "value": "large",
          "name": "large"
        }
      ],
      "description": "The size of the button. small is equivalent to the dense button styling.",
      "default_value": "medium"
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
        },
        {
          "value": "transparent",
          "name": "transparent"
        }
      ],
      "default_value": "default",
      "description": "The color of the component. It supports those theme colors that make sense for this component."
    },
    "rootClass": {
      "type": "options",
      "translatable": false,
      "options": [
        {
          "value": "color: white",
          "name": "color white"
        }
      ],
      "min_options": ""
    }
  },
  "image": null,
  "preview_field": null,
  "is_root": false,
  "preview_tmpl": null,
  "is_nestable": true,
  "all_presets": [],
  "preset_id": null,
  "real_name": "MuiMenu",
  "component_group_uuid": null
}