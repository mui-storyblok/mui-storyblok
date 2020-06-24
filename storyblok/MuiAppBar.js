module.exports = {
  "name": "MuiAppBar",
  "display_name": null,
  "updated_at": "2020-06-22T16:52:58.369Z",
  "schema": {
    "rootClass": {
      "type": "options",
      "use_uuid": true,
      "description": "Override or extend the styles applied to the component.",
      "options": [],
      "pos": 0
    },
    "height": {
      "type": "text",
      "description": "Height of the App Bar",
      "default_value": "60px",
      "pos": 1
    },
    "color": {
      "type": "option",
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
      "required": true,
      "default_value": "primary",
      "description": "AppBar: The color of the component. It supports those theme colors that make sense for this component.",
      "pos": 2
    },
    "position": {
      "type": "option",
      "use_uuid": true,
      "options": [
        {
          "value": "absolute",
          "name": "absolute"
        },
        {
          "value": "fixed",
          "name": "fixed"
        },
        {
          "value": "relative",
          "name": "relative"
        },
        {
          "value": "static",
          "name": "static"
        },
        {
          "value": "sticky",
          "name": "sticky"
        }
      ],
      "default_value": "fixed",
      "required": true,
      "description": "AppBar: The positioning type. The behavior of the different options is described in the MDN web docs.    * Note: sticky is not universally supported and will fall back to static when unavailable.",
      "pos": 3
    },
    "variant": {
      "type": "option",
      "use_uuid": true,
      "options": [
        {
          "value": "regular",
          "name": "regular"
        },
        {
          "value": "dense",
          "name": "dense"
        }
      ],
      "required": true,
      "default_value": "regular",
      "description": "ToolBar: The variant to use.",
      "pos": 4
    },
    "disableGutters": {
      "type": "boolean",
      "description": "Toolbar: If true, disables gutter padding.",
      "pos": 5
    },
    "content": {
      "type": "bloks",
      "restrict_components": true,
      "component_whitelist": [
        "MuiAppBarGrid"
      ],
      "required": true,
      "maximum": "1"
    }
  },
  "image": null,
  "preview_field": null,
  "is_root": false,
  "preview_tmpl": null,
  "is_nestable": true,
  "all_presets": [],
  "preset_id": null,
  "real_name": "MuiAppBar",
  "component_group_uuid": null
}