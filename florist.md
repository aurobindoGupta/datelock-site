---
layout: guide
title: Delivery Dates for Shopify Florists
heading: Delivery dates for Shopify florists
description: Offer same-day flower delivery until your cutoff, block the days you don't deliver, and give phone orders a delivery date and tag too.
lead: Customers choose the day their flowers arrive. You set your same-day cutoff, block the days you don't deliver, and plan for the busy weeks.
last_modified_at: 2026-11-19
---

## Same-day delivery until your cutoff

In DateLock, open **Delivery rules**, pick **Florist** and click **Apply preset**. It allows same-day delivery with a cutoff of 12:00. You can change the cutoff before you click **Save rules**.

With those settings, a customer ordering before noon can choose today. From noon, the earliest day they can choose is tomorrow. Times follow your store's time zone.

<figure class="shot">
  <img src="{{ '/assets/setup-calendar.jpg' | relative_url }}" alt="The DateLock calendar titled Choose your delivery date, with past days and days inside the lead time greyed out" width="397" height="507" loading="lazy" tabindex="0">
  <figcaption>What a customer sees after clicking Check out (our test store, 2-day lead time).</figcaption>
</figure>

## Days you don't deliver

Add each day you don't deliver under **Blackout dates**. There's no weekly repeat, so if you don't deliver on Sundays, add each Sunday. Closing over Christmas and New Year? See [Holiday closures]({{ '/holiday-closures/' | relative_url }}).

## Valentine's Day and Mother's Day

Before a busy week, raise your lead time so orders come in with more notice, and lower it again afterwards. With a lead time of 2, for example, the last orders for 14 February come in on 12 February, before your cutoff.

DateLock doesn't limit how many orders you take for a day. When a day is full, add it as a blackout date. The calendar stops offering it, and with enforcement on, checkout won't accept it. Orders already placed for that day stay as they are.

## Checkout checks the date

Once you turn on enforcement, checkout stops and asks for another date when the date is missing, in the past, a blackout date, or inside your lead time. Shopify runs the rule on express checkouts like Shop Pay and PayPal too. Your cutoff time works in the calendar.

## Phone orders

Staff can take an order by phone as a draft order and set its delivery date there. Once draft-order dates are on, the order is saved with its date and tagged like a website order. See [draft orders in the setup guide]({{ '/setup-guide/#8-optional-dates-on-draft-orders' | relative_url }}).

<figure class="shot">
  <img src="{{ '/assets/setup-draft-card.jpg' | relative_url }}" alt="A Shopify draft order with the Delivery date metafield and the DateLock delivery date card showing No delivery date" width="770" height="345" loading="lazy" tabindex="0">
  <figcaption>The DateLock card on a draft order, before a date is set.</figcaption>
</figure>

## See what's going out each day

Each dated order is tagged with its day, like `Delivery: 2026-12-01`. Filter your orders by that tag to see every delivery for that day.

## What it doesn't cover

Point of Sale sales, subscription renewals and orders created by other apps. Shopify doesn't run checkout rules on these, so DateLock can't require a date on them.

To set it all up, follow the [setup guide]({{ '/setup-guide/' | relative_url }}).
