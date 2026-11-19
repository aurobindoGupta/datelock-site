---
layout: guide
title: Shopify Holiday Closures and Blackout Dates
heading: Closed over Christmas and New Year? Keep taking orders.
description: A different take on Shopify vacation mode. Block the days you're closed over Christmas and New Year, and customers can still order for after you reopen.
lead: Block the days you're closed. Customers can still order now for any day after you reopen, and with enforcement on, checkout won't accept a day you've blocked.
last_modified_at: 2026-11-19
---

## Vacation mode vs. blocking the days

Looking for a vacation or holiday mode? If you pause or close your store while you're away, nobody can order, not even for a day after you're back.

DateLock keeps your store open and blocks only the days you can't deliver. A customer shopping on 27 December can still order for 4 January.

## Block each day you're closed

In DateLock, open **Delivery rules**. Under **Blackout dates**, add each day you're closed with **Add date**, then click **Save rules**. Say you're shut from 24 December to 2 January: add each of those days.

<figure class="shot">
  <img src="{{ '/assets/shot-rules.jpg' | relative_url }}" alt="DateLock's Delivery rules page with a cutoff time, a lead time of 2 days and one blackout date" width="950" height="624" loading="lazy" tabindex="0">
  <figcaption>Delivery rules in DateLock, on our test store.</figcaption>
</figure>

On your store, the calendar greys out those days so customers can't pick them. Every other day stays open.

## Give yourself a run-up

The weeks before a holiday are busy. Two rules help:

- **Lead time** is how many days' notice you need. Raise it for the busy weeks so nobody can order for tomorrow when you're already full. Lower it again in January.
- **Cutoff time** is when ordering for the earliest day stops. After your daily cutoff, the earliest day a customer can pick moves back by one.

## Checkout checks the date too

Once you turn on enforcement in the app, checkout checks the date against your blackout dates and lead time. A day you've blocked, a day that has already passed, or a day inside your lead time is refused, and the customer is asked to choose another date. A checkout with no date at all is stopped as well.

## Phone orders over the holidays

Staff can add the delivery date to a draft order in Shopify admin. Once draft-order dates are on in DateLock, your lead time and blackout dates apply to those orders at checkout too.

## When you're back

Each dated order carries its date as a tag, like `Delivery: 2027-01-04`. Filter your orders by that tag to see what's due on your first day back.

Days that have passed move to their own list on the Delivery rules page. Click **Remove past dates** to clear them.

## What it doesn't cover

Shopify doesn't run checkout rules on Point of Sale sales, subscription renewals or orders created by other apps, so DateLock can't stop those for a day you're closed.

On the Free plan, all of this covers 50 dated orders a month. Go over and we email you. 24 hours later, date collection pauses until the next month or until you upgrade, so the calendar and the checkout check stop too. Checkout keeps working the whole time.
