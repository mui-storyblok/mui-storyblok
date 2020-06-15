module.exports = {
  "name": "MuiTableRow",
  "display_name": null,
  "updated_at": "2020-05-06T14:54:16.580Z",
  "schema": {
    "rootClass": {
      "type": "options",
      "description": "stroyblok multiselect of css classes\n* Mui Override or extend the styles applied to the component.",
      "options": [
        {
          "value": "font-weight: bolder",
          "name": "font-weight"
        },
        {
          "value": "",
          "name": ""
        }
      ]
    },
    "hover": {
      "type": "boolean",
      "description": "  * mui prop: true | false\n   * If true, the table row will shade on hover."
    },
    "selected": {
      "type": "boolean",
      "description": "   * mui prop: true | false\n   * If true, the table row will have the selected shading.\n"
    },
    "content": {
      "type": "bloks",
      "restrict_components": true,
      "component_whitelist": [
        "MuiTableCell"
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
  "real_name": "MuiTableRow",
  "component_group_uuid": null
}