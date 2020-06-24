module.exports = {
  "name": "MuiPaginationTable",
  "display_name": null,
  "updated_at": "2020-04-22T16:56:36.911Z",
  "schema": {
    "rootClass": {
      "type": "options",
      "description": "* stroyblok multiselect of css classes\n* Mui Override or extend the styles applied to the component."
    },
    "padding": {
      "type": "text",
      "description": "* mui props: 'default' | 'checkbox' | 'none'\n* Allows TableCells to inherit padding of the Table.",
      "default_value": "default"
    },
    "size": {
      "type": "text",
      "description": "* mui props: 'small' | 'medium'\n* Allows TableCells to inherit size of the Table.",
      "default_value": "medium"
    },
    "stickyHeader": {
      "type": "boolean",
      "description": "* mui props: true | false\n* set the header sticky. (It doesn't work with IE 11)"
    },
    "tHead": {
      "type": "bloks",
      "restrict_components": true,
      "required": true,
      "component_whitelist": [
        "MuiPaginationTableHead"
      ]
    },
    "tBody": {
      "type": "bloks",
      "required": true,
      "maximum": "",
      "restrict_components": true,
      "component_whitelist": [
        "MuiPaginationTableBody"
      ]
    },
    "labelRowsPerPage": {
      "type": "text",
      "max_length": "",
      "description": "* mui prop: 'Rows per page:'\n* Customize the rows per page label.",
      "default_value": "Rows per page:"
    },
    "rowsPerPageOptions": {
      "type": "options",
      "options": [
        {
          "value": "10",
          "name": "rows10"
        },
        {
          "value": "25",
          "name": "rows25"
        },
        {
          "value": "50",
          "name": "rows50"
        },
        {
          "value": "100",
          "name": "rows100"
        }
      ],
      "description": "   * Customizes the options of the rows per page select field.\n   * If less than two options are available, no select field will be displayed.",
      "default_value": ""
    }
  },
  "image": null,
  "preview_field": null,
  "is_root": false,
  "preview_tmpl": null,
  "is_nestable": true,
  "all_presets": [],
  "preset_id": null,
  "real_name": "MuiPaginationTable",
  "component_group_uuid": null
}