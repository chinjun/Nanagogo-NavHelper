# Nanagogo Nav Helper (48G)

This is a Chrome extension that adds a side bar to the 755 web app, allowing easy navigation between 48G member 755 pages. The project is derived from hachy's [Nanagogo-FriendlyNav](https://github.com/hachy/Nanagogo-FriendlyNav), which provides similar functionality for Nogizaka46 members.

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

![screenshots1](http://i.imgur.com/uFlURIk.jpg)

**Issues:**

  Currently, only AKB48 Team A and Team K members are available. Furthermore, scrolling has been disabled so if your screen is too short, some members may be cut off.

**Todo:**

  * Incorporate group pages
  * Add Team B, Team 4, SKE48, NMB48, HKT48
  * Decide how to deal with Kennin (as it is, both concurrent teams will expand if on a Kennin's page)
  * Verify that all links go to the correct members' pages
  * Decide how to deal with Nogizaka46
  * Just generally make the code more functional and less procedural, perhaps by adding additional information to the member data structure and iterating over that.
  * Highlight the currently open member's name.
  * Allow users to toggle between English and Japanese names
  * Create a background page to track persistent options (like English vs. Japanese)
  * Add a Japanese readme
  * Make scrolling not ugly, and re-enable it.
