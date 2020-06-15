module.exports = {
  "name": "MuiZoom",
  "display_name": null,
  "updated_at": "2020-05-18T22:45:59.737Z",
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
      "required": true,
      "maximum": "1"
    },
    "zoomIn": {
      "type": "number",
      "max_length": "",
      "description": "* mui props: number\n* Number of milliseconds for component to transition in.",
      "default_value": "300"
    },
    "enter": {
      "type": "number",
      "description": "* mui props: number\n* Number of milliseconds for component to effect on screen.",
      "display_name": "",
      "default_value": "1000"
    },
    "exit": {
      "type": "number",
      "description": "* mui props: number\n* Number of milliseconds for component to effect off screen.",
      "default_value": "1000"
    }
  },
  "image": null,
  "preview_field": null,
  "is_root": false,
  "preview_tmpl": null,
  "is_nestable": true,
  "all_presets": [],
  "preset_id": null,
  "real_name": "MuiZoom",
  "component_group_uuid": null
}