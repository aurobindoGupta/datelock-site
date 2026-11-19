---
layout: guide
title: How to Set Up DateLock on Shopify
heading: Set up DateLock, step by step
description: Set up DateLock on Shopify. Turn on the calendar, set your delivery rules, require a date at checkout, and show the date in emails and on orders.
lead: Steps 1 to 5 get you collecting delivery dates. Steps 6 to 9 are optional, and each one works on its own.
last_modified_at: 2026-11-19
---

## 1. Install DateLock

Install DateLock from the [Shopify App Store]({{ site.app_store_url }}). It opens in your Shopify admin. You'll find it in the sidebar under **Apps**, with **Delivery rules** below it.

Installing changes nothing for your customers yet. The calendar stays hidden until step 2, and checkout won't ask for a date until step 5. Until then, the app shows **Finish setup to start collecting delivery dates**.

## 2. Turn on the app embed

DateLock adds the calendar to your store through a theme app embed. App embeds are off until you switch them on, so you do this once. It works on any theme and changes no theme code.

1. In DateLock, under **Setup: turn on the DateLock app embed**, click **Turn on the app embed**. Your theme editor opens with the DateLock embed selected.
2. Make sure **DateLock Gatekeeper** is switched on, then click **Save** at the top right.

If the button doesn't open the editor, do it by hand. Click **Online Store** in your Shopify admin, then **Edit theme** on your current theme. In the editor, click the **App embeds** icon at the top left, switch on **DateLock Gatekeeper**, and click **Save**.

<figure class="shot">
  <img src="{{ '/assets/setup-app-embed.jpg' | relative_url }}" alt="Shopify's theme editor with the App embeds panel open and DateLock Gatekeeper switched on" width="1000" height="420" loading="lazy" tabindex="0">
  <figcaption>The App embeds panel in Shopify's theme editor.</figcaption>
</figure>

## 3. Set your delivery rules

Open **Delivery rules**, under DateLock in your admin sidebar. A new store starts with no rules, and the page says **No delivery rules yet**.

- **Preset.** Pick Bakery, Florist or Meal-kit and click **Apply preset** to fill in starting values. This replaces your current cutoff, lead time and blackout dates, and you can change any of them before you save.
  - Bakery: order 1 day ahead, cutoff 14:00.
  - Florist: same day, cutoff 12:00.
  - Meal-kit: 2 days ahead, cutoff 12:00.
- **Cutoff time.** The time each day, in 24-hour store time, when ordering for the earliest day stops. After it, the earliest delivery day moves one day later. Leave it blank for no cutoff.
- **Lead time.** The fewest days' notice you need, from 0 (today is allowed) up to 365.
- **Blackout dates.** Days you can't deliver. Choose a date and click **Add date**. There's no weekly repeat, so add each day. Dates that have passed move to their own list, and **Remove past dates** clears them.

Click **Save rules** at the top right when you're done.

<figure class="shot">
  <img src="{{ '/assets/setup-rules.jpg' | relative_url }}" alt="DateLock's Delivery rules page with a 14:00 cutoff, a lead time of 2 days, one upcoming blackout date and four past ones" width="975" height="550" loading="lazy" tabindex="0">
  <figcaption>Delivery rules. Past blackout dates sit in their own list.</figcaption>
</figure>

Closing over the holidays? See [Holiday closures]({{ '/holiday-closures/' | relative_url }}).

## 4. Check the calendar on your store

Open your store, add a product to your cart, and click **Check out**. DateLock asks for a delivery date before checkout opens. Days your rules don't allow are greyed out.

<figure class="shot">
  <img src="{{ '/assets/setup-calendar.jpg' | relative_url }}" alt="The DateLock calendar titled Choose your delivery date, with past days and days inside the lead time greyed out" width="397" height="507" loading="lazy" tabindex="0">
  <figcaption>What a customer sees after clicking Check out (our test store, 2-day lead time).</figcaption>
</figure>

No calendar? Go back to step 2 and check that the app embed is switched on and saved.

## 5. Turn on enforcement

Once the calendar shows on your store, go back to DateLock and click **The picker is live — turn on enforcement**. The app then shows **Delivery-date enforcement is active**.

Enforcement adds a Shopify checkout rule. Checkout stops, with a message telling the customer what to fix, when the date is:

- missing,
- in the past,
- a blackout date, or
- inside your lead time.

Shopify runs the rule on express checkouts like Shop Pay and PayPal too.

Turn it on only after the calendar shows. If the app embed is off, customers are stopped at checkout with no way to choose a date.

To switch it off, click **Turn off enforcement**. The calendar is a separate switch: while the app embed is on, customers are still asked for a date before checkout. To stop asking completely, turn the app embed off too. If the calendar ever stops showing on your store, turn enforcement off so customers can still check out while you fix it.

## 6. Optional: show the date on the Thank-you and Order status pages

Every order already carries the date. This step shows it to the customer after they buy. Shopify doesn't place app blocks for you, so add them once:

1. Go to **Settings → Checkout**.
2. Under **Configurations**, click **Edit** on your active configuration.
3. In the editor, click the **Apps** icon at the top left.
4. Click **⊕** next to the block you want.
5. In the **Add to** pop-out, click the page for that block.
6. Click **Save**.

There are two blocks, one for each page:

- **delivery-date-display** goes on the **Thank you** page, right after checkout.
- **delivery-date-account** goes on the **Order status** page that customers come back to later.

The date shows only on orders placed after you save, so test with a new order. Available on Basic and above.

<figure class="shot">
  <img src="{{ '/assets/setup-checkout-blocks.jpg' | relative_url }}" alt="Shopify's checkout editor with the Apps panel listing delivery-date-display and delivery-date-account, and the Add to pop-out showing Thank you" width="900" height="420" loading="lazy" tabindex="0">
  <figcaption>The Apps panel in Shopify's checkout editor.</figcaption>
</figure>

<figure class="shot">
  <img src="{{ '/assets/shot-thankyou.png' | relative_url }}" alt="Shopify thank-you page showing Delivery date July 18, 2026 in the order summary" width="1600" height="900" loading="lazy" tabindex="0">
  <figcaption>The date on the Thank-you page.</figcaption>
</figure>

## 7. Optional: add the date to the order confirmation email

1. Go to **Settings → Notifications → Customer notifications → Order confirmation**.
2. Click **Edit code**.
3. Paste the snippet below inside the email body, between the `<body>` and `</body>` tags. To show it just below the order total, paste it right before the "Customer information" section.
4. Click **Save**.

The email then shows "Delivery date selected:" followed by the customer's date, for example December 1, 2026.

Test it with a real order. Shopify's **Preview** and **Send test** use sample data, so the date only shows on a real order placed after you save.

{% raw %}
```liquid
{% for attribute in attributes %}
  {% if attribute.first == "delivery_date" and attribute.last != blank %}
    {% assign dl_parts = attribute.last | split: "-" %}
    {% assign dl_months = "January,February,March,April,May,June,July,August,September,October,November,December" | split: "," %}
    {% assign dl_midx = dl_parts[1] | plus: 0 | minus: 1 %}
    <p style="font-size: 22px; margin: 16px 0;">
      Delivery date selected: <strong>{{ dl_months[dl_midx] }} {{ dl_parts[2] | plus: 0 }}, {{ dl_parts[0] | plus: 0 }}</strong>
    </p>
  {% endif %}
{% endfor %}
```
{% endraw %}

<figure class="shot">
  <img src="{{ '/assets/setup-email-snippet.jpg' | relative_url }}" alt="Shopify's Edit Order confirmation page with the DateLock snippet pasted just above the Customer information heading" width="1005" height="455" loading="lazy" tabindex="0">
  <figcaption>The snippet pasted just before Customer information.</figcaption>
</figure>

## 8. Optional: dates on draft orders

Orders your staff create as draft orders skip your storefront, so they never see the calendar. DateLock adds a card to the draft order page that copies the draft's **Delivery date** field to where checkout reads it. The order then completes with the date saved and tagged like a storefront order.

1. In DateLock, under **Draft orders**, click **Turn on draft-order dates**.
2. Approve Shopify's prompt to let DateLock edit draft orders. It only writes the delivery date and its tag.
3. Click **Open draft orders** and open any draft order.
4. Under **Blocks**, click **+ Block** and choose **DateLock delivery date**.
5. Click the card's pin icon so it shows on every draft.
6. Set the draft's **Delivery date** field and save the draft. Within a few seconds the card shows **Ready for checkout**. If the draft has no Delivery date field, the card offers to add it.

Your lead time and blackout dates apply to these orders at checkout, and drafts with a date count toward your monthly orders.

<figure class="shot">
  <img src="{{ '/assets/setup-draft-card.jpg' | relative_url }}" alt="A Shopify draft order with the Delivery date metafield and the DateLock delivery date card showing No delivery date" width="770" height="345" loading="lazy" tabindex="0">
  <figcaption>The DateLock card on a draft order with no date yet.</figcaption>
</figure>

## 9. Recommended: avoid two different delivery promises

Shopify can show its own delivery estimate at checkout, next to the date your customer chose. When the two disagree, customers trust the wrong one. Check two things:

- **Delivery estimates.** Go to **Settings → Shipping and delivery → Delivery estimates**. Shopify offers Automated, Manual and Off. Automated and Manual show Shopify's own delivery dates. Off shows only the transit time or description on your shipping rates. Shopify marks Automated as Recommended, so weigh it for your store.
- **Shipping rates.** Even with estimates off, a rate can show a transit time such as "3 to 4 business days". Check your rates under **Settings → Shipping and delivery → Shipping options**, and make sure what they say agrees with how you deliver. If Shopify shows "Shipping has moved to Markets", you edit the rates there.

<figure class="shot">
  <img src="{{ '/assets/setup-delivery-estimates.jpg' | relative_url }}" alt="Shopify's Delivery estimates dialog with the options Automated, Manual and Off, with Off selected" width="616" height="600" loading="lazy" tabindex="0">
  <figcaption>Shopify's Delivery estimates setting.</figcaption>
</figure>

## Where to find the date on an order

Open any order with a delivery date in your Shopify admin:

- **Metafields → Delivery date**, for example Dec 1, 2026.
- **Additional details → delivery_date**, as 2026-12-01.
- **Tags → Delivery: 2026-12-01.** Filter your orders by this tag to see what's due on a day.

While enforcement is on, an order that comes in without a date is tagged `DateLock: missing-date`, so you can find it.

<figure class="shot">
  <img src="{{ '/assets/setup-order-date.jpg' | relative_url }}" alt="A Shopify order showing Delivery date Dec 1, 2026 under Metafields, delivery_date 2026-12-01 under Additional details, and the tag Delivery: 2026-12-01" width="1094" height="191" loading="lazy" tabindex="0">
  <figcaption>The same date in three places on the order.</figcaption>
</figure>

## Your plan and monthly count

The DateLock home page shows **This month's delivery-date orders**. It counts every order with a delivery date, whether a customer chose it or your staff entered it on a draft order. Free covers 50 a month with every feature, and Pro has no limit ([see pricing]({{ '/#pricing' | relative_url }})).

The app tells you when you're close to your limit. On Free, going over 50 sends you an email. 24 hours later, date collection pauses until the next month or until you upgrade. Checkout keeps working the whole time. To change plans, click **Upgrade plan** (or **Change plan** on a paid plan).

## If DateLock shows a warning

- **Finish setup to start collecting delivery dates.** Enforcement isn't on yet. Finish steps 2 to 5.
- **Delivery-date enforcement is OFF.** Shopify reports the checkout rule as inactive or failing, so customers can check out without a date. Click **Re-enable enforcement**.
- **Enforcement recently reported an error.** The rule is on but reported an error. If customers have trouble at checkout, click **Re-enable enforcement**.
- **Delivery-date collection is paused.** You're over the Free limit. Collection starts again on the 1st of next month, or right away if you upgrade. Checkout isn't affected.
- **Your picker may still be blocking checkout.** Enforcement is off, but if the app embed is still on, customers are still asked for a date. Turn the app embed off too, or turn enforcement back on.

## What DateLock doesn't cover

Point of Sale sales, subscription renewals and orders created by other apps. Shopify doesn't run checkout rules on these, so DateLock can't require a date on them.

Stuck on a step? Email [aurogpt10@gmail.com](mailto:aurogpt10@gmail.com).
