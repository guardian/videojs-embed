## [VideoJS](http://www.videojs.com) Embed Plugin
Displays an Embed button in the control bar which triggers an overlay showing the embed code for a media source.

![video player](https://raw.githubusercontent.com/kim-company/videojs-chromecast/master/screenshots/chromecast-player.jpg)

## Getting started
1. Clone, fork or download via [Bower](http://bower.io/)
2. Include `videojs.embed.js` in your document, either compiled with your application or via the `<head>`.
3. Initialize the VideoJS Player with the Embed Plugin like the [configuration example](#configuration-example).
4. When your media source is embedable, you should see the cast button in the controlbar.

#### Configuration example
```javascript
videojs("my_player_id", {
  	plugins: {
        embed: {
            embedable: true,
            location: '//embed.theguardian.com/embed/video/my-video
        }
    }
});
```
