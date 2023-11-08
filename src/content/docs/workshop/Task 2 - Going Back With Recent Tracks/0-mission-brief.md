---
sidebar_position: 1
title: Task Two - Going Back with Recent Tracks
---

## Launching our Latest Feature - Playlist History 

Now that we’ve shown our users what’s possible — they want more features! 

Based on recent user feedback, DJ Toggle’s dev team built a new feature.  With this new feature — users will be able to select from previous tracks they’ve heard.  

The developers have already prepped the code is already ready, but we don’t need to wait for the pipeline. Let’s create our new feature, and release it to the users!

### Objective\:Another minute, another launch — Create another feature flag!

Open your LaunchDarkly project and click `create flag`, choose the `Release` option and then follow these steps:

<div className="text-lg font-bold text-blue-500">
  Flag Name:{" "}
  <span className="text-black dark:text-white font-normal">
    Recent Tracks Launch
  </span>
</div>
<div className="flex items-center space-x-3">
  <span className="text-lg text-blue-500 font-bold">Flag Key:</span>
  <CopyField value="recentTunes" client:load />
</div>


Once this is complete, turn on targeting. Flip back to the site and refresh to check out the brand-new navigation system! 

Task two conquered. 