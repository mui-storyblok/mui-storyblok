module.exports = {
  "name": "MuiTable",
  "display_name": null,
  "updated_at": "2020-04-21T17:26:30.043Z",
  "schema": {
    "rootClass": {
      "type": "options",
      "default_value": "* stroyblok multiselect of css classes \n* Mui Override or extend the styles applied to the component."
    },
    "padding": {
      "type": "option",
      "use_uuid": true,
      "options": [
        {
          "value": "default",
          "name": "default"
        },
        {
          "value": "checkbox",
          "name": "checkbox"
        },
        {
          "value": "none",
          "name": "none"
        }
      ],
      "required": true,
      "default_value": "default",
      "description": "   * mui props: 'default' | 'checkbox' | 'none'\n   * Allows TableCells to inherit padding of the Table."
    },
    "size": {
      "type": "option",
      "use_uuid": true,
      "required": true,
      "options": [
        {
          "value": "small",
          "name": "small"
        },
        {
          "value": "medium",
          "name": "medium"
        }
      ],
      "description": "   * mui props: 'small' | 'medium'\n   * Allows TableCells to inherit size of the Table.",
      "default_value": "medium"
    },
    "stickyHeader": {
      "type": "boolean",
      "use_uuid": true,
      "description": "   * mui props: true | false\n   * set the header sticky. (It doesn't work with IE 11)"
    },
    "tHead": {
      "type": "bloks",
      "restrict_components": true,
      "component_whitelist": [
        "MuiTableHead"
      ],
      "required": true,
      "maximum": "1"
    },
    "tBody": {
      "type": "bloks",
      "required": true,
      "maximum": "1",
      "restrict_components": true,
      "component_whitelist": [
        "MuiTableBody"
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
  "real_name": "MuiTable",
  "component_group_uuid": null
}