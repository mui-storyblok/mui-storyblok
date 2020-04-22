module.exports = {
  "name": "MuiButtonDownload",
  "display_name": null,
  "updated_at": "2020-03-31T18:27:04.416Z",
  "schema": {
    "fileName": {
      "type": "text",
      "required": true
    },
    "button": {
      "type": "bloks",
      "maximum": "1",
      "restrict_components": true,
      "component_whitelist": [
        "MuiButton"
      ],
      "required": true
    },
    "href": {
      "type": "text",
      "required": true,
      "description": "url of the file you want to be downloaded"
    }
  },
  "image": null,
  "preview_field": null,
  "is_root": false,
  "preview_tmpl": null,
  "is_nestable": true,
  "all_presets": [],
  "preset_id": null,
  "real_name": "MuiButtonDownload",
  "component_group_uuid": null
}