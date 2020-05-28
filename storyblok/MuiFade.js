module.exports = {
  "name": "MuiFade",
  "display_name": null,
  "updated_at": "2020-05-13T01:35:51.733Z",
  "schema": {
    "rootClass": {
      "type": "options",
      "description": "* stroyblok multiselect of css classes\n* Mui Override or extend the styles applied to the component."
    },
    "content": {
      "type": "bloks",
      "default_value": "",
      "restrict_components": true,
      "component_whitelist": [
        "Blok"
      ],
      "maximum": "1",
      "required": true,
      "description": ""
    },
    "fadeIn": {
      "type": "number",
      "description": "Number of milliseconds for component to transition in.",
      "default_value": "300"
    },
    "enter": {
      "type": "number",
      "description": "Number of milliseconds for component transition to effect on screen.",
      "display_name": "",
      "default_value": "1500"
    },
    "exit": {
      "type": "number",
      "description": "Number of milliseconds for component transition to effect off screen.",
      "display_name": "",
      "default_value": "1500"
    }
  },
  "image": null,
  "preview_field": null,
  "is_root": false,
  "preview_tmpl": null,
  "is_nestable": true,
  "all_presets": [],
  "preset_id": null,
  "real_name": "MuiFade",
  "component_group_uuid": null
}