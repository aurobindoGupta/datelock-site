# datelock-site

Marketing + legal site for **DateLock**, a Shopify app that makes the delivery date land on
the order and keeps checkout from breaking.

- **Live:** https://getdatelock.com
- **App Store listing:** https://apps.shopify.com/datelock
- **App repo:** `shopify_datelock` (private)

Static [Jekyll](https://jekyllrb.com/) site (`minima` theme) served by **GitHub Pages** from
`main`, on the custom domain in `CNAME`. Kept in a separate repo from the app so it can't be
knocked out by an app deploy and has no cold start.

## Contents

| Path | What |
|---|---|
| `index.md` | Landing page (`home` layout) |
| `demo.html` | Standalone "how it works" walkthrough — self-contained, not a Jekyll layout |
| `privacy-policy.md` | Privacy Policy — the App Store listing's required privacy URL |
| `terms-of-use.md` | Terms of Use |
| `data-processing-agreement.md` | Merchant DPA (GDPR Art. 28) — mirrors `datelock/docs/DPA.md`, **keep in sync** |
| `_layouts/`, `_includes/` | `default` / `home` / `page` layouts; favicon + head partials |
| `assets/css/site.css` | All site styling |
| `assets/` | Favicons (from the app's `brand/icons`), screenshots, `demo.mp4` + poster |

## Configuration

`_config.yml` holds one switch worth knowing:

- **`app_store_url`** — when set, every CTA renders as **"Add to Shopify"** pointing at the
  listing. Blank falls back to a "Get early access" `mailto:`. It is currently set to the
  live listing.
- `header_pages` — the nav lists only the legal pages; the brand mark doubles as Home.

## Deploying

**Push to `main` and GitHub Pages rebuilds.** There is no CI step and no manual publish.

⚠️ **The site cannot be built locally — there is no `Gemfile`.** So verify changes against
the *served* asset, not a local render, and remember the build lags a push by roughly a
minute:

```shell
curl -s "https://getdatelock.com/assets/css/site.css?cb=$(date +%s)" | wc -c
```

Compare that against the local file. If the byte count still matches the old version, the
build hasn't landed yet — wait, don't re-push.

## Keeping it honest

The listing and this site are two shop windows onto the same product, and merchants compare
them. When pricing, caps, or claims change on one, change the other in the same session:

- Plan prices and monthly order caps must match the App Store listing **and**
  `datelock/app/lib/plan-tier.ts` (`TIER_ORDER_CAPS`).
- Don't publish a support promise the app can't back.
- The DPA here and `datelock/docs/DPA.md` are the same document in two places.
