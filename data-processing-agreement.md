---
layout: page
title: Data Processing Agreement
permalink: /data-processing-agreement/
---

# Data Processing Agreement

_Last updated: 18 July 2026_

This Data Processing Agreement ("DPA") is between the merchant operating a Shopify store ("**Merchant**", the **controller**) and **Aurobindo Gupta**, a solo developer operating the DateLock app ("**DateLock**", "we", the **processor**). It supplements our [Privacy Policy]({{ '/privacy-policy/' | relative_url }}) and governs how DateLock processes personal data on the Merchant's behalf. "Controller", "processor", "personal data", "processing", and "personal data breach" have the meanings given in the GDPR (Regulation (EU) 2016/679).

## 1. Roles

- The **Merchant is the controller** of the personal data in its Shopify store and decides why and how it is processed.
- **DateLock is a processor**, acting only on the Merchant's documented instructions — installing and using the app, and this DPA — including for any transfer of data, unless the law requires otherwise (in which case we tell the Merchant first, unless the law forbids it).
- **Shopify** is the platform; DateLock only accesses store data through Shopify's APIs and webhooks.

## 2. What the processing covers

- **Purpose:** let shoppers choose a delivery date at checkout, write that date onto the Merchant's orders for fulfilment, and count delivery-date orders per month to apply plan limits.
- **Nature:** automated collection, storage, use, and deletion of the data described in §3.
- **Duration:** for as long as DateLock is installed. On uninstall, data is deleted as in §9.
- **Data subjects:** (a) the Merchant's **shoppers**, whose order carries a chosen delivery date; (b) the Merchant's **staff** who install or run the app.
- **Type of data:** the minimal set in §3. No special-category (sensitive) data.

## 3. What data we process

DateLock holds **minimal personal data** and keeps **no separate store of shopper data**. What we store:

| What | Details | Personal data? |
|---|---|---|
| **Store credentials** | The store's `.myshopify.com` domain and a Shopify **offline** access token | The token is a credential. We use offline tokens only, so **we store no staff names or emails**. |
| **Usage records** | Store domain, Shopify order ID, and calendar month, to count delivery-date orders | The order ID is a store identifier, used only to avoid double-counting. |
| **Billing state** | Store domain, plan/tier, and limit/status timestamps | No shopper data. |

**Written onto the order (stored by Shopify, not by us):** the chosen **delivery date**, as an order metafield, an order tag, and an order attribute — so your fulfilment team can see it. A calendar date on its own is not personal data.

**Shared with a sub-processor:** to send a plan-limit notice, we send the **Merchant's own email address** to our email provider (§5). No shopper data is shared.

We do **not** store shoppers' names, email addresses, shipping addresses, or payment details. Payments are handled entirely by **Shopify** — we never see card or bank data.

## 4. Our obligations

- **Instructions.** We process personal data only on the Merchant's documented instructions (§1).
- **Confidentiality.** Anyone we authorize to process the data is bound by confidentiality.
- **Security.** We use appropriate technical and organizational measures, including encryption in transit (HTTPS/TLS), restricted access to our production systems and database, data minimization (§3), and reputable hosting/email providers (§5). We review these as the app evolves.

## 5. Sub-processors

The Merchant gives **general authorization** for us to use the sub-processors below. We hold each to data-protection terms **no less protective** than this DPA, and we **remain responsible** for their performance.

| Sub-processor | Purpose | Location |
|---|---|---|
| **Shopify** | Platform of record; source of store and order data | Per Shopify's terms |
| **Render** | App hosting + managed PostgreSQL database | United States |
| **Resend** | Transactional email (plan-limit notice to the Merchant) | United States |

We will give **30 days'** notice before adding or replacing a sub-processor. The Merchant may **object on reasonable data-protection grounds**; if we can't resolve it, the Merchant may terminate by uninstalling.

## 6. Data subject rights

We help the Merchant respond to data-subject requests (access, rectification, erasure, restriction, portability, objection). Because we hold no separate store of shopper data (§3), most requests need no action beyond the Merchant's own Shopify admin; we will provide or delete any data within our control on request.

## 7. Personal data breaches

We notify the Merchant of any personal data breach affecting its data **without undue delay, and within 72 hours of becoming aware**, with the information the Merchant needs for its own obligations, and we cooperate in good faith on fixing it.

## 8. Assistance

Taking into account the nature of processing and the information available to us, we assist the Merchant with its obligations on security, breach notification, data protection impact assessments, and prior consultation.

## 9. Deletion & return

- When processing ends, we **delete** the Merchant's personal data. At the Merchant's choice we will instead **return** it first, where technically feasible, unless the law requires us to keep it.
- We implement Shopify's three mandatory compliance webhooks (one HMAC-verified endpoint):
  - **`customers/data_request`** — we hold no separate shopper data to compile.
  - **`customers/redact`** — nothing on our side to erase for an individual shopper.
  - **`shop/redact`** (about 48h after uninstall) — we **delete every record tied to that store**; repeat deliveries are harmless.
- On uninstall we stop collecting new data and delete the store's data on the `shop/redact` signal.

## 10. Audit & compliance

We make available the information reasonably needed to show compliance. Given our solo-operator scale, we meet audit obligations by **providing documentation and answering a reasonable written data-protection questionnaire once a year**, rather than on-site inspection, unless a mandatory audit is required by law or a supervisory authority.

## 11. International transfers

Data is hosted in the **United States** (Render). Where personal data of people in the EEA, UK, or Switzerland goes to a country without an adequacy decision, the transfer relies on the applicable **Standard Contractual Clauses (EU 2021/914)** — with the UK and Swiss addenda where relevant — **incorporated into this DPA by reference**, which we provide in executed form on request. We rely on our sub-processors' own transfer safeguards for onward transfers.

## 12. Liability

Liability under this DPA is subject to the limitations and exclusions in the DateLock [Terms of Use]({{ '/terms-of-use/' | relative_url }}). Nothing here limits any liability that cannot be limited under applicable law.

## 13. Governing law

This DPA is governed by the laws of **India**, and the parties submit to the competent courts of India — without prejudice to any mandatory data-subject protections or supervisory-authority remedies under the GDPR.

## 14. How this applies

This DPA is **incorporated into the DateLock [Terms of Use]({{ '/terms-of-use/' | relative_url }})**; by installing or using DateLock, the Merchant agrees to it. If there is any conflict on data-protection matters, this DPA prevails.

## 15. Contact

Data protection questions: **aurogpt10@gmail.com**.
