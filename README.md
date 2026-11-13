# macOS Clone

An open-source macOS-inspired desktop UI built with React, TypeScript, and Vite. It is a visual/demo project and does not provide production authentication or a real operating system.

## Features

- macOS-style desktop, menu bar, dock, windows, and apps
- Responsive login screen with a local demo session
- Interactive maps, gallery, terminal, and utility windows
- React, TypeScript, Tailwind CSS, and Vite

## Getting started

Requirements: Node.js 18 or newer.

```bash
npm install
npm run dev
```

Open the local URL shown by Vite. To create a production build:

```bash
npm run build
npm run preview
```

## Deploying

The project is a static Vite site and can be deployed directly to Vercel, Netlify, or GitHub Pages.

Recommended Vercel settings:

- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm ci`

The included [`vercel.json`](./vercel.json) keeps client-side routes working on refresh. For GitHub Pages, configure the host to serve `index.html` as the SPA fallback.

## Release checklist

Before publishing a fork or deployment:

1. Run `npm ci`, `npm run lint`, and `npm run build`.
2. Keep `.env` files, API keys, private tokens, and real passwords out of Git.
3. Review third-party asset licenses and keep required attribution visible.
4. Treat the login as a public demo gate, not user authentication.

## Demo login

This project uses intentionally public, client-side demo credentials. They are not real credentials and must not be used for sensitive data:

- Email: `user@example.com`
- Password: `User1234`

The login is only a UI/demo gate. It stores a demo token in `sessionStorage`, which is cleared when the browser tab/session ends; it is not secure authentication.

## External assets and attribution

The project references third-party assets at runtime rather than bundling them as private project assets:

- Background photos use Unsplash CDN URLs. Keep photographer/source attribution and follow the [Unsplash License](https://unsplash.com/license) before deploying or changing these images.
- Map tiles use OpenStreetMap. The map UI must display `© OpenStreetMap contributors` and follow the [OpenStreetMap attribution requirements](https://www.openstreetmap.org/copyright).
- SVG Repo icons have per-icon licensing. Review the individual icon page at [SVG Repo](https://www.svgrepo.com/) before redistributing an icon.
- Apple, Google, YouTube, GitHub, X, and other brand imagery remains the property of its respective owner. These references are for demonstration only and are not an endorsement.

Do not add real API keys, passwords, tokens, or private credentials to this repository. Use environment variables only for public, non-secret configuration and keep `.env` files untracked.

## License

This project is released under the MIT License. See [LICENSE](./LICENSE).
