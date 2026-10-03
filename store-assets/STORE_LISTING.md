# Chrome Web Store submission – Preview Blocker for YouTube TV

Copy each section into the matching field in the Developer Dashboard.

---

## Store listing tab

**Name** (pulled from manifest)
Preview Blocker for YouTube TV

**Summary** (pulled from manifest, max 132 characters)
Stops auto-playing previews on YouTube TV so you just see thumbnails. Videos still play when you click them.

**Category**
Productivity (alternative: Accessibility)

**Language**
English

**Description**

Tired of YouTube TV playing previews every time you browse? Preview Blocker for YouTube TV stops the auto-playing video previews on the home, live guide, and library screens, so you see plain, still thumbnails instead.

When you actually want to watch something, just click it. The video opens and plays normally.

Features:
• Blocks auto-playing previews while you browse YouTube TV
• Keeps thumbnails visible instead of moving video
• Videos you click play normally
• No settings to configure; it works as soon as it's installed
• Collects no data, makes no network requests, and needs no special permissions
• Lightweight: a single small script that only runs on tv.youtube.com

Preview Blocker for YouTube TV is an independent project and is not affiliated with, endorsed by, or sponsored by YouTube or Google. YouTube and YouTube TV are trademarks of Google LLC.

**Graphic assets**
- Store icon: `icon128.png`
- Screenshot: `screenshot-1280x800.png` (consider adding a real screenshot of YouTube TV with the extension running, 1280×800 or 640×400)
- Small promo tile: `promo-tile-440x280.png`

**Additional fields**
- Official URL: leave blank
- Homepage URL: optional (e.g. a GitHub repo if you make one)
- Support URL: optional, but a support email or GitHub Issues page helps with reviews
- Mature content: No

---

## Privacy practices tab

**Single purpose description**
This extension has one purpose: to stop video previews from automatically playing while browsing tv.youtube.com, so users see still thumbnails. Videos the user clicks on still play normally.

**Permission justification**
The extension requests no permissions in the manifest. If the dashboard asks for a host permission justification for the content script on https://tv.youtube.com/*:

> The content script must run on tv.youtube.com to detect and pause auto-playing preview videos on browse pages. It does not run on any other site and does not read, collect, or transmit any page content or user data.

**Remote code**
No, I am not using remote code. (All JavaScript is included in the package.)

**Data usage**
Leave every data type unchecked (personally identifiable info, health, financial, authentication, personal communications, location, web history, user activity, website content). The extension collects none of these.

Then check all three certifications:
- I do not sell or transfer user data to third parties, outside of the approved use cases
- I do not use or transfer user data for purposes that are unrelated to my item's single purpose
- I do not use or transfer user data to determine creditworthiness or for lending purposes

**Privacy policy URL**
Not required when no user data is collected. If the dashboard insists, host a one-paragraph policy (e.g. a GitHub page) with this text:

> Preview Blocker for YouTube TV does not collect, store, or transmit any personal information or browsing data. The extension runs only on tv.youtube.com, and all of its processing happens locally in your browser.

---

## Distribution tab

- Visibility: Public (or Unlisted if you'd like to share by link only)
- Regions: All regions
- Pricing: Free

---

## Before you submit

1. Upload `preview-blocker-for-youtube-tv.zip` (not the folder, and not the store-assets folder).
2. Test the zip once more: unzip it, use Load unpacked in `chrome://extensions`, and confirm previews are blocked and clicks still play.
3. For future updates, bump `"version"` in manifest.json (e.g. 1.0.1), re-zip, and upload the new package.
