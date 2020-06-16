module.exports = {
  "name": "MuiBottomNavigationAction",
  "display_name": null,
  "updated_at": "2020-05-06T14:53:48.840Z",
  "schema": {
    "rootClass": {
      "type": "options",
      "description": "* storyblok multiselect of css classes\n* Mui Override or extend the styles applied to the component."
    },
    "label": {
      "type": "text",
      "description": "* mui prop: any\n* The label element.",
      "required": true
    },
    "value": {
      "type": "text",
      "description": "* mui prop: any\n* You can provide your own value. Otherwise, we fallback to the child position index.",
      "required": true
    },
    "icon": {
      "type": "bloks",
      "restrict_components": true,
      "component_whitelist": [
        "MuiIconButtonRedirect",
        "MuiIconButton"
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
  "real_name": "MuiBottomNavigationAction",
  "component_group_uuid": null
}