module.exports = {
  "name": "MuiTypography",
  "display_name": null,
  "updated_at": "2020-07-14T17:25:27.261Z",
  "schema": {
    "align": {
      "type": "option",
      "use_uuid": true,
      "options": [
        {
          "value": "inherit",
          "name": "inherit"
        },
        {
          "value": "left",
          "name": "left"
        },
        {
          "value": "center",
          "name": "center"
        },
        {
          "value": "right",
          "name": "right"
        },
        {
          "value": "justify",
          "name": "justify"
        }
      ],
      "default_value": "inherit",
      "required": true
    },
    "color": {
      "type": "option",
      "use_uuid": true,
      "options": [
        {
          "value": "initial",
          "name": "initial"
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
          "value": "textPrimary",
          "name": "textPrimary"
        },
        {
          "value": "textSecondary",
          "name": "textSecondary"
        },
        {
          "value": "error",
          "name": "error"
        }
      ],
      "default_value": "initial",
      "required": true
    },
    "rootClass": {
      "type": "options",
      "options": [
        {
          "value": "margin-right: 15px",
          "name": "margin-right"
        },
        {
          "value": "margin-bottom: 15px",
          "name": "margin-bottom"
        },
        {
          "value": "opacity: .7",
          "name": "opacity"
        },
        {
          "value": "background-color: #FFF",
          "name": "bc white"
        }
      ],
      "folder_slug": "",
      "description": "",
      "display_name": "",
      "translatable": false,
      "required": false,
      "external_datasource": ""
    },
    "width": {
      "type": "text",
      "required": true,
      "default_value": "100%"
    },
    "height": {
      "type": "text",
      "required": true,
      "default_value": "100%"
    },
    "content": {
      "type": "bloks",
      "maximum": "",
      "restrict_components": true,
      "component_whitelist": [
        "MuiLink",
        "MuiIcon",
        "MuiIconButtonRedirect",
        "MuiIconButtonHref",
        "MuiIconButtonDownload",
        "MuiIconButtonDialog",
        "MuiButtonRedirect",
        "MuiButtonDownload",
        "MuiButtonDialog",
        "MuiButtonHref",
        "MuiText",
        "MyCoolComp",
        "GoogleConversions"
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
  "real_name": "MuiTypography",
  "component_group_uuid": null
}