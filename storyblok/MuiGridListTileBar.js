module.exports = {
  "name": "MuiGridListTileBar",
  "display_name": null,
  "updated_at": "2020-04-28T22:18:26.851Z",
  "schema": {
    "actionIcon": {
      "type": "bloks",
      "restrict_components": true,
      "component_whitelist": [
        "MuiIconButtonRedirect"
      ],
      "maximum": "1",
      "required": false,
      "description": ""
    },
    "titlePosition": {
      "type": "text",
      "required": true,
      "description": "mui prop: 'bottom' | 'top'\nPosition of the title bar.",
      "default_value": "bottom"
    },
    "rootClass": {
      "type": "options",
      "description": "* storyblok multiselect of css classes\n* Mui Override or extend the styles applied to the component. See CSS API below for more details."
    },
    "subtitle": {
      "type": "text",
      "description": "* mui prop: node\n* String or element serving as subtitle (support text).",
      "default_value": "",
      "required": false
    },
    "title": {
      "type": "text",
      "description": "* mui prop: node\n* Title to be displayed on tile."
    }
  },
  "image": null,
  "preview_field": null,
  "is_root": false,
  "preview_tmpl": null,
  "is_nestable": true,
  "all_presets": [],
  "preset_id": null,
  "real_name": "MuiGridListTileBar",
  "component_group_uuid": null
}