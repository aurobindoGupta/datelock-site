# getdatelock-site

Marketing + legal site for the **DateLock** Shopify app. Static Jekyll site served
by **GitHub Pages** at the custom domain **getdatelock.com** (see `CNAME`).

- `index.md` — landing page
- `privacy-policy.md` — Privacy Policy (draft; used for the App Store listing's required privacy URL)
- `terms-of-use.md` — Terms of Use (draft)
- `assets/` — favicons (from the app's `brand/icons`)

Separate repo from the app (`shopify_datelock`) so it can't be knocked out by an
app deploy and has no cold start.

## Publish (GitHub Pages)
1. Push to a public GitHub repo.
2. Settings → Pages → Source: `main` branch, `/ (root)`.
3. Add the custom domain `getdatelock.com` (the `CNAME` file is already here); point the
   domain's DNS to GitHub Pages, and enable "Enforce HTTPS".

Until the domain is live, the site is reachable at `https://<user>.github.io/<repo>/`.

## TODO before release
Legal-review the privacy policy + terms; build a proper landing page. (See the
DateLock task list / Phase 4 04-05.)
