---
layout: page
title: Privacy Policy
permalink: /privacy-policy/
---

# Privacy Policy

_Last updated: 18 July 2026_

This Privacy Policy explains what data the **DateLock** app ("DateLock", "we", "us") collects when a merchant installs it on their Shopify store, how we use it, and the choices available. DateLock is a delivery-date app for Shopify stores. Merchants: see also our [Data Processing Agreement]({{ '/data-processing-agreement/' | relative_url }}).

## Who this applies to

DateLock is installed by **merchants** on their Shopify stores. We interact with the merchant's store data through Shopify's APIs. We do not run a consumer service and do not knowingly collect data directly from a store's shoppers.

## What we collect and why

- **Store identity & access.** When you install DateLock, Shopify provides your store's `.myshopify.com` domain and an access token. We store these so the app can authenticate to Shopify and function.
- **Order delivery dates.** When an order is placed, Shopify sends DateLock an `orders/create` webhook. We read the customer-selected **delivery date** from the order's attributes and write it back onto the order (as an order metafield and tag) so it is visible to your fulfillment team. The delivery date is a calendar date — not personal information.
- **Usage metering.** To enforce plan limits, we store a per-order record (your store domain, the order ID, and the calendar month) so we can count delivery-date orders per month. The order ID is used only to avoid double-counting.
- **Billing state.** We store your plan tier and related billing status. Payments are handled by **Shopify** — DateLock never sees or stores card or bank details.

We do **not** collect or store shoppers' names, email addresses, shipping addresses, or payment information.

## Where your data is stored

DateLock is hosted on **Render** (United States), including a managed PostgreSQL database. Data is transmitted over encrypted (HTTPS/TLS) connections.

## Sub-processors

- **Shopify** — the platform the app runs on; source of store and order data.
- **Render** — application hosting and database.
- **Resend** — transactional email (e.g., a notice if your store approaches its plan limit).

## Data requests, deletion & GDPR

DateLock implements Shopify's mandatory privacy webhooks:

- **`customers/data_request`** — if a shopper requests their data via a merchant, we respond with any data we hold (DateLock does not store shopper personal data).
- **`customers/redact`** — we delete any data associated with the identified customer.
- **`shop/redact`** — after a store uninstalls DateLock, Shopify sends this webhook and we delete the store's data.

When you **uninstall** DateLock, we stop collecting new data and delete your store's data on the `shop/redact` signal.

## Data retention

We retain store data only while DateLock is installed, and delete it following uninstall/redaction as described above.

## Changes to this policy

We may update this policy. Material changes will be reflected by the "Last updated" date above.

## Contact

Questions about this policy or your data: **aurogpt10@gmail.com**.
