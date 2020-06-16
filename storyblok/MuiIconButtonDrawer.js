module.exports = {
  "name": "MuiIconButtonDrawer",
  "display_name": null,
  "updated_at": "2020-06-01T20:26:10.320Z",
  "schema": {
    "icon": {
      "type": "bloks",
      "restrict_components": true,
      "component_whitelist": [
        "MuiIconButton"
      ],
      "required": true,
      "maximum": "1"
    },
    "anchor": {
      "type": "option",
      "use_uuid": true,
      "options": [
        {
          "value": "left",
          "name": "left"
        },
        {
          "value": "top",
          "name": "top"
        },
        {
          "value": "right",
          "name": "right"
        },
        {
          "value": "bottom",
          "name": "bottom"
        }
      ],
      "required": true,
      "description": "* mui props: 'bottom' | 'left' | 'right' | 'top'\n* Side from which the drawer will appear.",
      "display_name": "",
      "default_value": "left"
    },
    "elevation": {
      "type": "number",
      "description": "* number\n* The elevation of the drawer.",
      "default_value": "16"
    },
    "rootClass": {
      "type": "options",
      "default_value": "",
      "description": "* stroyblok multiselect of css classes\n* Mui Override or extend the styles applied to the component."
    },
    "variant": {
      "type": "option",
      "use_uuid": true,
      "options": [
        {
          "value": "permanent",
          "name": "permanent"
        },
        {
          "value": "persistent",
          "name": "persistent"
        },
        {
          "value": "temporary",
          "name": "temporary"
        }
      ],
      "description": "* mui props: 'permanent' | 'persistent' | 'temporary'\n* The variant to use.",
      "default_value": "temporary"
    },
    "content": {
      "type": "bloks",
      "restrict_components": true,
      "component_whitelist": [
        "MuiList",
        "MuiListDropdown"
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
  "real_name": "MuiIconButtonDrawer",
  "component_group_uuid": null
}