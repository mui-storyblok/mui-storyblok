module.exports = {
  "name": "MuiAudioPlayer",
  "display_name": null,
  "updated_at": "2020-07-02T16:41:44.565Z",
  "schema": {
    "src": {
      "type": "text",
      "required": true
    },
    "width": {
      "type": "text",
      "required": true,
      "default_value": "100%"
    },
    "variation": {
      "type": "option",
      "use_uuid": true,
      "options": [
        {
          "value": "default",
          "name": "default"
        },
        {
          "value": "primary",
          "name": "primary"
        },
        {
          "value": "secondary",
          "name": "secondary"
        }
      ],
      "required": true,
      "default_value": "default"
    },
    "download": {
      "type": "boolean"
    },
    "autoplay": {
      "type": "boolean"
    },
    "elevation": {
      "type": "number",
      "required": true,
      "default_value": "1"
    },
    "rounded": {
      "type": "boolean"
    },
    "spacing": {
      "type": "option",
      "use_uuid": true,
      "options": [
        {
          "value": "0",
          "name": "0"
        },
        {
          "value": "1",
          "name": "1"
        },
        {
          "value": "2",
          "name": "2"
        },
        {
          "value": "3",
          "name": "3"
        },
        {
          "value": "4",
          "name": "4"
        },
        {
          "value": "5",
          "name": "5"
        },
        {
          "value": "6",
          "name": "6"
        },
        {
          "value": "7",
          "name": "7"
        },
        {
          "value": "8",
          "name": "8"
        },
        {
          "value": "9",
          "name": "9"
        },
        {
          "value": "10",
          "name": "10"
        }
      ],
      "required": true,
      "default_value": "3"
    },
    "order": {
      "type": "option",
      "use_uuid": true,
      "options": [
        {
          "value": "standart",
          "name": "standart"
        },
        {
          "value": "reverse",
          "name": "reverse"
        }
      ],
      "required": true,
      "default_value": "standart"
    },
    "loop": {
      "type": "boolean"
    },
    "preload": {
      "type": "option",
      "use_uuid": true,
      "options": [
        {
          "value": "auto",
          "name": "auto"
        },
        {
          "value": "metadata",
          "name": "metadata"
        },
        {
          "value": "none",
          "name": "none"
        }
      ],
      "required": true,
      "default_value": "none"
    }
  },
  "image": null,
  "preview_field": null,
  "is_root": false,
  "preview_tmpl": null,
  "is_nestable": true,
  "all_presets": [],
  "preset_id": null,
  "real_name": "MuiAudioPlayer",
  "component_group_uuid": null
}