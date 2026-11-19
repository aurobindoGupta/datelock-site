---
layout: guide
title: How to Add a Delivery Date Picker to Shopify
heading: How to add a delivery date to your Shopify store
description: Let customers choose a delivery date before checkout, require one at checkout, and keep the date on every Shopify order. Three steps with DateLock.
lead: Add a delivery date picker app. With DateLock, you turn on the calendar, set the days you deliver, and turn on the checkout rule. Each order then carries its date.
last_modified_at: 2026-11-19
---

## What your customers see

When a customer clicks **Check out**, a calendar asks for a delivery date before checkout opens. Days you can't deliver are greyed out.

<figure class="shot">
  <img src="{{ '/assets/setup-calendar.jpg' | relative_url }}" alt="The DateLock calendar titled Choose your delivery date, with past days and days inside the lead time greyed out" width="397" height="507" loading="lazy" tabindex="0">
  <figcaption>The calendar on our test store, with a 2-day lead time.</figcaption>
</figure>

## Three steps

1. **Turn on the app embed.** This adds the calendar to your store. It works on any theme and changes no theme code. See [step 2 of the setup guide]({{ '/setup-guide/#2-turn-on-the-app-embed' | relative_url }}).
2. **Set your delivery rules.** Choose how many days' notice you need, the time each day when ordering for the earliest day stops, and the days you can't deliver. See [step 3]({{ '/setup-guide/#3-set-your-delivery-rules' | relative_url }}).
3. **Turn on enforcement.** Once the calendar shows on your store, this makes the date required. See [step 5]({{ '/setup-guide/#5-turn-on-enforcement' | relative_url }}).

## Make the date required

Enforcement is what makes the date required. With it on, checkout stops and asks for another date when the date is missing, in the past, a blackout date, or inside your lead time. Shopify runs the rule on express checkouts like Shop Pay and PayPal too.

## A delivery date is not a delivery estimate

Shopify's **Delivery estimates** setting shows Shopify's own predicted arrival dates. DateLock's date is the day your customer chose. If both show at checkout, they can disagree, so check that setting too ([step 9]({{ '/setup-guide/#9-recommended-avoid-two-different-delivery-promises' | relative_url }})).

## Where the date ends up

Each dated order carries the date in three places in your Shopify admin: a **Delivery date** field, `delivery_date` under Additional details, and a tag like `Delivery: 2026-12-01`. Filter your orders by the tag to see what's due on a day.

<figure class="shot">
  <img src="{{ '/assets/setup-order-date.jpg' | relative_url }}" alt="A Shopify order showing Delivery date Dec 1, 2026 under Metafields, delivery_date 2026-12-01 under Additional details, and the tag Delivery: 2026-12-01" width="1094" height="191" loading="lazy" tabindex="0">
  <figcaption>The same date in three places on the order.</figcaption>
</figure>

You can also show the date to the customer on the Thank-you and Order status pages ([step 6]({{ '/setup-guide/#6-optional-show-the-date-on-the-thank-you-and-order-status-pages' | relative_url }})) and in the order confirmation email ([step 7]({{ '/setup-guide/#7-optional-add-the-date-to-the-order-confirmation-email' | relative_url }})). Orders your staff take by phone can get a date too, through draft orders ([step 8]({{ '/setup-guide/#8-optional-dates-on-draft-orders' | relative_url }})).

## What it doesn't cover

Point of Sale sales, subscription renewals and orders created by other apps. Shopify doesn't run checkout rules on these, so DateLock can't require a date on them.

For every step in detail, see the [setup guide]({{ '/setup-guide/' | relative_url }}).
