module.exports = {
  "name": "MuiAccordion",
  "display_name": null,
  "updated_at": "2020-07-20T17:18:43.429Z",
  "schema": {
    "rootClass": {
      "type": "options"
    },
    "defaultExpanded": {
      "type": "boolean"
    },
    "width": {
      "type": "text",
      "required": true,
      "default_value": "100%",
      "description": "width of panel"
    },
    "accordionSummary": {
      "type": "bloks",
      "required": true,
      "maximum": "1",
      "restrict_components": true,
      "component_whitelist": [
        "MuiAccordionSummary"
      ]
    },
    "accordionDetails": {
      "type": "bloks",
      "restrict_components": true,
      "component_whitelist": [
        "MuiAccordionDetails"
      ],
      "maximum": "1",
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
  "real_name": "MuiAccordion",
  "component_group_uuid": null
}