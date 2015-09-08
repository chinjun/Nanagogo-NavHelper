# Nanagogo Nav Helper (48G)

Installation:
Download the `.crx` file from [Releases](wlerin/Nanagogo-NavHelper/), then drag and drop that `.crx` file onto your chrome://extensions page.

Usage:
This extension will add a sidebar to all 755 pages. If you are on a member's page, the sidebar will automatically expand to show the rest of her team. Otherwise, simply click on a group and then on a team to show the members of that team, and click on a name to visit her page.

![screenshots1](http://i.imgur.com/uFlURIk.jpg)

Issues:
Currently, only AKB48 Team A and Team K members are available. Furthermore, scrolling has been disabled so if your screen is too short, some members may be cut off.

Todo:
Incorporate group pages
Add Team B, Team 4, SKE48, NMB48, HKT48
Decide how to deal with Kennin (as it is, both concurrent teams will expand if on a Kennin's page)
Verify that all links go to the correct members' pages
Decide how to deal with Nogizaka46
Just generally make the code more functional and less procedural, perhaps by adding additional information to the member data structure and iterating over that.
Highlight the currently open member's name.
