module.exports = {
  "name": "GoogleConversions",
  "display_name": null,
  "updated_at": "2020-07-14T18:11:17.436Z",
  "schema": {
    "sendTo": {
      "type": "text",
      "description": "Conversion Label for the conversion action.",
      "default_value": ""
    },
    "aWConversionID": {
      "type": "text",
      "default_value": "",
      "description": "Conversion ID provided by google ad analytics account setup. EX: UA-******-**"
    },
    "button": {
      "type": "bloks",
      "restrict_components": true,
      "component_whitelist": [
        "MuiButtonDownload",
        "MuiButtonHref",
        "MuiButtonRedirect",
        "MuiIconButtonDownload",
        "MuiIconButtonHref",
        "MuiIconButtonRedirect"
      ],
      "description": ""
    }
  },
  "image": null,
  "preview_field": null,
  "is_root": false,
  "preview_tmpl": null,
  "is_nestable": true,
  "all_presets": [],
  "preset_id": null,
  "real_name": "GoogleConversions",
  "component_group_uuid": null
}