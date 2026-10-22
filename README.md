# External Links in New Tab

A tiny WordPress plugin that forces every external link on the front end to
open in a new tab, so visitors are never sent away from your site.

## What it does

A small footer script scans every link on the page. If a link points to a
different host than the site itself (ignoring a `www.` prefix), it gets:

- `target="_blank"` — opens in a new tab
- `rel="noopener"` — added if not already present, so the new page can't
  tamper with yours

Internal links are left completely alone, and so are anchors (`#...`),
`mailto:`, `tel:`, and relative URLs.

## Installation

1. Download or clone this repo.
2. Copy the `cb-external-links-new-tab.php` and `external-links.js` files
   into a folder named `cb-external-links-new-tab` inside your site's
   `wp-content/plugins/` directory — or zip that folder and upload it via
   **Plugins → Add New → Upload Plugin**.
3. Activate **Captain Baltimore External Links in New Tab** in the Plugins
   list.

That's it. No settings page, no configuration — it works on every
front-end page automatically, including posts and pages published later.

## Files

- `cb-external-links-new-tab.php` — plugin bootstrap; enqueues the script
  in the footer on the front end only.
- `external-links.js` — the link rewriting script.

## Version

1.0.0 — verified live on captainbaltimore.com (homepage, a news post, and
an event page: external links open in a new tab, internal links untouched,
no page breakage).

## License

MIT — see `LICENSE`.
