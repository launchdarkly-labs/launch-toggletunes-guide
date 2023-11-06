# Talkin Ship Workshop Guide V2

This revision of the Talkin Ship workshop guide leverages [Astro's Starlight](https://starlight.astro.build/) framework as a underlying framework, giving us far better customization and user experience throughout the workshop. This migration is in progress and may or may not be completed in time for Galaxy. 

Major notable features driving this usage: 
* Integrated workshop search - quickly navigate to topics you care about 
* Better Code views and syntax highlighting 
* Greater customizability for styling throughout 
* Better performance - both on generation and on usage thanks to SSR

In the short term, you can view it live here - [https://talkin-ship-workshop.up.railway.app](https://talkin-ship-workshop.up.railway.app)

This repo itself will remain private until after Galaxy when new features are made public. 

## Running it Locally 

By default, you can run this workshop locally by using `npm run dev` after cloning the repo locally. 

If you want to run a production build, run `npm run build` from the root directory, and then `node /dist/server/entry.mjs` which will start a production run. This will allow the search bar to function on the top of the page and works better for quick iteration. 

## Contributions 

We are following a relatively tight model for this guide, but are welcoming contributions! Talk to Cody if you'd like to contribute, there may or may not be financial incentive involved =)

Worthy Contributions Include: 
* Grammar and syntax fixes 
* Continued re-buildout of modules beyond `De-Risking Releases`
* Implementation of `:::caution` `:::tip` and other [Astro Starlight Asides](https://starlight.astro.build/guides/authoring-content/#asides) to improve readability
* Incorporation of Galaxy Launch Features



