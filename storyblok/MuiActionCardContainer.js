module.exports = {
  "name": "MuiActionCardContainer",
  "display_name": null,
  "updated_at": "2020-06-10T20:53:25.171Z",
  "schema": {
    "rootClass": {
      "type": "options",
      "description": "* storyblok multiselect of css classes\n* Override or extend the styles applied to the component"
    },
    "menuName": {
      "type": "bloks",
      "description": "* Text Displayed for menu",
      "default_value": "",
      "restrict_components": true,
      "component_whitelist": [
        "MuiTypography"
      ],
      "required": true,
      "maximum": "1"
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