---
sidebar_position: 4
title: Time to Experiment
---

# An Experiment is Born

## Step 1: Creating Our Experiment
We've got our feature flag, our metrics, our hypothesis, now all that's left is to create our experiment!

:::tip[The Science Of It All]
<details>
<summary>A bit about hypotheses</summary>   
<p>
A well-formed hypothesis is the foundation for a great experiment. We're not all data scientists though, and LaunchDarkly is built to work for the data scientists <em>and</em> for the rest of us. In LaunchDarkly, it's easy to iterate on an experiment and evolve the parameters as you learn! LaunchDarkly has got your back too, if there's anything major wrong with your experiment, LaunchDarkly will raise the red flag for you and let you know.
</p>
</details>
:::

### Building the Experiment in LaunchDarkly
In order to create the Experiment, navigate to the `Experiments` screen in LaunchDarkly and click the "Create experiment" button:

![](@assets/img/Experimentation-Create-New-Experiment-Screen.png)

### Filling In Details 
Fill out the Experiment Details with the following:
> **Name:** "Determine how the wording on the accent label affects the customer's decision to purchase"  
> **Hypothesis:** "Given the right wording to accent featured products, customers will be more likely to click "Add to Cart" indicating their decision to purchase and ultimately, this will translate to more sales."  
> **Experiment Type:** Feature Change

![](@assets/img/new-experiment-details.png)


Click Next, and then fill out the rest of this information: 
> **Randomization unit:** "user"   
> **Primary metric:** "Add to Cart Click"  
> **Secondary metric:** "Checkout Click"     
> **Choose flag variations:** Flag: "Featured Product Label"  
> **Set audience:** Set the value for each variation to "25%", including "None"   
> **0% of `user` contexts remain and will be served:** Control: "None"

If your experiment settings look like this, save your new experiment

![](@assets/img/Experimentation-Create-New-Experiment-Details.png)

## Step 2: Launching Our Experiment
We're now ready to launch this experiment and see which variation will work the best for our application! After saving you should see this at the top of your experiment detail screen:

![](@assets/img/Experimentation-Start-Experiment.png)

### Update the Feature Flag
Return to the feature flag dashboard and access the `Featured Product Label` feature flag. This time, we're going to set both of the default rule and the variation to serve when targetng is off states to "None", or the empty string state. This will ensure that only our experimentation is controlling the rollout, based on the 25% split we setup earlier. Enable the feature, save the changes, and select the experiment tab! 

### Let's Begin 
Within the experiment tab, you'll see an indicator that your experiment is configured. Start the experiment.


## Step 3: Experimentation in Action
If things are working as expected, you should be able to visit your Toggle Outfitters app on your machine, refresh a few times and see the different variations in action.

Here are the variations in action:

| The Classic "NEW"                              | The Bargain "SALE"                               | Who doesn't want something "SPECIAL"?             | The Control "No Label"                 |
| ---------------------------------------------- | ------------------------------------------------ | ------------------------------------------------- | -------------------------------------- |
| ![](@assets/img/Experimentation-New-Gold-Goggles.png) | ![](@assets/img/Experimentation-Sale-Shady-Goggles.png) | ![](@assets/img/Experimentation-Special-Horn-Toggle.png) | ![](@assets/img/Experimentation-No-Label.png) |

With our variations in place, we can start collecting real world data! You could simply add a few to the cart to see the metrics change, but we have a better solution! 