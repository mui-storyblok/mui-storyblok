module.exports = {
  "name": "MuiVideo",
  "display_name": null,
  "updated_at": "2020-06-05T18:59:28.963Z",
  "schema": {
    "url": {
      "type": "text",
      "description": "Url for the video"
    },
    "height": {
      "type": "text",
      "description": "Height of the video",
      "default_value": "500px"
    },
    "width": {
      "type": "text",
      "description": "Width of the video.",
      "default_value": "500px"
    },
    "controls": {
      "type": "boolean",
      "description": "   * Set to true or false to display native player controls\n   * Controls cannot be hidden for Wistia videos",
      "display_name": ""
    },
    "playing": {
      "type": "boolean",
      "description": "* Set to true or false to pause or play the media."
    },
    "loop": {
      "type": "boolean",
      "description": "* Set to true or false to loop the media."
    },
    "light": {
      "type": "boolean",
      "description": "   * Set to true to show just the video thumbnail, which loads the full player on click\n   * Pass in an image URL to override the preview image"
    },
    "playbackRate": {
      "type": "number",
      "description": "   * Set the playback rate of the player\n   * Only supported by YouTube, Wistia, and file paths",
      "default_value": "1"
    },
    "playsinline": {
      "type": "boolean",
      "description": "* Applies the playsinline attribute where supported."
    },
    "pip": {
      "type": "boolean",
      "description": "   * Set to true or false to enable or disable picture-in-picture mode\n   * Only available when playing file URLs in certain browsers"
    },
    "rootClass": {
      "type": "options",
      "description": "* StoryBlok multiselect of CSS Classes\n* Applied to video Div"
    }
  },
  "image": null,
  "preview_field": null,
  "is_root": false,
  "preview_tmpl": null,
  "is_nestable": true,
  "all_presets": [],
  "preset_id": null,
  "real_name": "MuiVideo",
  "component_group_uuid": null
}