# Nanagogo Nav Helper (48G)

This is a Chrome extension that adds a side bar to the 755 web app, allowing easy navigation between 48G member 755 pages. The project is derived from hachy's [Nanagogo-FriendlyNav](https://github.com/hachy/Nanagogo-FriendlyNav), which provides similar functionality for Nogizaka46 members.

As of version 0.2.0, all AKB48 and NMB48 members are available, except obviously those who have no 755 page.

**Installation:**

  * Download the ZIP file, extract it somewhere easy to find. 
  * Go to your chrome://extensions page, make sure Developer mode is enabled
  * Click "Load unpacked extension", find and select the Nanagogo-NavHelper folder you just created, and click Open
  * In the future, a *.crx file will be made available to simplify this step.


**Updating (Currently):**

  * Download a new ZIP file.
  * Extract the contents in the same location, so that the new files overwrite the old.
  * Go to chrome://extensions, find Nanagogo-NavHelper in the list, and click Reload


**Usage:**

  This extension will add a sidebar to all 755 pages. If you are on a member's page, that sidebar will automatically expand to show the rest of her team. Otherwise, simply click on a group and then on a team to show the members of that team, and click on a name to visit her page.

![screenshots1](http://puu.sh/k79hi/7b6221c91e.jpg)

**Known Issues:**

  * Currently, SKE48, HKT48, and NGT48 members are not available.
  * A horizontal scrollbar appears at the bottom of the sidebar for some as-yet undetermined reason.

**Todo:**

  * Add SKE48, HKT48, NGT48
  * Incorporate group pages
  * Decide how to deal with Kennin (as it is, both concurrent teams will expand if on a Kennin's page)
  * Decide how to deal with Nogizaka46
  * Verify that all links go to the correct members' pages
  * Improve efficiency, readability of code
  * Allow users to choose between English or Japanese, full names or nicknames.
  * Sort names according to the variant selected
  * Add an options menu, track choices using chrome storage
  * Add a Japanese readme
  * Eliminate horizontal scrollbar
  * Make highlighting a jQuery mouseover event rather than using CSS hover
  * Dreaming: Add other Social Media sites

**Added in 0.2.0**

  * All of AKB48 and NMB48 are now available
  * The current member's name will now be highlighted in her team colour.
  * Program data and functionality are now in separate files
  * Changed how the sidebar is built under the hood, which should make adding teams easier in the future
