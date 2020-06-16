module.exports = {
  "name": "MuiSlide",
  "display_name": null,
  "updated_at": "2020-05-18T22:45:53.628Z",
  "schema": {
    "rootClass": {
      "type": "options",
      "description": "* stroyblok multiselect of css classes\n* Mui Override or extend the styles applied to the component."
    },
    "direction": {
      "type": "option",
      "description": "* mui props: 'down' | 'left' | 'right' | 'up'\n* Direction the child node will enter from.",
      "default_value": "down",
      "use_uuid": true,
      "options": [
        {
          "value": "down",
          "name": "down"
        },
        {
          "value": "left",
          "name": "left"
        },
        {
          "value": "up",
          "name": "up"
        },
        {
          "value": "right",
          "name": "right"
        }
      ]
    },
    "timeout": {
      "type": "text",
      "description": "* mui props: number | string\n* The duration for the transition, in milliseconds.\n* You may specify a single timeout for all transitions, or individually with an object.\n* Set to 'auto' to automatically calculate transition time based on height.",
      "default_value": "auto",
      "display_name": ""
    },
    "content": {
      "type": "bloks",
      "restrict_components": true,
      "component_whitelist": [
        "Blok"
      ],
      "maximum": "1",
      "required": true
    },
    "slideIn": {
      "type": "number",
      "default_value": "300",
      "display_name": "",
      "description": "* Number of milliseconds for component to transition in."
    },
    "enter": {
      "type": "number",
      "description": "Duration in milliseconds to enter the screen.",
      "display_name": "",
      "default_value": "800"
    },
    "exit": {
      "type": "number",
      "description": "Duration in milliseconds to exit the screen.",
      "default_value": "800"
    }
  },
  "image": null,
  "preview_field": null,
  "is_root": false,
  "preview_tmpl": null,
  "is_nestable": true,
  "all_presets": [],
  "preset_id": null,
  "real_name": "MuiSlide",
  "component_group_uuid": null
}