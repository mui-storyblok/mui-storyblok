module.exports = {
  "name": "MuiListItemButton",
  "display_name": null,
  "updated_at": "2020-06-24T17:13:43.706Z",
  "schema": {
    "listItemText": {
      "type": "bloks",
      "restrict_components": true,
      "component_whitelist": [
        "MuiListItemText"
      ],
      "maximum": "1",
      "required": true,
      "pos": 0
    },
    "rootClass": {
      "type": "options",
      "pos": 1
    },
    "alignItems": {
      "type": "option",
      "use_uuid": true,
      "options": [
        {
          "value": "flex-start",
          "name": "flex-start"
        },
        {
          "value": "center",
          "name": "center"
        }
      ],
      "default_value": "center",
      "pos": 2
    },
    "dense": {
      "type": "boolean",
      "pos": 3
    },
    "disableGutters": {
      "type": "boolean",
      "pos": 4
    },
    "divider": {
      "type": "boolean",
      "pos": 5
    },
    "selected": {
      "type": "boolean",
      "pos": 6
    },
    "listItemAvatar": {
      "type": "bloks",
      "restrict_components": true,
      "maximum": "1",
      "component_whitelist": [
        "MuiListItemAvatar"
      ],
      "pos": 7
    },
    "listItemIcon": {
      "type": "bloks",
      "restrict_components": true,
      "component_whitelist": [
        "MuiListItemIcon"
      ],
      "maximum": "1",
      "pos": 8
    },
    "redirectRoute": {
      "type": "text",
      "default_value": "",
      "description": "redirect route\n* If provided redirect route and href, href is be called"
    },
    "href": {
      "type": "text",
      "description": "* url to redirect to"
    }
  },
  "image": null,
  "preview_field": null,
  "is_root": false,
  "preview_tmpl": null,
  "is_nestable": true,
  "all_presets": [],
  "preset_id": null,
  "real_name": "MuiListItemButton",
  "component_group_uuid": null
}