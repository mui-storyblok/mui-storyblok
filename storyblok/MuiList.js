module.exports = {
  "name": "MuiList",
  "display_name": null,
  "updated_at": "2020-05-06T14:54:06.346Z",
  "schema": {
    "rootClass": {
      "type": "options",
      "options": [
        {
          "value": "padding-right: 100px",
          "name": "paddingRight"
        }
      ]
    },
    "disablePadding": {
      "type": "boolean"
    },
    "dense": {
      "type": "boolean"
    },
    "content": {
      "type": "bloks",
      "restrict_components": true,
      "component_whitelist": [
        "MuiListItem"
      ],
      "required": true
    },
    "width": {
      "type": "text",
      "required": true,
      "description": "* width of list",
      "default_value": "100%"
    }
  },
  "image": null,
  "preview_field": null,
  "is_root": false,
  "preview_tmpl": null,
  "is_nestable": true,
  "all_presets": [],
  "preset_id": null,
  "real_name": "MuiList",
  "component_group_uuid": null
}