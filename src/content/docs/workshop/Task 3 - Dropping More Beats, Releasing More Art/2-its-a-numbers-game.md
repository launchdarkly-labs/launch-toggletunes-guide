---
sidebar_position: 3
title: Its a Numbers Game
---

# Using the Metric System



## Capturing the Clicks

Since LaunchDarkly SDKs already know which variations are served to which users, we're going to use the LaunchDarkly SDK to capture metrics about the **outcomes** that result from different variations.

We are going to create two metrics: a **primary metric**, when users choose the "Add to Cart" button, and a **secondary metric**, when users select the "Checkout" button.

:::tip
<details>
<summary>Why have two metrics?</summary>
<p>
Our <strong>primary metric</strong> is going to help us capture a customers interest since it's based on when the user clicks the "Add to Cart" button on a goggle or toggle. We're hoping that with the right choice of language we can catch the user's eye and drive this up.

However, since we only make money when someone actually checks out, we need to also need to track when someone clicks "Checkout" which takes them to our payments page. If this metric goes down, even if the "Add to Cart" clicks go up, it means we are not necessary gaining the most business value from this feature and need to look at other changes. 
</p>
</details>
:::

## Step 1: Setting Up Our Metrics
In LaunchDarkly, select the `Metrics` from the sidebar and then click the "Create metric" button:

![](@assets/img/Experimentation-Create-Metric-Screen.png)

### Creating the Primary Metric  
Create the `Add to Cart Details` metric that we will use for this experiment. Use this information:
> **Name:** "Add to Cart Click"  
> **Key:** "add-to-cart-click"  
> **Description:** "Captures the click of the Add to Cart button"  
> **Event Information:** "Custom"   
> **Event Kind (radio button):** Conversion/Binary  
> **Event name:** "Add to Cart Click"  
> **Success criteria:** "Higher than baseline"   

If your metric settings look like this, save your new metric:

![](@assets/img/add-to-cart-metric.png)

### Creating the Secondary Metric
Create another metric for the Checkout with this information
> **Name:** "Checkout Click"  
> **Description:** "Captures the click of the Checkout button"  
> **Event Kind:** "Custom: track other events by creating your own settings"   
> **Event Kind (radio button):** :white_check_mark: Conversion: track when an end user takes an action  
> **Event name:** "Checkout Click"  
> **Success criteria:** "Higher than baseline"   

If your metric settings look like this, save your new metric:

![](@assets/img/create-checkout-metric.png)

## Step 2: Update the App for Metrics
We now need to update the application to send these metrics to LaunchDarkly. Don't worry, this is bound to be a breeze for a whiz like you! Find the function `addToCartClickHandler` in the `/src/components/inventory.tsx` file. Add this code into the function:

```jsx title='/src/components/inventory.tsx'
//Step 4a
  if (client) {
    client.track("Add to Cart Click"); // this is a "conversion" metric, and this track call "converts" it from "never happened" to "happened at least once" for the current context (whoever is logged in, in this case)
    client.flush();  // flush sends any pending events to LaunchDarkly, which is important *before* we redirect the user
  }
```

This function gets called when a user clicks the "Add to Cart" button on the product card.

Open up the `/src/components/ui/cart-summary.tsx` file and find this comment:

```jsx title='/src/components/ui/cart-summary.tsx'
/*
* Add code from "Using the Metric System", Step 4b
*/
```

We need to update the `onClick` function of the button with this code:

```jsx title='/src/components/ui/cart-summary.tsx'
//Step 4b
if (client) {
  client.track("Checkout Click"); // this is a "conversion" metric, and this track call "converts" it from "never happened" to "happened at least once" for the current context (whoever is logged in, in this case)
  client.flush(); // flush sends any pending events to LaunchDarkly, which is important *before* we redirect the user
}
```

Lastly, we need to tweak one piece of code to get our variations to show up correctly. 
Goggles aren't really "new" for us anymore, so we're going to change the `isGoggle` value passed to the `ProductCard` in the `/src/components/inventory.tsx` file around line 119.  

```jsx title='/src/components/inventory.tsx'
//Step 4c
<ProductCard
  key={index}
  item={product}
  featuredProductLabel={featuredProductLabel}
  isGoggle={product.category === "goggle"}
  isFeatured={featuredProductLabel && index < 4}
>
```

<!-- > **If you have GitHub Copilot:**
> Try selecting the whole ProductCard block of code and then open up Copilot inline chat with **CTRL+I** (Windows/Linux) or **CMD+I** (MacOS). At the prompt, enter something like “change isGoggle to false, and add a comment saying we are changing this because goggles are not new anymore.”  If the suggested replacement code looks good, just click the Accept button! -->

Now that our app has been properly configured, we can set up our experiment in LaunchDarkly. 
















