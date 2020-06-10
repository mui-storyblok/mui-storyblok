module.exports = {
  "name": "MuiAppBarGridItem",
  "display_name": null,
  "updated_at": "2020-06-09T15:32:20.338Z",
  "schema": {
    "alignContent": {
      "type": "option",
      "pos": 0,
      "use_uuid": true,
      "options": [
        {
          "value": "stretch",
          "name": "stretch"
        },
        {
          "value": "center",
          "name": "center"
        },
        {
          "value": "flex-start",
          "name": "flex-start"
        },
        {
          "value": "flex-end",
          "name": "flex-end"
        },
        {
          "value": "space-between",
          "name": "space-between"
        },
        {
          "value": "space-around",
          "name": "space-around"
        }
      ],
      "required": true,
      "description": "Defines the align-content style property. It's applied for all screen sizes.",
      "default_value": "stretch"
    },
    "alignItems": {
      "type": "option",
      "use_uuid": true,
      "options": [
        {
          "value": "flex-start",
          "name": "flex-start"
        },
        {
          "value": "center",
          "name": "center"
        },
        {
          "value": "flex-end",
          "name": "flex-end"
        },
        {
          "value": "stretch",
          "name": "stretch"
        },
        {
          "value": "baseline",
          "name": "baseline"
        }
      ],
      "default_value": "center",
      "required": true,
      "pos": 1,
      "description": "Defines the align-items style property. It's applied for all screen sizes."
    },
    "rootClass": {
      "type": "options",
      "pos": 2,
      "options": [
        {
          "value": "color: blue",
          "name": "whatever blue color"
        },
        {
          "value": "min-width: 100vw",
          "name": "width"
        }
      ]
    },
    "direction": {
      "type": "option",
      "use_uuid": true,
      "options": [
        {
          "value": "row",
          "name": "row"
        },
        {
          "value": "row-reverse",
          "name": "row-reverse"
        },
        {
          "value": "column",
          "name": "column"
        },
        {
          "value": "column-reverse",
          "name": "column-reverse"
        }
      ],
      "default_value": "row",
      "required": true,
      "pos": 3,
      "description": "Defines the flex-direction style property. It is applied for all screen sizes."
    },
    "justify": {
      "type": "option",
      "use_uuid": true,
      "options": [
        {
          "value": "flex-start",
          "name": "flex-start"
        },
        {
          "value": "center",
          "name": "center"
        },
        {
          "value": "flex-end",
          "name": "flex-end"
        },
        {
          "value": "space-between",
          "name": "space-between"
        },
        {
          "value": "space-around",
          "name": "space-around"
        },
        {
          "value": "space-evenly",
          "name": "space-evenly"
        }
      ],
      "description": "Defines the justify-content style property. It is applied for all screen sizes.",
      "default_value": "center",
      "required": true,
      "pos": 4
    },
    "lg": {
      "type": "option",
      "use_uuid": true,
      "options": [
        {
          "value": "auto",
          "name": "auto"
        },
        {
          "value": "false",
          "name": "false"
        },
        {
          "value": "true",
          "name": "true"
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
        },
        {
          "value": "11",
          "name": "11"
        },
        {
          "value": "12",
          "name": "12"
        }
      ],
      "required": true,
      "default_value": "false",
      "pos": 5,
      "description": "Defines the number of grids the component is going to use. It's applied for the breakpoint and wider screens if not overridden."
    },
    "md": {
      "type": "option",
      "use_uuid": true,
      "options": [
        {
          "value": "false",
          "name": "false"
        },
        {
          "value": "auto",
          "name": "auto"
        },
        {
          "value": "true",
          "name": "true"
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
        },
        {
          "value": "11",
          "name": "11"
        },
        {
          "value": "12",
          "name": "12"
        }
      ],
      "required": true,
      "default_value": "false",
      "pos": 6,
      "description": "Defines the number of grids the component is going to use. It's applied for the breakpoint and wider screens if not overridden."
    },
    "sm": {
      "type": "option",
      "use_uuid": true,
      "options": [
        {
          "value": "false",
          "name": "false"
        },
        {
          "value": "auto",
          "name": "auto"
        },
        {
          "value": "true",
          "name": "true"
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
        },
        {
          "value": "11",
          "name": "11"
        },
        {
          "value": "12",
          "name": "12"
        }
      ],
      "required": true,
      "default_value": "false",
      "pos": 7,
      "description": "Defines the number of grids the component is going to use. It's applied for the breakpoint and wider screens if not overridden."
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
      "display_name": "",
      "default_value": "2",
      "required": true,
      "pos": 8,
      "description": "Defines the space between the type item component. It can only be used on a type container component."
    },
    "wrap": {
      "type": "option",
      "pos": 9,
      "use_uuid": true,
      "description": "Defines the flex-wrap style property. It's applied for all screen sizes.",
      "options": [
        {
          "value": "nowrap",
          "name": "nowrap"
        },
        {
          "value": "wrap",
          "name": "wrap"
        },
        {
          "value": "wrap-reverse",
          "name": "wrap-reverse"
        }
      ],
      "required": true,
      "default_value": "wrap"
    },
    "xl": {
      "type": "option",
      "use_uuid": true,
      "options": [
        {
          "value": "false",
          "name": "false"
        },
        {
          "value": "auto",
          "name": "auto"
        },
        {
          "value": "true",
          "name": "true"
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
        },
        {
          "value": "11",
          "name": "11"
        },
        {
          "value": "12",
          "name": "12"
        }
      ],
      "required": true,
      "default_value": "false",
      "pos": 10,
      "description": "Defines the number of grids the component is going to use. It's applied for the breakpoint and wider screens if not overridden."
    },
    "xs": {
      "type": "option",
      "use_uuid": true,
      "options": [
        {
          "value": "false",
          "name": "false"
        },
        {
          "value": "auto",
          "name": "auto"
        },
        {
          "value": "true",
          "name": "true"
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
        },
        {
          "value": "11",
          "name": "11"
        },
        {
          "value": "12",
          "name": "12"
        }
      ],
      "required": true,
      "default_value": "false",
      "pos": 11
    },
    "content": {
      "type": "bloks",
      "maximum": "",
      "restrict_components": true,
      "component_whitelist": [
        "MuiButtonRedirect",
        "MuiButtonHref",
        "MuiIconButtonRedirect",
        "MuiIconButtonHref",
        "MuiMenu",
        "MuiButtonDrawer",
        "MuiIconButtonDrawer",
        "MuiButtonSnackbar",
        "MuiImage",
        "MuiActionCardContainer"
      ],
      "pos": 12,
      "description": "Content passed to MuiGrid to render    * components: MuiButtonRedirect,     MuiCard,     MuiTypography,     MuiMenu,     MuiIcon,     MuiExpansionPanel,     MuiList,",
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
  "real_name": "MuiAppBarGridItem",
  "component_group_uuid": null
}