# Paan Wala — random 1-minute YouTube version

This version does NOT require a `music/` folder or MP3 uploads.

It uses the official YouTube IFrame Player API and plays a random 60-second window from each configured YouTube video. The custom Paan Wala controls still handle play/pause, previous, next, progress, and random track selection.

## GitHub

Replace the root `script.js` and `styles.css` in your repository with the versions in this folder. `index.html` does not need to change.

## Important

The playlist uses YouTube video IDs already filled in for the current 20 songs. YouTube can disable embedding for individual videos; if one is unavailable, replace that track's `youtubeId` in `script.js` with another embeddable video for the same song.

The YouTube player is intentionally visible because embedded-player requirements call for an actual player viewport; this version does not extract or hide YouTube audio.
