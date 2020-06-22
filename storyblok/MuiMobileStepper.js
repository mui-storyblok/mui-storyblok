module.exports = {
  "name": "MuiMobileStepper",
  "display_name": null,
  "updated_at": "2020-06-01T22:38:12.963Z",
  "schema": {
    "rootClass": {
      "type": "options",
      "description": "Override or extend the styles applied to the component",
      "options": []
    },
    "position": {
      "type": "option",
      "use_uuid": true,
      "options": [
        {
          "value": "bottom",
          "name": "bottom"
        },
        {
          "value": "static",
          "name": "static"
        },
        {
          "value": "top",
          "name": "top"
        }
      ],
      "description": "Set the positioning type.",
      "default_value": "static",
      "required": true
    },
    "variant": {
      "type": "option",
      "use_uuid": true,
      "options": [
        {
          "value": "dots",
          "name": "dots"
        },
        {
          "value": "progress",
          "name": "progress"
        },
        {
          "value": "text",
          "name": "text"
        }
      ],
      "description": "Set the variant type.",
      "display_name": "",
      "default_value": "dots",
      "required": true
    },
    "autoplay": {
      "type": "boolean"
    },
    "interval": {
      "type": "text",
      "required": true,
      "default_value": "3000"
    },
    "tabs": {
      "type": "bloks",
      "restrict_components": true,
      "component_whitelist": [
        "MuiMobileTab"
      ],
      "required": true
    },
    "nextBtn": {
      "type": "bloks",
      "restrict_components": true,
      "component_whitelist": [
        "MuiButton",
        "MuiIconButton"
      ],
      "required": true,
      "maximum": "1"
    },
    "backBtn": {
      "type": "bloks",
      "maximum": "1",
      "restrict_components": true,
      "component_whitelist": [
        "MuiButton",
        "MuiIconButton"
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
  "real_name": "MuiMobileStepper",
  "component_group_uuid": null
}