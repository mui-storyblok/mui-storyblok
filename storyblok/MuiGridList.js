module.exports = {
  "name": "MuiGridList",
  "display_name": null,
  "updated_at": "2020-05-06T14:54:01.085Z",
  "schema": {
    "content": {
      "type": "bloks",
      "restrict_components": true,
      "component_whitelist": [
        "MuiTileData"
      ],
      "required": false
    },
    "cellHeight": {
      "type": "number",
      "description": "* mui prop: number | 'auto'\n* Number of px for one cell height.\n* You can set 'auto' if you want to let the children determine the height.",
      "display_name": "",
      "default_value": "180"
    },
    "cols": {
      "type": "number",
      "description": "* mui prop: number\n* Number of columns.",
      "default_value": "2"
    },
    "spacing": {
      "type": "number",
      "description": "* mui prop: number\n* Number of px for the spacing between tiles.",
      "default_value": "4"
    },
    "rootClass": {
      "type": "options",
      "options": [],
      "description": "* storyblok multiselect of css classes\n* Mui Override or extend the styles applied to the component. See CSS API below for more details.",
      "min_options": ""
    },
    "height": {
      "type": "text",
      "description": "Height of the gridList container",
      "max_length": "",
      "default_value": "500"
    },
    "width": {
      "type": "text",
      "description": "Width of the GridList container.",
      "default_value": "450"
    }
  },
  "image": null,
  "preview_field": null,
  "is_root": false,
  "preview_tmpl": null,
  "is_nestable": true,
  "all_presets": [],
  "preset_id": null,
  "real_name": "MuiGridList",
  "component_group_uuid": null
}