# Varabi Mawardi portfolio

A Red Alert 2-inspired personal portfolio with original UI graphics, English and Indonesian copy, responsive navigation, and no audio.

## Local preview

This is a static site with no package installation or build step. From this folder, run:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Open `http://127.0.0.1:4173/` in a browser. The site uses hash routes, so `#projects`, `#experience`, `#skills`, and `#contact` can be linked directly.

## Files

- `index.html` — content and section structure.
- `styles.css` — original command-menu styling and responsive layout.
- `app.js` — navigation, translation, intro, and clock behavior.
- `assets/Vffar.png` — user-supplied profile image.

## Content status

RestoRuzz, JoyCafe, and SoliAdventure are linked to public sources. The project descriptions stay brief until Varabi supplies exact contributions and selected media for full case studies. RestoRuzz artwork currently loads from the Steam image URL, so it requires an internet connection.

## Deployment

The static files can be deployed to Vercel from this directory with Framework Preset **Other** and no build command.
