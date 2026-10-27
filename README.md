# datelock-site

Marketing and legal site for **DateLock**, a Shopify app: customers pick a delivery date before
checkout, checkout needs one to finish, and the date is saved on the order.

- **Live:** https://getdatelock.com
- **App Store listing:** https://apps.shopify.com/datelock

## About

Static [Jekyll](https://jekyllrb.com/) site served by GitHub Pages on a custom domain. It is
kept separate from the application so the marketing and legal pages stay available
independently of the app, with no cold start.

| Path | Contents |
|---|---|
| `index.md` | Landing page |
| `privacy-policy.md` | Privacy Policy |
| `terms-of-use.md` | Terms of Use |
| `data-processing-agreement.md` | Merchant Data Processing Agreement (GDPR Art. 28) |
| `404.html` | Not-found page (GitHub Pages serves it with status 404) |
| `favicon.ico` | Browser tab icon (16, 32, 48 px) |
| `robots.txt` | Lets every crawler in and points to `sitemap.xml` (built by jekyll-sitemap) |
| `_layouts/`, `_includes/` | Page templates and shared partials |
| `assets/` | Stylesheet, icons, screenshots, and demo media |

---

© PandaTech. Site content and brand assets are proprietary; all rights reserved.
