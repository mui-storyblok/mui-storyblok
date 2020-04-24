module.exports = {
  "name": "MuiButton",
  "display_name": null,
  "updated_at": "2020-03-31T18:27:02.571Z",
  "schema": {
    "buttonText": {
      "type": "text",
      "required": true,
      "description": "button text",
      "pos": 0
    },
    "rootClass": {
      "type": "options",
      "description": "     * Override or extend the styles applied to the component      * expecting array of string ex: ['color: black', 'font-Size: 20px' ]",
      "pos": 1,
      "min_options": "",
      "options": [
        {
          "value": "color: white",
          "name": "color white"
        }
      ]
    },
    "color": {
      "type": "option",
      "use_uuid": true,
      "options": [
        {
          "value": "default",
          "name": "default"
        },
        {
          "value": "inherit",
          "name": "inherit"
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
      "description": "The color of the component. It supports those theme colors that make sense for this component.",
      "default_value": "secondary",
      "pos": 2
    },
    "disableElevation": {
      "type": "boolean",
      "use_uuid": true,
      "options": [
        {
          "value": "",
          "name": ""
        },
        {
          "value": "",
          "name": ""
        },
        {
          "value": "",
          "name": ""
        }
      ],
      "required": false,
      "pos": 3
    },
    "disableFocusRipple": {
      "type": "boolean",
      "description": "If true, the keyboard focus ripple will be disabled. disableRipple must also be true.",
      "pos": 4
    },
    "disableRipple": {
      "type": "boolean",
      "description": "If true, the ripple effect will be disabled.      * Without a ripple there is no styling for :focus-visible by default. Be sure to highlight the element by applying separate styles with the focusVisibleClassName.",
      "pos": 5
    },
    "endIcon": {
      "type": "text",
      "description": "Element placed after the children. renders icon      * any icon from https://material.io/resources/icons/?style=baseline",
      "pos": 6
    },
    "fullWidth": {
      "type": "boolean",
      "description": "If true, the button will take up the full width of its container.",
      "pos": 7
    },
    "size": {
      "type": "option",
      "use_uuid": true,
      "options": [
        {
          "value": "small",
          "name": "small"
        },
        {
          "value": "medium",
          "name": "medium"
        },
        {
          "value": "large",
          "name": "large"
        }
      ],
      "description": "The size of the button. small is equivalent to the dense button styling.",
      "default_value": "medium",
      "required": true,
      "pos": 8
    },
    "startIcon": {
      "type": "text",
      "description": "Element placed before the children. renders icon      * any icon from https://material.io/resources/icons/?style=baseline",
      "pos": 9
    },
    "variant": {
      "type": "option",
      "use_uuid": true,
      "options": [
        {
          "value": "text",
          "name": "text"
        },
        {
          "value": "outlined",
          "name": "outlined"
        },
        {
          "value": "contained",
          "name": "contained"
        }
      ],
      "required": true,
      "default_value": "text",
      "pos": 10
    }
  },
  "image": null,
  "preview_field": null,
  "is_root": false,
  "preview_tmpl": "",
  "is_nestable": true,
  "all_presets": [],
  "preset_id": null,
  "real_name": "MuiButton",
  "component_group_uuid": null
}