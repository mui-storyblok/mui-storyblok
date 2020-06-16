module.exports = {
  "name": "MuiDialog",
  "display_name": null,
  "updated_at": "2020-05-06T14:53:55.567Z",
  "schema": {
    "rootClass": {
      "type": "options"
    },
    "dialogTitle": {
      "type": "bloks",
      "required": true,
      "restrict_components": true,
      "component_whitelist": [
        "MuiDialogTitle"
      ],
      "maximum": "1"
    },
    "content": {
      "type": "bloks",
      "restrict_components": true,
      "component_whitelist": [
        "MuiDialogContent",
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
  "real_name": "MuiDialog",
  "component_group_uuid": null
}