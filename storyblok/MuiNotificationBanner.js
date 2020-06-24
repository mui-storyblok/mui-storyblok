module.exports = {
  "name": "MuiNotificationBanner",
  "display_name": null,
  "updated_at": "2020-06-24T19:33:37.606Z",
  "schema": {
    "rootClass": {
      "type": "options",
      "description": "* storyblok multiselect of css classes\n* Override or extend the styles applied to the component."
    },
    "color": {
      "type": "option",
      "description": "* mui props: 'default' | 'inherit' | 'primary' | 'secondary' | 'transparent'\n* AppBar: The color of the component.\n* It supports those theme colors that make sense for this component.",
      "use_uuid": true,
      "options": [
        {
          "value": "default",
          "name": "default"
        },
        {
          "value": "inherit",
          "name": "inherit"
        },
        {
          "value": "primary",
          "name": "primary"
        },
        {
          "value": "secondary",
          "name": "secondary"
        },
        {
          "value": "transparent",
          "name": "transparent"
        }
      ],
      "default_value": "primary"
    },
    "content": {
      "type": "bloks",
      "restrict_components": true,
      "component_whitelist": [
        "MuiTypography"
      ],
      "maximum": "",
      "required": true,
      "description": ""
    },
    "top": {
      "type": "text",
      "default_value": "60px"
    }
  },
  "image": null,
  "preview_field": null,
  "is_root": false,
  "preview_tmpl": null,
  "is_nestable": true,
  "all_presets": [],
  "preset_id": null,
  "real_name": "MuiNotificationBanner",
  "component_group_uuid": null
}