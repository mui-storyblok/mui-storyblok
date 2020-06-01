module.exports = {
  "name": "MuiListDropdown",
  "display_name": null,
  "updated_at": "2020-06-01T16:52:02.823Z",
  "schema": {
    "rootClass": {
      "type": "options",
      "description": "* storyblok multiselect of css classes\n* Override or extend the styles applied to the component"
    },
    "listExpansion": {
      "type": "bloks",
      "restrict_components": true,
      "component_whitelist": [
        "MuiListExpansion"
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
  "real_name": "MuiListDropdown",
  "component_group_uuid": null
}