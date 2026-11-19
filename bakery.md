---
layout: guide
title: Delivery Dates for Shopify Bakeries
heading: Delivery dates for Shopify bakeries
description: Set how much notice your bakery needs, stop orders for the next day after your cutoff, block the days you're closed, and see each day's orders.
lead: Customers choose the day they want their order. You decide how much notice you need, when ordering for the earliest day stops, and which days you're closed.
last_modified_at: 2026-11-19
---

## Start from the Bakery preset

In DateLock, open **Delivery rules**, pick **Bakery** and click **Apply preset**. It fills in a lead time of 1 day and a cutoff of 14:00. You can change either before you click **Save rules**.

With those settings, a customer ordering on Monday morning can choose Tuesday or later. From 14:00 on Monday, the earliest day they can choose is Wednesday. Times follow your store's time zone.

## Need more notice?

If your cakes need 48 hours' notice, set the lead time to 2. On Monday, the earliest day is then Wednesday, or Thursday once your cutoff has passed.

Rules apply to your whole store, not to each product. If some items are ready the next day and others need 48 hours, set the lead time for the item that needs the most notice.

<figure class="shot">
  <img src="{{ '/assets/setup-rules.jpg' | relative_url }}" alt="DateLock's Delivery rules page with a 14:00 cutoff, a lead time of 2 days, one upcoming blackout date and four past ones" width="975" height="550" loading="lazy" tabindex="0">
  <figcaption>Delivery rules on our test store: a 14:00 cutoff and 2 days' lead time.</figcaption>
</figure>

## Days you're closed

Add each day you're closed under **Blackout dates**. There's no weekly repeat, so if you're closed every Sunday, add each Sunday. Closing over Christmas and New Year? See [Holiday closures]({{ '/holiday-closures/' | relative_url }}).

## When a day is full

DateLock doesn't limit how many orders you take for a day. When a day is full, add it as a blackout date. The calendar stops offering it, and with enforcement on, checkout won't accept it. Orders already placed for that day stay as they are.

## Checkout checks the date

Once you turn on enforcement, checkout stops and asks for another date when the date is missing, in the past, a blackout date, or inside your lead time. Shopify runs the rule on express checkouts like Shop Pay and PayPal too. Your cutoff time works in the calendar.

## Plan each day's baking

Each dated order is tagged with its day, like `Delivery: 2026-12-01`. Filter your orders by that tag to see everything due that day.

<figure class="shot">
  <img src="{{ '/assets/setup-order-date.jpg' | relative_url }}" alt="A Shopify order showing Delivery date Dec 1, 2026 under Metafields, delivery_date 2026-12-01 under Additional details, and the tag Delivery: 2026-12-01" width="1094" height="191" loading="lazy" tabindex="0">
  <figcaption>The date on an order, including the tag.</figcaption>
</figure>

## Phone orders

Staff can take an order by phone as a draft order and set its delivery date there. Once draft-order dates are on, the order gets its date and tag like a website order, and your lead time and blackout dates apply at checkout. See [draft orders in the setup guide]({{ '/setup-guide/#8-optional-dates-on-draft-orders' | relative_url }}).

## What it doesn't cover

Point of Sale sales, subscription renewals and orders created by other apps. Shopify doesn't run checkout rules on these, so DateLock can't require a date on them.

To set it all up, follow the [setup guide]({{ '/setup-guide/' | relative_url }}).
