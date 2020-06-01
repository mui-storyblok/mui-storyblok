module.exports = {
  "name": "MuiListExpansion",
  "display_name": null,
  "updated_at": "2020-06-01T16:56:21.545Z",
  "schema": {
    "rootClass": {
      "type": "options",
      "description": "* storyblok multiselect of css classes\n* Override or extend the styles applied to the component"
    },
    "icon": {
      "type": "bloks",
      "restrict_components": true,
      "maximum": "1",
      "required": true,
      "component_whitelist": [
        "MuiListItemIcon"
      ]
    },
    "primaryText": {
      "type": "text",
      "description": "* Text of the List item dropdown",
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
  "real_name": "MuiListExpansion",
  "component_group_uuid": null
}