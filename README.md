# Rhodas Demissew portfolio

A single-page portfolio built with React, TypeScript, and Vite. Public copy is based on the supplied CV and recommendation materials. The original documents stay in the project workspace and are not copied into the website's `public` directory.

Project screenshots open in an in-page preview. Close it with the button, Escape, or a click outside the image.

## Setup

Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. To check a production build:

```bash
npm run build
npm run preview
```

On Windows PowerShell systems that block `npm.ps1`, use `npm.cmd` in these commands.

## Deployment

Run `npm run build` and deploy the generated `dist/` directory to any static host. Set the publish directory to `dist`. The site uses section anchors and has no server routes. The contact form sends through Web3Forms. Create an access key at https://web3forms.com/ for the receiving email address, then add it to a local `.env` file as `VITE_WEB3FORMS_ACCESS_KEY=your-key`. The key is public in the built website, as Web3Forms documents. Set the same variable in your hosting platform before building or deploying. Without a key, the send button stays disabled and visitors can use the displayed email link.

After adding the key, send a test inquiry and confirm that it reaches the inbox.

## Updating content

- Edit `src/content.ts` for the biography, project summaries, services, experience, recommendations, certification links, repository links, contact details, CV link, and image references.
- Replace the public images in `public/images/`. Keep the filenames or update the paths in `src/content.ts`.
- Edit `src/styles.css` for layout, colors, and typography.
- Edit `index.html` for the browser title and search description.
- Run `npm run build` after changes.

The project screenshots in `Screenshots/` are source assets. Only selected copies in `public/images/` ship with the site. Do not move CVs, recommendation letters, or private project source into `public/`.

## Factual details to confirm before publishing

1. Is the UNICEF project name and your role approved for public display by DAFTech and the client? The current copy uses the supplied CV wording.
2. Are the SIS and HiLCoE screenshots cleared for public display, including any visible names or records? Replace or redact them if needed.
3. Do you want a specific volunteering or community role listed? The supplied materials do not document one, so the site currently avoids a factual claim.
4. Should the learning-platform project identify Dr. Nega Education Center publicly? The current project heading stays generic while the work history follows the supplied CV.

The two supplied recommendations and three certificate links are included. The third recommendation is intentionally omitted for now. SIS and HiLCoE RMS link to their supplied GitHub repositories; other organization repositories remain private.

## Project structure

```text
src/content.ts     Public-facing content and image paths
src/main.tsx       Page sections and navigation
src/styles.css     Layout and visual design
public/images/     Images copied into the published site
Screenshots/       Original supplied image files (not published directly)
```
