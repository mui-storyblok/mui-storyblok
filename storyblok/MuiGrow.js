module.exports = {
  "name": "MuiGrow",
  "display_name": null,
  "updated_at": "2020-05-15T20:45:19.327Z",
  "schema": {
    "rootClass": {
      "type": "options",
      "description": "* stroyblok multiselect of css classes\n* Mui Override or extend the styles applied to the component."
    },
    "content": {
      "type": "bloks",
      "restrict_components": true,
      "component_whitelist": [
        "Blok"
      ],
      "maximum": "1",
      "required": true
    },
    "growIn": {
      "type": "number",
      "description": "Number of milliseconds for component to transition in.",
      "default_value": "300"
    },
    "enter": {
      "type": "number",
      "description": "Duration in milliseconds to enter the screen.",
      "default_value": "1500"
    },
    "exit": {
      "type": "number",
      "description": "Duration in milliseconds to leave the screen.",
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
  "real_name": "MuiGrow",
  "component_group_uuid": null
}