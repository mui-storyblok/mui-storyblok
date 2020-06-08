module.exports = {
  "name": "MuiActionCardContainer",
  "display_name": null,
  "updated_at": "2020-06-03T16:21:22.497Z",
  "schema": {
    "rootClass": {
      "type": "options",
      "description": "* storyblok multiselect of css classes\n* Override or extend the styles applied to the component"
    },
    "menuName": {
      "type": "text",
      "description": "* Text Displayed for menu",
      "default_value": "Action Card Menu"
    },
    "actionCards": {
      "type": "bloks",
      "required": true,
      "maximum": "",
      "restrict_components": true,
      "component_whitelist": [
        "MuiActionCard"
      ]
    },
    "height": {
      "type": "text",
      "description": "* Height of the each Action Card.",
      "default_value": "100px"
    },
    "width": {
      "type": "text",
      "description": "* Width of the each Action Card.",
      "default_value": "200px"
    }
  },
  "image": null,
  "preview_field": null,
  "is_root": false,
  "preview_tmpl": null,
  "is_nestable": true,
  "all_presets": [],
  "preset_id": null,
  "real_name": "MuiActionCardContainer",
  "component_group_uuid": null
}