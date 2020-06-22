module.exports = {
  "name": "MuiTileData",
  "display_name": null,
  "updated_at": "2020-04-28T21:57:52.804Z",
  "schema": {
    "cols": {
      "type": "number",
      "description": "* mui prop: number\n* width of the tile in number of grid cells.",
      "display_name": "",
      "default_value": "1"
    },
    "rows": {
      "type": "number",
      "description": "* mui prop: number\n* Height of the tile in number of grid cells.",
      "default_value": "1"
    },
    "image": {
      "type": "text",
      "description": "* mui prop: string\n* Title of image.",
      "default_value": "https://www.lifeloveandsugar.com/wp-content/uploads/2018/01/Chocolate-Covered-Strawberry-Cupcakes4.jpg"
    },
    "title": {
      "type": "text",
      "description": "* mui prop: string\n* Title of image.",
      "default_value": "Cupcake"
    },
    "rootClass": {
      "type": "options",
      "description": "* storyblok multiselect of css classes\n* Mui Override or extend the styles applied to the component. See CSS API below for more details."
    },
    "MuiGridListTileBar": {
      "type": "bloks",
      "restrict_components": true,
      "component_whitelist": [
        "MuiGridListTileBar"
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
  "real_name": "MuiTileData",
  "component_group_uuid": null
}