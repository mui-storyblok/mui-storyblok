module.exports = {
  "name": "MuiPaginationTableRow",
  "display_name": null,
  "updated_at": "2020-04-22T14:03:39.670Z",
  "schema": {
    "rootClass": {
      "type": "options",
      "description": "* stroyblok multiselect of css classes\n* Mui Override or extend the styles applied to the component.",
      "min_options": "",
      "options": []
    },
    "hover": {
      "type": "boolean",
      "description": "* mui prop: true | false\n* If true, the table row will shade on hover."
    },
    "selected": {
      "type": "boolean",
      "description": "* mui prop: true | false\n* If true, the table row will have the selected shading."
    },
    "content": {
      "type": "bloks",
      "restrict_components": true,
      "component_whitelist": [
        "MuiTableCell"
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
  "real_name": "MuiPaginationTableRow",
  "component_group_uuid": null
}