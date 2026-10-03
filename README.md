# Preview Blocker for YouTube TV

A tiny Chrome extension that stops YouTube TV from auto-playing video previews while you browse. You see still thumbnails instead, and videos still play normally when you click them.

## How it works

Clicking a video on YouTube TV opens a `tv.youtube.com/watch/...` page. The extension allows playback on those pages and blocks it everywhere else (home, live guide, library), hiding the preview video so the thumbnail stays visible.

It requests no permissions, collects no data, and only runs on `tv.youtube.com`. See [PRIVACY.md](PRIVACY.md).

## Install from source

1. Clone or download this repository.
2. Open `chrome://extensions` and turn on **Developer mode**.
3. Click **Load unpacked** and select the `extension` folder.

## Build a store package

```sh
cd extension && zip -r ../preview-blocker-for-youtube-tv.zip . && cd ..
```

Bump `"version"` in `extension/manifest.json` before each new upload.

## Disclaimer

This is an independent project and is not affiliated with, endorsed by, or sponsored by YouTube or Google. YouTube and YouTube TV are trademarks of Google LLC.
