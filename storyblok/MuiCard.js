module.exports = {
  "name": "MuiCard",
  "display_name": null,
  "updated_at": "2020-07-02T22:08:22.934Z",
  "schema": {
    "rootClass": {
      "type": "options",
      "pos": 0,
      "min_options": "",
      "max_options": "",
      "options": [
        {
          "value": "box-shadow: 5px 10px #FFF",
          "name": "box-shadow: 5px 10px;"
        },
        {
          "value": "background-color: #000",
          "name": "background-color black"
        },
        {
          "value": "color: #000",
          "name": "color-black"
        },
        {
          "value": "border-style: solid",
          "name": "border"
        },
        {
          "value": "max-width: 500",
          "name": "maxWidth"
        },
        {
          "value": "display: flex",
          "name": "flex"
        },
        {
          "value": "justify-content: center",
          "name": "justify center"
        }
      ]
    },
    "raised": {
      "type": "boolean",
      "description": "If true, the card will use raised styling.",
      "pos": 1
    },
    "variant": {
      "type": "option",
      "pos": 2,
      "description": "* mui prop: 'elevation' | 'outlined'\n* The variant to use.",
      "default_value": "elevation",
      "use_uuid": true,
      "options": [
        {
          "value": "elevation",
          "name": "elevation"
        },
        {
          "value": "outlined",
          "name": "outlined"
        }
      ]
    },
    "elevation": {
      "type": "number",
      "pos": 3,
      "description": "* It accepts values between 0 and 24 inclusive.\n* Shadow depth, corresponds to dp in the spec.\n* Set to 0 for no shadow.",
      "default_value": "1"
    },
    "square": {
      "type": "boolean",
      "pos": 4,
      "description": "* mui prop: true | false\n* If true, rounded corners are disabled."
    },
    "height": {
      "type": "text",
      "default_value": "100%",
      "description": "Height of the card",
      "pos": 5
    },
    "width": {
      "type": "text",
      "description": "Width of card",
      "default_value": "100%",
      "pos": 6
    },
    "content": {
      "type": "bloks",
      "restrict_components": true,
      "component_whitelist": [
        "MuiCardMedia",
        "MuiCardHeader",
        "MuiCardContent",
        "MuiCardActions",
        "MuiVideo"
      ],
      "pos": 7
    }
  },
  "image": null,
  "preview_field": null,
  "is_root": false,
  "preview_tmpl": null,
  "is_nestable": true,
  "all_presets": [],
  "preset_id": null,
  "real_name": "MuiCard",
  "component_group_uuid": null
}