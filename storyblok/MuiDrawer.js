module.exports = {
  "name": "MuiDrawer",
  "display_name": null,
  "updated_at": "2020-05-06T14:53:58.232Z",
  "schema": {
    "anchor": {
      "type": "option",
      "options": [
        {
          "value": "bottom",
          "name": "bottom"
        },
        {
          "value": "left",
          "name": "left"
        },
        {
          "value": "right",
          "name": "right"
        },
        {
          "value": "top",
          "name": "top"
        }
      ],
      "required": true,
      "description": "* mui props: 'bottom' | 'left' | 'right' | 'top'\n* Side from which the drawer will appear.",
      "display_name": "",
      "default_value": "left",
      "use_uuid": true
    },
    "elevation": {
      "type": "number",
      "description": "The elevation of the drawer.",
      "display_name": "",
      "default_value": "16"
    },
    "variant": {
      "type": "option",
      "use_uuid": true,
      "options": [
        {
          "value": "permanent",
          "name": "permanenet"
        },
        {
          "value": "persistent",
          "name": "persistent"
        },
        {
          "value": "temporary",
          "name": "temporary"
        }
      ],
      "description": "The variant to use.",
      "default_value": "temporary"
    },
    "buttonProps": {
      "type": "bloks",
      "restrict_components": true,
      "component_whitelist": [
        "MuiButton"
      ],
      "required": true
    },
    "content": {
      "type": "bloks",
      "restrict_components": true,
      "component_whitelist": [
        "MuiList"
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
  "real_name": "MuiDrawer",
  "component_group_uuid": null
}