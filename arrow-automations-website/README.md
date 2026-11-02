# Arrow Automations website

Plain HTML, CSS and JavaScript. No build step needed.

## Run locally
Open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit http://localhost:8000.

## Folder structure
- `index.html` - page content and SEO metadata
- `css/style.css` - all styling (colors are variables at the top)
- `js/main.js` - services data, portfolio filter, mobile menu, form
- `images/` - put your photos here

## Changing machine photos
Photos live in `images/`. To replace one, save a new file with the same name (for example `images/single-capping.jpg`). To add a machine, add a line to the `PR` list in `js/main.js` (title, category number, image name, description).

## Contact form
The form opens a prefilled WhatsApp or email message. To use a backend or form service later, edit the `submit` handler at the bottom of `js/main.js`.

## Deploy
Upload the whole folder to any static host (Netlify, Vercel, GitHub Pages, or your own hosting).
