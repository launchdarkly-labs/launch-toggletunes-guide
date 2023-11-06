---
sidebar_position: 5
title: Real World Data

---

# We Need More Data

## Step 1: Collecting Info
To really beef up our experiment, we need some more data. Just refreshing and randomly clicking "Add to Cart" and "Checkout" won't give you much to look at. 

Because you don't have real-world users visiting your site, we wrote a little something something to help create some data and fill out those beautiful graphs and metrics so we can dive in to the details and see an experiment in action.

### Setting Up Playwright 
Open a terminal by pressing Command + Shift + P on MacOS, or Control + Shift + P on PC from within your code editor and typing "Create New Terminal". In this terminal window, run the following command:

```shell
npx playwright test
```

### Let Playwright Create the Data 
Sit back and relax, this will run about 100 new user sessions against your application running locally. Depending on your machine, each run of the automation should take about 1-2 minutes to execute. The browser automation will automagically, randomly decide to click on "Add to Cart" and "Checkout". One run should be enough to generate some interesting data, if time allows, running a second or third should make for some interesting insights.

> **Hey, where's my data?**   
> _It's important to note that experiment results are processed asynchronously in LaunchDarkly, so it may take a few minutes for your results to show up in the portal._



