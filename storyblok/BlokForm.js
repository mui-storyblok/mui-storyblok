module.exports = {
  "name": "BlokForm",
  "display_name": null,
  "updated_at": "2020-05-26T18:18:01.671Z",
  "schema": {
    "submitButton": {
      "type": "bloks",
      "required": true,
      "max_length": "",
      "maximum": "1",
      "restrict_components": true,
      "component_whitelist": [
        "MuiSubmit"
      ]
    },
    "baseUrl": {
      "type": "text",
      "required": true
    },
    "successResponseText": {
      "type": "text",
      "required": true
    },
    "errorResponseText": {
      "type": "text",
      "required": true
    },
    "method": {
      "type": "option",
      "required": true,
      "use_uuid": true,
      "options": [
        {
          "value": "GET",
          "name": "GET"
        },
        {
          "value": "POST",
          "name": "POST"
        }
      ],
      "default_value": "POST"
    },
    "content": {
      "type": "bloks",
      "restrict_components": true,
      "component_whitelist": [
        "FormGrid"
      ]
    }
  },
  "image": null,
  "preview_field": null,
  "is_root": false,
  "preview_tmpl": null,
  "is_nestable": true,
  "all_presets": [],
  "preset_id": null,
  "real_name": "BlokForm",
  "component_group_uuid": null
}